// 가능한 경우의 수 -> 피보나치
function solution(n) {
  var answer = 0;
  var dp = [];
  dp[1] = 1;
  dp[2] = 2;
  for (var i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + (dp[i - 2] % 1234567);
  }
  answer = dp[n];
  return answer % 1234567;
}
