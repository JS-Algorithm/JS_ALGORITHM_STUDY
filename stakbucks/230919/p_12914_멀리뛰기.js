const DIVIDE_NUM = 1234567;

function solution(n) {
  const dp = Array(n + 1).fill(0);
  dp[0] = 1;
  const jumps = [1, 2];
  for (let i = 1; i <= n; i++) {
    for (let jump of jumps) {
      if (i >= jump) dp[i] += dp[i - jump];
    }
    dp[i] %= DIVIDE_NUM;
  }
  return dp[n];
}
