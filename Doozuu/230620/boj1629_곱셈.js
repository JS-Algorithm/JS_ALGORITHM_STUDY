// 1. 자바스크립트 정수 범위를 넘어가서 BigInt 사용해야 함.
// 2. 분할 정복 알고리즘, 재귀.

const fs = require('fs');
let [A, B, C] = fs.readFileSync('/dev/stdin').toString().split(' ').map(BigInt);

const solve = (power) => {
  // B가 1이면 바로 A%C를 출력한다.
  if (power === 1n) {
    return A % C;
  }
  // B를 2로 나눈 값을 입력하여 함수를 재귀적으로 호출한다.
  const half = solve(power / 2n) % C;

  // B가 홀수면 ((A^(B / 2) % C) * (A^(B / 2) % C) * (A % C)) % C 를 적용한다.
  if (power % 2n) {
    return (half * half * (A % C)) % C;
  }

  // B가 짝수면 ((A^(B / 2) % C) * (A^(B / 2) % C)) % C 를 적용한다.
  return (half * half) % C;
};

console.log(solve(B).toString());
