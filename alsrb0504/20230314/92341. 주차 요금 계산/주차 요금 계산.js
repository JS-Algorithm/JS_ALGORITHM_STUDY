// https://school.programmers.co.kr/learn/courses/30/lessons/92341

function solution(fees, records) {
  const answer = [];
  const [baseTime, basePrice, unitTime, unitPrice] = fees;
  const resultMap = new Map();
  const parking = new Map();

  // 기록 배열을 순회하면서 누적 주차 시간 확인
  records.forEach((r) => {
    const [time, num, _] = r.split(" ");

    const carNum = Number(num);

    // 주창장 맵에 카 번호가 있다면 누적 시간 계산
    // 없다면 주차장 맵에 저장
    if (parking.has(carNum)) {
      const inTime = parking.get(carNum);
      parking.delete(carNum);

      addRecords(carNum, inTime, time);
    } else {
      parking.set(carNum, time);
    }
  });

  // 마지막까지 주차장에서 나가지 않은 차들 시간 계산
  parking.forEach((inTime, key) => {
    addRecords(key, inTime, "23:59");
  });

  // map을 배열로 만든 후, 차량 번호 순으로 정렬
  const arr = [...resultMap].sort((a, b) => a[0] - b[0]);

  // 요금 계산 로직
  arr.forEach((el) => {
    const [_, accTime] = el;

    if (accTime <= baseTime) answer.push(basePrice);
    else {
      const diff = accTime - baseTime;

      answer.push(basePrice + Math.ceil(diff / unitTime) * unitPrice);
    }
  });

  return answer;

  // 주차 시간 계산 함수
  function calcTime(inTime, outTime) {
    const [inHour, inMin] = inTime.split(":").map(Number);
    const [outHour, outMin] = outTime.split(":").map(Number);

    const diffHour = outHour - inHour;
    const diffMin = outMin - inMin;

    let diffTime = 0;

    if (diffMin >= 0) {
      diffTime += diffMin;
      diffTime += diffHour * 60;
    } else {
      diffTime += 60 - inMin + outMin;
      diffTime += (diffHour - 1) * 60;
    }

    return diffTime;
  }

  // 결과 맵에 누적 시간 저장 함수
  function addRecords(carNum, inTime, outTime) {
    const accTime = calcTime(inTime, outTime);
    if (resultMap.has(carNum)) {
      resultMap.set(carNum, resultMap.get(carNum) + accTime);
    } else {
      resultMap.set(carNum, accTime);
    }
  }
}

const records = [
  "05:34 5961 IN",
  "06:00 0000 IN",
  "06:34 0000 OUT",
  "07:59 5961 OUT",
  "07:59 0148 IN",
  "18:59 0000 IN",
  "19:09 0148 OUT",
  "22:59 5961 IN",
  "23:00 5961 OUT",
];

console.log(solution(fees, records));
