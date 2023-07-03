const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let result = input[0]; // 결과로 나와야 하는 값
let broken = !input[2] ? [] : input[2].split(' ').map((el) => +el); // 고장난 버튼 리스트

let btn = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
btn = btn.filter((el) => !broken.includes(el)); // 고장나지 않은 버튼만 남기기

let obj = {};
let test = {}; // 해당 숫자보다 전부 작은 값만 있을 경우를 확인하기 위한 테스트용
let answer = '';
let sorted;

// 100이면 이동할 필요가 없으므로 바로 0 출력
if (result === '100') {
  console.log(0);
} else {
  for (let j = 0; j < btn.length; j++) {
    if (btn[j] >= Number(result[0])) test[btn[j]] = btn[j] - result[0];
  }
  if (!Object.values(test).length) {
    for (let i = 0; i < result.length; i++) {
      for (let j = 0; j < btn.length; j++) {
        obj[btn[j]] = btn[j] - result[i];
      }
      sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]); // 내림차순 정렬
      answer += sorted[0][0];
      obj = {};
    }
  } else {
    for (let i = 0; i < result.length; i++) {
      for (let j = 0; j < btn.length; j++) {
        if (btn[j] >= Number(result[i])) obj[btn[j]] = btn[j] - result[i];
      }
      sorted = Object.entries(obj).sort((a, b) => a[1] - b[1]); // 오름차순 정렬
      answer += sorted[0][0];
      obj = {};
    }
  }

  let dif = Math.abs(result - Number(answer));
  answer = answer.length + dif;

  console.log(answer);
}
