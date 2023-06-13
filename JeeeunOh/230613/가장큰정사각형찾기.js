// dp로 수정
function solution(board) {
  let answer = 0;

  let dp = Array.from({length: board.length}, (_, idx) => Array(board[idx].length).fill(0));

  // 가장 위쪽 줄과 가장 왼쪽 줄 dp만 가능한 정사각형 개수 1로 맞춰줌.
  for (let i = 0; i < board.length; i++) {
    if (board[i][0]) {
      dp[i][0] = 1;
      answer = 1;
    }
  }

  for (let i = 0; i < board[0].length; i++) {
    if (board[0][i]) {
      dp[0][i] = 1;
      answer = 1;
    }
  }

  for (let i = 1; i < board.length; i++) {
    for (let j = 1; j < board[0].length; j++) {
      if (board[i][j]) {
        let size = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1;
        // 왼쪽 끝 모서리가 1 이어야 위 size가 성립함.
        if (board[i - size + 1][j - size + 1]) dp[i][j] = size;
        // 0이라면 size 하나 줄이기
        else dp[i][j] = size - 1;

        answer = Math.max(answer, dp[i][j]);
      }
    }
  }

  return answer ** 2;
}

// 시간초과
function solution(board) {
  let answer = 0;

  const isSquare = (row, column, size) => {
    // row, column 기준 size 크기를 가지는 정사각형의 가장 바깥 테두리가 1인지를 검사
    if (row + size - 1 >= board.length || column + size - 1 >= board[0].length) return false;

    for (let i = 0; i < size; i++) {
      if (row + i >= board.length || column + i >= board[0].length) return false;
      if (board[row + i][column + size - 1] != 1) return false;
      if (board[row + size - 1][column + i] != 1) return false;
    }

    return true;
  };

  // 시간복잡도 O(N^3)
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j]) {
        let size = 1;

        while (true) {
          if (!isSquare(i, j, size)) break;
          size++;
        }

        answer = Math.max(answer, (size - 1) ** 2);
      }
    }
  }

  return answer;
}
