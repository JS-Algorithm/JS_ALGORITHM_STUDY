const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const N = Number(input[0]);
  const P = input[1].split(' ').map(Number);
  P.unshift(0);
  const dp = [...P];

  for (let i = 1; i <= N; i++) {
    for (let j = i - 1; j > 0; j--) {
      dp[i] = Math.min(dp[i], dp[j] + dp[i - j]);
    }
  }
  console.log(dp[N]);
}

solution(input);

// 1개 사는데 1원
// 2개 사는데 1원
// 3개 사는데 2원
// 4개 사는데 3원
// 5개 사는데 5원
