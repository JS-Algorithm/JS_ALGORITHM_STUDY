const [_, ...input] = require('fs').readFileSync('ex.txt').toString().trim().split('\n').map(Number);
const LIMIT = 1000000007n;
let dp = Array(5001).fill(0n);
dp[0] = 1n;
dp[1] = 0n;

for (let i = 2; i <= 5000; i += 2) {
  for (let j = 0; j < i; j += 2) {
    dp[i] = (dp[i] + ((dp[j] * dp[i - j - 2]) % LIMIT)) % LIMIT;
  }
}

dp = dp.map((v) => (v ? v : 0n));

let answer = '';
for (let i of input) answer += `${dp[i]}\n`;

console.log(answer);
