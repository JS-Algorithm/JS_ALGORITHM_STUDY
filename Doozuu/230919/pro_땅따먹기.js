function solution(land) {
  const dp = Array.from({length: land.length}, () => Array(4).fill(0));

  dp[0] = land[0];

  for (let i = 0; i < land.length - 1; i++) {
    for (let j = 0; j < 4; j++)
      for (let k = 0; k < 4; k++) {
        if (j === k) continue; // 두 행의 열이 같으면 건너뛰기
        const temp = dp[i][j] + land[i + 1][k]; // 현재 행의 값 + 다음 행의 값
        if (temp > dp[i + 1][k]) dp[i + 1][k] = temp; // dp의 해당 위치 값보다 temp가 더 크면 temp로 업데이트
      }
  }
  return Math.max(...dp.at(-1));
}
