function solution(board) {
  const dp = Array.from({length: board.length}, () => Array(board[0].length).fill(0));

  let max = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 1) {
        if (i >= 1 && j >= 1) {
          // 왼쪽 대각선, 위, 옆 dp 값이 1이 아니면 그 중 최솟값 +1
          const min = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
          dp[i][j] = min + 1;
        } else {
          dp[i][j] = 1;
        }
        max = Math.max(max, dp[i][j]);
      }
    }
  }
  return max ** 2;
}

// 0, 1, 1, 1
// 1, 1, 2, 2
// 1, 2, 2, 3
