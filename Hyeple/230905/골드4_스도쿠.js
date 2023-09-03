const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const board = []; //스도쿠 보드 저장될 곳
for (let i = 0; i < 9; i++) {
  const line = input[i].trim().split('').map(Number);
  board.push(line);
}

// 스도쿠 보드 출력 함수
function printSudoku(board) {
  for (let i = 0; i < 9; i++) {
    console.log(board[i].join(''));
  }
}

// 스도쿠 해결 함수
function solveSudoku(board) {
	
	//유효성 검사
  function isValid(row, col, num) {

    // 행, 열에 중복된 숫자 있는지 확인
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === num || board[i][col] === num) {
        return false;
      }
    }

    // 3x3 영역에 중복된 숫자 있는지 확인
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (board[i][j] === num) {
          return false;
        }
      }
    }

    return true;
  }

  function backtrack() {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === 0) {
          for (let num = 1; num <= 9; num++) {
            if (isValid(row, col, num)) {
              board[row][col] = num;
              if (backtrack()) {
                return true;
              }
              board[row][col] = 0; // 백트래킹
            }
          }
          return false;
        }
      }
    }
    return true; // 모든 칸이 채워진 경우
  }

  backtrack();
  return board;
}

const solvedSudoku = solveSudoku(board);

printSudoku(solvedSudoku);