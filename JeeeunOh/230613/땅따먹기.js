function solution(land) {
  let answer = 0;
  let dp = Array.from({length: land.length}, () => Array(4).fill(0));

  for (let i = 0; i < 4; i++) {
    dp[0][i] = land[0][i];
  }

  for (let i = 1; i < land.length; i++) {
    for (let j = 0; j < 4; j++) {
      for (let k = 0; k < 4; k++) {
        if (j !== k) dp[i][j] = Math.max(dp[i][j], dp[i - 1][k] + land[i][j]);
      }

      // 마지막 층에서 최대값 갱신
      if (i === land.length - 1) answer = Math.max(answer, dp[i][j]);
    }
  }

  return answer;
}
