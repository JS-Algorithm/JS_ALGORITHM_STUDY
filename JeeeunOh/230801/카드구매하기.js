// 새로운 풀이 : 해당 개수를 구매하기 위한 가격 1차 설정 후 거꾸로 내려감.
const readFileSyncAddress = process.platform === 'linux' ? '/dev/stdin' : '/Users/jieun/Documents/GitHub/JS_ALGORITHM_STUDY/JeeeunOh/230801/input.txt';
const input = require('fs').readFileSync(readFileSyncAddress).toString().trimEnd().split('\n');

const N = +input[0];
const prices = input[1].split(' ').map(Number);
let ans = Array(N + 1).fill(Infinity);

for (let i = 1; i <= N; i++) {
  ans[i] = prices[i - 1];
  for (let j = 1; j < i; j++) {
    ans[i] = Math.min(ans[i], ans[i - j] + prices[j - 1]);
  }
}

console.log(ans[N]);

/** 기존 풀이 : 순서대로 올라감
const readFileSyncAddress = process.platform === 'linux' ? '/dev/stdin' : '/Users/jieun/Documents/GitHub/JS_ALGORITHM_STUDY/JeeeunOh/230801/input.txt';
const input = require('fs').readFileSync(readFileSyncAddress).toString().trimEnd().split('\n');

const N = +input[0];
const arr = input[1].split(' ').map(Number);
let ans = Array(N + 1).fill(Infinity);
ans[0] = 0;

arr.forEach((price, idx) => {
  for (let i = idx + 1; i <= N; i += idx + 1) {
    ans[i] = Math.min(ans[i], ans[i - (idx + 1)] + price);
  }
});

console.log(ans[N]);
*/
