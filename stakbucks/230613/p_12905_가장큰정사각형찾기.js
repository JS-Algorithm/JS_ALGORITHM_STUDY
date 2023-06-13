function solution(board) {
  const dp = Array.from({length: board.length}, () => Array(board[0].length).fill(0));

  let maxLength = 0; // 정사각형 한 변의 최대 길이

  //왼쪽 위 대각선을 확인해야 하기 때문에 첫 행, 첫 열 부터 먼저 확인
  for (let column = 0; column < board.length; column++) {
    dp[column][0] = board[column][0];
    if (maxLength < dp[column][0]) maxLength = dp[column][0];
  }
  for (let row = 0; row < board[0].length; row++) {
    dp[0][row] = board[0][row];
    if (maxLength < dp[0][row]) maxLength = dp[0][row];
  }

  for (let column = 1; column < board.length; column++) {
    for (let row = 1; row < board[0].length; row++) {
      if (board[column][row] === 1) {
        // 현재 위치의 값이 1이고
        // 왼쪽 위 대각선, 왼쪽, 위쪽 값이 모두 0이 아니면
        // 그 중 가장 작은 값 +1 이 현재 위치의 dp
        const min = Math.min(dp[column - 1][row - 1], dp[column - 1][row], dp[column][row - 1]);
        if (min > 0) {
          dp[column][row] = min + 1;
        } else {
          dp[column][row] = 1;
        }
      }

      // maxLength보다 방금 구한 dp값이 크면 교체
      if (maxLength < dp[column][row]) maxLength = dp[column][row];
    }
  }

  // 처음에 Math.max(...dp.Math.flat()) 으로 dp의 최댓값을 구하는 방식으로 했는데, 효율성 테스트에서 런타임에러 발생해서 maxLength라는 변수를 추가로 사용했습니다.

  return maxLength ** 2;
}
