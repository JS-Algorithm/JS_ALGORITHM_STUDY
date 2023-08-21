function solution(fees, records) {
  const [baseTime, baseRate, unitTime, unitRate] = fees;

  const parked = new Map(); // 현재 주차장 [차량 번호, 입차 시간]
  const record = new Map(); // 과거 출차된 차량 기록 [차량 번호, 누적 주차 시간]

  const addRecord = (carNumber, time) => {
    // 차량 record에 등록/갱신
    if (record.has(carNumber)) {
      const value = record.get(carNumber);
      record.set(carNumber, value + time);
    } else {
      record.set(carNumber, time);
    }
  };

  const calcTime = (carNumber, outTime) => {
    // 주차 시간 계산 (분 단위)
    const inTime = parked.get(carNumber);
    const inDate = new Date(`2023/12/25 ${inTime}:00`);
    const outDate = new Date(`2023/12/25 ${outTime}:00`);
    const diff = (outDate.getTime() - inDate.getTime()) / (60 * 1000);
    return diff;
  };
  const calcFee = (time) => {
    // 누적 주차시간으로 최종 요금 계산하는 함수
    if (time <= baseTime) {
      return baseRate;
    }
    return baseRate + Math.ceil((time - baseTime) / unitTime) * unitRate;
  };

  for (const r of records) {
    const [time, carNumber, type] = r.split(' ');
    if (type === 'IN') {
      parked.set(carNumber, time);
    } else {
      const diff = calcTime(carNumber, time);
      addRecord(carNumber, diff);
      parked.delete(carNumber);
    }
  }

  // 출차되지 않은 차들 23:59에 출차처리
  for (const carNumber of parked.keys()) {
    const diff = calcTime(carNumber, '23:59');
    addRecord(carNumber, diff);
    parked.delete(carNumber);
  }

  const answer = [];
  // 차량 번호 순으로 정렬
  const sortedRecord = [...record].sort((a, b) => a[0] - b[0]);
  for (const [carNumber, time] of sortedRecord) {
    answer.push(calcFee(time));
  }

  return answer;
}
