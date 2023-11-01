const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const N = Number(input);

  const dp = Array(N + 1).fill(0);

  dp[0] = 1;
  dp[2] = 3;

  for (let i = 4; i <= N; i += 2) {
    dp[i] += dp[i - 2] * dp[2];
    for (let j = 4; j <= i; j += 2) {
      dp[i] += dp[i - j] * 2;
    }
  }
  console.log(dp[N]);
}
solution(input);

// dp[2]=3
// dp[4]=dp[2]*dp[2]
// dp[6]=dp[4]*3 + dp[2]*2
// ...
// dp[N]= dp[N-2]*dp[2] + dp[N-4]*2 + dp[N-6]*2 + dp[N-8]*2 + ...
