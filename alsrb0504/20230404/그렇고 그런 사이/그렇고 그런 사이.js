// 링고와 순열도 동일한 코드로 통과 가능
const readFileSyncAddress = "/dev/stdin";
const input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trimEnd()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);
const answer = [];
let max = Math.floor((N * (N - 1)) / 2);

// K가 최대 범위((N * (N - 1)) / 2)를 넘어가면 종료
if (max < K) {
  console.log(-1);
  return;
}

// 조건(K)을 만족하는 순열을 만들기 위해 아래와 같은 규칙 적용
// [rest , curr] = [N, K]
// 1. rest > (curr - 1) 경우, 현재 위치에 curr를 위치 후,
// rest -= (curr - 1); 과 curr--; 으로 값을 감소

// 2. rest <= curr - 1 경우,
// 2-1. rest === 0인 경우, 1 ~ curr까지 오름차순으로 삽입
// 2-2. rest !== 0인 경우, 1 ~ curr까지 오름차순으로 삽입 중,
// curr뒤에 rest개의 윈소가 위치하도록 조정
let rest = K;
let curr = N;

while (rest > 0 && curr > 0) {
  if (rest >= curr - 1) {
    answer.push(curr);
    curr--;
    rest -= curr;
  } else break;
}

// 2-1. rest !== 0인 경우, 1~curr까지 중, curr 뒤에 rest개의 원소가
// 들어오도록 조정
if (rest > 0) {
  // curr의 뒤에 rest의 숫자가 위치
  for (let i = 1; i < curr; i++) {
    if (curr - i === rest) {
      answer.push(curr);
    }
    answer.push(i);
  }
}
// 2-2. rest === 0인 경우, 1~curr까지 삽입
else {
  for (let i = 1; i <= curr; i++) answer.push(i);
}

console.log(answer.join(" "));
