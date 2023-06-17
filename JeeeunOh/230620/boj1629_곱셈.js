const readFileSyncAddress = process.platform === 'linux' ? '/dev/stdin' : '/Users/jieun/Documents/GitHub/JS_ALGORITHM_STUDY/JeeeunOh/230620/input.txt';

const input = require('fs').readFileSync(readFileSyncAddress).toString().trimEnd().split('\n');

const [A, B, C] = input[0].split(' ').map(BigInt);

const calc = (cnt) => {
  if (cnt === 1n) return A % C;

  let temp = calc(cnt / 2n) % C;

  if (cnt % 2n === 0n) return (temp * temp) % C;
  else return (temp * temp * (A % C)) % C;
};

console.log(calc(B).toString());
