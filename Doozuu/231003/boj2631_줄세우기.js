const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => Number(el));

// LIS 알고리즘 : 길이가 가장 긴 부분수열의 길이 구하기
const [N, ...data] = input;

let dp = new Array(N).fill(0);
let maxLen = 0;

for (let i = 0; i < N; i++) {
  dp[i] = 1;
  for (let j = 0; j < i; j++) {
    if (data[i] > data[j] && dp[i] < dp[j] + 1) {
      dp[i] = dp[j] + 1;
    }
  }
  if (dp[i] > maxLen) maxLen = dp[i];
}

console.log(N - maxLen);
