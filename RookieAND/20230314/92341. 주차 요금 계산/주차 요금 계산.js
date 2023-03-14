// 각 차량의 입차 시간을 저장한 후, 출차 시 주차된 시간을 계산하여 반환시킨다.
function solution(fees, records) {
  const [baseMin, baseCost, feeMin, feeCost] = fees;

  const parking = new Map();
  const parkedTime = new Map();

  function calculateTime(timeStr) {
    const [hour, minute] = timeStr.split(':').map(Number);
    return hour * 60 + minute;
  }

  records.forEach((record) => {
    const [time, carNum, state] = record.split(' ');
    // 입차라면 현재 시간을 분 단위로 환산하여 저장한다.
    if (state === 'IN') {
      parking.set(carNum, calculateTime(time));
      return;
    }
    // 출차라면 주차장에 주차된 시간을 측정하고 이를 Map에 추가한다.
    const [inTimeMin, outTimeMin] = [parking.get(carNum), calculateTime(time)];
    parkedTime.set(
      carNum,
      outTimeMin - inTimeMin + (parkedTime.get(carNum) ?? 0),
    );
    parking.delete(carNum);
  });

  // 입차를 했지만 아직 출차가 되지 않은 경우, 시간을 추가하여 더해주어야 함.
  const midNightMin = 23 * 60 + 59;
  for (const [carNum, parkStartMin] of parking.entries()) {
    parkedTime.set(
      carNum,
      midNightMin - parkStartMin + (parkedTime.get(carNum) ?? 0)
    );
  }

  const answer = [];
  for (const [carNum, parkMin] of parkedTime.entries()) {
    let totalCost =
      baseCost +
      Math.ceil((parkMin - baseMin < 0 ? 0 : parkMin - baseMin) / feeMin) *
        feeCost;
    answer.push([carNum, totalCost]);
  }
  return answer.sort((a, b) => a[0] - b[0]).map(([_, cost]) => cost);
}