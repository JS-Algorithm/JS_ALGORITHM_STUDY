const readFileSyncAddress = process.platform === 'linux' ? '/dev/stdin' : '/Users/jieun/Documents/GitHub/JS_ALGORITHM_STUDY/JeeeunOh/230620/input.txt';

const input = require('fs').readFileSync(readFileSyncAddress).toString().trimEnd().split('\n');

const [K, N] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(Number);
arr.sort((a, b) => b - a);

let start = 1,
  end = arr[0];

let ans = 0;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let cnt = 0;

  for (const el of arr) {
    cnt += Math.floor(el / mid);
  }
  if (cnt >= N) {
    // mid 길이인 랜선을 N개 만들 수 있는가?
    ans = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(ans);
