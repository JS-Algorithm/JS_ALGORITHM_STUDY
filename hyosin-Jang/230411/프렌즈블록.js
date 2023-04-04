function solution(m, n, board) {
  var answer = 0;

  board = board.map((str) => str.split(''));

  function check2x2(board, set) {
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (board[i][j] == '.') continue; // 지운 배열인 경우 패스
        if (
          board[i][j] == board[i + 1][j] &&
          board[i][j] == board[i][j + 1] &&
          board[i][j] == board[i + 1][j + 1]
        ) {
          set.add(JSON.stringify([i, j]));
          set.add(JSON.stringify([i + 1, j]));
          set.add(JSON.stringify([i + 1, j + 1]));
          set.add(JSON.stringify([i, j + 1]));
        }
      }
    }
  }

  function deleteAndMove2x2(board, set) {
    set.forEach((item) => {
      const [i, j] = JSON.parse(item); // [1, 2]
      board[i][j] = '.';
    });

    for (j = 0; j < n; j++) {
      let notVisitStr = '';

      for (i = m - 1; i >= 0; i--) {
        if (board[i][j] !== '.') notVisitStr += board[i][j]; // JGD
      }
      let idx = 0;
      for (i = m - 1; i >= 0; i--) {
        board[i][j] = idx === notVisitStr.length ? '.' : notVisitStr[idx++];
      }
    }
    return board;
  }

  while (1) {
    const set = new Set();
    check2x2(board, set);
    if (set.size == 0) break; // set에 들은게 없으면 2x2를 못찾은 것이므로 종료
    answer += set.size;
    board = deleteAndMove2x2(board, set);
  }

  return answer;
}

let m = 6;
let n = 6;
let board = ['TTTANT', 'RRFACC', 'RRRFCC', 'TRRRAA', 'TTMMMF', 'TMMTTJ'];

solution(m, n, board);
