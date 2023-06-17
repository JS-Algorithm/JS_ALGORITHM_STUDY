const readFileSyncAddress = process.platform === 'linux' ? '/dev/stdin' : '/Users/jieun/Documents/GitHub/JS_ALGORITHM_STUDY/JeeeunOh/230620/input.txt';

const input = require('fs').readFileSync(readFileSyncAddress).toString().trimEnd().split('\n');

const [A, B, C] = input[0].split(' ').map(Number);

function calc(cnt) {
  if (cnt === 1) return A % C;

  let temp = calc(Math.floor(cnt / 2)) % C;

  if (cnt % 2 === 0) return (temp * temp) % C; // 짝수
  else return (((temp * temp) % C) * A) % C; // 홀수
}

console.log(calc(B));
