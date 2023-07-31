const readFileSyncAddress = process.platform === 'linux' ? '/dev/stdin' : '/Users/jieun/Documents/GitHub/JS_ALGORITHM_STUDY/JeeeunOh/230801/input.txt';
const input = require('fs').readFileSync(readFileSyncAddress).toString().trimEnd().split('\n');

const N = +input[0];
const arr = input.slice(1).map((item) => item.split(' ').map(Number));
const MAX = [[...arr[0]]];
const MIN = [[...arr[0]]];

for (let row = 1; row < arr.length; row++) {
  let addMax = [];
  let addMin = [];
  for (let cur = 0; cur < 3; cur++) {
    let maxScoreArr = [];
    let minScoreArr = [];
    for (let prev = 0; prev < 3; prev++) {
      if (Math.abs(cur - prev) <= 1) {
        maxScoreArr.push(MAX[row - 1][prev] + arr[row][cur]);
        minScoreArr.push(MIN[row - 1][prev] + arr[row][cur]);
      }
    }
    addMax.push(Math.max(...maxScoreArr));
    addMin.push(Math.min(...minScoreArr));
  }
  MAX.push(addMax);
  MIN.push(addMin);
}

console.log(Math.max(...MAX[N - 1]), Math.min(...MIN[N - 1]));
