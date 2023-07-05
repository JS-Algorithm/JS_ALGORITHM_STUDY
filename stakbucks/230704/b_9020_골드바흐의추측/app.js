const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const test = input.splice(1).map(Number);

  const answer = [];
  // 소수 여부 판별 함수
  function isPrime(num) {
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  for (const num of test) {
    let a = num / 2;
    let b = num / 2;
    while (1) {
      if (isPrime(a) && isPrime(b)) {
        answer.push([a, b].join(' '));
        break;
      }
      a--;
      b++;
    }
  }
  console.log(answer.join('\n'));
}

solution(input);
