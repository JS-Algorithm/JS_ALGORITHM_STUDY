const [a, ...b] = require('fs').readFileSync('ex.txt').toString().split('\n');

const [n, k] = a.split(' ').map(Number);
const coins = b.map(Number);

const dp = Array(k + 1).fill(0);
dp[0] = 1;

function solution() {
  for (let i = 0; i < n; i++) {
    for (let j = coins[i]; j <= k; j++) {
      dp[j] += dp[j - coins[i]];
    }
  }
  return dp[k];
}

console.log(solution());
