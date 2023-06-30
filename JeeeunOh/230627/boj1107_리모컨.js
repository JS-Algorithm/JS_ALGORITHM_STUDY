const readFileSyncAddress = process.platform === 'linux' ? '/dev/stdin' : '/Users/jieun/Documents/GitHub/JS_ALGORITHM_STUDY/JeeeunOh/230627/input.txt';

const input = require('fs').readFileSync(readFileSyncAddress).toString().trimEnd().split('\n');

const [N, M] = [input[0], +input[1]];
let isPos = Array(11).fill(1);
if (M != 0) {
  input[2]
    .split(' ')
    .map(Number)
    .forEach((btn) => (isPos[btn] = 0));
}

let ans = Math.abs(+N - 100); // 초기값 : 100에서부터 +-한 값

for (let num = 0; num <= 999999; num++) {
  let flag = String(num)
    .split('')
    .every((item) => isPos[item] === 1);
  if (flag) {
    ans = Math.min(ans, String(num).length + Math.abs(num - N));
  }
}

console.log(ans);
