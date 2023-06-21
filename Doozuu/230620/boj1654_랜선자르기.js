// 이분 탐색
let input = require('fs').readFileSync('dev/stdin').toString().split('\n');

let N = input[0].split(' ')[1];
let start = 1; // 시작
let end = Math.max(...input.slice(1).map((el) => +el)); // 끝

while (start <= end) {
  let mid = Math.floor((start + end) / 2); // 중간점
  let sum = input.slice(1).reduce((acc, cur) => acc + parseInt(cur / mid), 0); // 만들 수 있는 랜선 개수의 합
  if (sum < N) {
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}

console.log(end);
