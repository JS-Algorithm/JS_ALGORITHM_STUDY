const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

// 점화식:
// dp[2]=dp[1][0]+dp[0][1]=2
// dp[3]=dp[2][0]+dp[1][1]+dp[0][2]=5
// ...
// dp[i]=dp[i-1][0]+dp[i-2][1]+...+dp[0][i-1]

const DIVIDE_NUM = BigInt(1000000007);

function solution(input) {
  const [T, ...L] = input;
  const answer = [];
  const dp = Array(2501).fill(BigInt(0));
  dp[0] = BigInt(1);
  dp[1] = BigInt(1);

  for (let i = 2; i < 2501; i++) {
    for (let j = i - 1; j >= 0; j--) {
      dp[i] = (dp[i] + dp[j] * dp[i - 1 - j]) % DIVIDE_NUM;
    }
  }
  for (const length of L) {
    if (length % 2) answer.push(0);
    else answer.push(dp[length / 2]);
  }

  console.log(answer.join('\n'));
}
solution(input);
