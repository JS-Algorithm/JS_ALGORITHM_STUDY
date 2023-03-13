function solution(fees, records) {
  // {key: 차량번호, value: 총 주차요금}
  const totalPrice = new Map();

  // {key: 차량번호, value: 입고 시간}
  const parked = new Map();

  for (let record of records) {
    // 문자열 공백 split
    let [time, num, status] = record.split(' ');
    let [hour, minute] = time.split(':');
    // 시간 -> 분으로 변경
    time = 60 * Number(hour) + Number(minute);

    // 입고된 차량의 경우, parked에 등록
    if (status === 'IN') {
      parked.set(num, time);
      // 출고 차량의 경우 주차시간 계산
    } else if (status === 'OUT') {
      // 총 누적시간 갱신: 누적시간 + (현재시간 - 이전에 IN으로 기록된 시간)
      totalPrice.set(
        num,
        (totalPrice.get(num) || 0) + (time - parked.get(num)),
      );
      // 차량번호 제거
      parked.delete(num);
    }
  }

  // parked에 남아있으면 23:59에 나갔다는 뜻 > totalPrice 갱신
  for (let [num, time] of parked.entries()) {
    totalPrice.set(num, (totalPrice.get(num) || 0) + (1439 - time));
  }

  // 요금 계산 후 리턴
  return (
    [...totalPrice]
      // 1. 차량번호 순으로 정렬
      .sort((a, b) => a[0] - b[0])
      // 2. 요금 계산
      // - 기본 주차 시간보다 적게 주차한 경우 기본 요금 반환
      // - 기본 주차 시간을 초과한 경우, 초과한 시간에 대해, 분당 추가요금을 계산해서 반환
      .map((e) =>
        e[1] < fees[0]
          ? fees[1]
          : fees[1] + Math.ceil((e[1] - fees[0]) / fees[2]) * fees[3],
      )
  );
}
