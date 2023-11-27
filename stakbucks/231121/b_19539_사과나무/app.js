const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

function solution(input) {
  const totalDays = input[1].reduce((acc, cur) => acc + cur, 0) / 3;

  // 모든 숫자들의 합이 반드시 3의 배수여야 한다.
  if (totalDays % 1) return console.log('NO');

  let twoCnt = 0;
  input[1].forEach((height) => {
    twoCnt += Math.floor(height / 2); // 2로 나눈 몫
  });

  // 2를 사용한 횟수가 반드시 총 totalDays 보다 커야 한다
  if (twoCnt < totalDays) console.log('NO');
  else console.log('YES');
}

solution(input);
