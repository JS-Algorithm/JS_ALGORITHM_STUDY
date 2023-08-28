const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const [N, K] = input.shift().split(' ').map(Number);
  const arr = Array.from({length: N}, (v, i) => input[i].split(' ').map(Number));
  const dp = Array(K + 1).fill(0); // 무게별로 최대 가치 기록

  for (const [W, V] of arr) {
    for (let i = K; i >= W; i--) {
      dp[i] = Math.max(dp[i], dp[i - W] + V);
    }
  }
  console.log(dp[K]);
}

solution(input);
