function solution(fees, records) {
  const [base_time, base_fee, unit_time, unit_fee] = fees;
  let obj = {};
  let sum_time = {};
  let answer = [];

  // {차량 번호: [시간, 시간,,]}
  records.map((el) => {
    const [time, num, status] = el.split(' ');
    const [hour, minute] = time.split(':').map(Number);
    let minutes = hour * 60 + minute;
    obj[num] = obj[num] ? [...obj[num], minutes] : [minutes];
  });
  // {차량 번호: 누적 주차 시간}
  for (const [key, value] of Object.entries(obj)) {
    let temp = 0;
    value.map((el, i) => {
      if (value.length % 2 && i === value.length - 1) {
        temp += 1439 - el;
      } else {
        temp = !(i % 2) ? temp - el : temp + el;
      }
    });
    sum_time[key] = temp;
  }
  // 차량 번호 오름차순 정렬
  const sorted = Object.entries(sum_time).sort((a, b) => a[0] - b[0]);
  // 주차 요금 계산
  for (const [key, value] of sorted) {
    if (value <= base_time) {
      answer.push(base_fee);
    } else {
      let fee = base_fee + Math.ceil((value - base_time) / unit_time) * unit_fee;
      answer.push(fee);
    }
  }
  return answer;
}
