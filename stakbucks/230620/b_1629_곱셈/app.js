const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

function solution(input) {
  let [a, b, c] = input.map(BigInt);

  const power = (a, b) => {
    // 0 제곱하면 1
    if (b === 0n) return BigInt(1);

    // a^b=a^(b/2)*a^(b/2) 이용
    const half = power(a, BigInt(parseInt(b / BigInt(2))));
    if (b % 2n) {
      // b가 홀수인 경우
      return (half * half * (a % c)) % c;
    }
    // b가 짝수인 경우
    return (half * half) % c;
  };
  return console.log(parseInt(power(a, b)));
}

solution(input);
