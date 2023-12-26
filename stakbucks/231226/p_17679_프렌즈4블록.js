const EMPTY = 0;

function solution(m, n, board) {
  board = board.map((v) => v.split(''));
  let nextBoard = [...board].map((v) => [...v]);

  while (1) {
    // board를 순회하면서 지워지는 블록들 모두 파악 -> 지워지는 블록들은 nextBoard에 EMPTY로 표시
    let flag = false;
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] !== EMPTY && canErase(i, j)) {
          flag = true;
          nextBoard[i][j] = nextBoard[i + 1][j] = nextBoard[i][j + 1] = nextBoard[i + 1][j + 1] = EMPTY;
        }
      }
    }

    // 블록이 지워진 후 위에 있는 블록들 떨어뜨리기
    if (flag) {
      dropBlocks();
      board = [...nextBoard].map((v) => [...v]);
    }
    if (!flag) break;
  }

  let answer = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === EMPTY) answer++;
    }
  }

  return answer;

  function canErase(i, j) {
    const target = board[i][j];
    if (j + 1 < n && i + 1 < m && board[i][j + 1] === target && board[i + 1][j] === target && board[i + 1][j + 1] === target) {
      return true;
    }
    return false;
  }

  function dropBlocks() {
    for (let j = 0; j < n; j++) {
      const temp = [];
      for (let i = 0; i < m; i++) {
        if (nextBoard[i][j] !== EMPTY) {
          temp.push(nextBoard[i][j]);
          nextBoard[i][j] = EMPTY;
        }
      }

      // temp에서 꺼내서 아래부터 채우기
      for (let i = m - 1; ; i--) {
        if (temp.length === 0) break;
        nextBoard[i][j] = temp.pop();
      }
    }
  }
}
