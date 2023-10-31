const input = require('fs').readFileSync('ex.txt').toString().split('\n');
const [R, C, T] = input[0].split(' ').map(Number);
const board = input.slice(1).map((el) => el.split(' ').map(Number));
const move = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
];

// 공기 청정기 위치
let air_conditionar = [];

board.map((el, i) =>
  el.map((item, j) => {
    if (item === -1) air_conditionar.push([i, j]);
  }),
);

// 확산
function Spread(board) {
  let newBoard = JSON.parse(JSON.stringify(board)); // 깊은 복사
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      let cur = board[i][j];
      if (cur !== 0 && cur !== -1) {
        let spread = 0; // 확산된 개수
        for (let k = 0; k < 4; k++) {
          let [x, y] = move[k];
          if (i + x > -1 && i + x < R && j + y > -1 && j + y < C && board[i + x][j + y] !== -1) {
            newBoard[i + x][j + y] += Math.floor(cur / 5);
            spread++;
          }
        }
        newBoard[i][j] = newBoard[i][j] - Math.floor(cur / 5) * spread;
      }
    }
  }
  return newBoard;
}

// 공기청정기
function AirConditionar(newBoard) {
  let copyBoard = JSON.parse(JSON.stringify(newBoard)); // 깊은 복사
  let [[ax1, ay1], [ax2, ay2]] = air_conditionar;
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (i === 0) {
        if (j === C - 1) {
          copyBoard[i][j] = newBoard[i + 1][j];
        } else {
          copyBoard[i][j] = newBoard[i][j + 1];
        }
      } else if (i > 0 && i < ax1) {
        if (j === C - 1) {
          copyBoard[i][j] = newBoard[i + 1][j];
        } else if (j === 0) {
          copyBoard[i][j] = newBoard[i - 1][j];
        }
      } else if (i === ax1) {
        if (j === ay1 + 1) {
          copyBoard[i][j] = 0;
        } else if (j > ay1 + 1 && j < C) {
          copyBoard[i][j] = newBoard[i][j - 1];
        }
      } else if (i === ax2) {
        if (j === ay2 + 1) {
          copyBoard[i][j] = 0;
        } else if (j > ay2 + 1 && j < C) {
          copyBoard[i][j] = newBoard[i][j - 1];
        }
      } else if (i === R - 1) {
        if (j === C - 1) {
          copyBoard[i][j] = newBoard[i - 1][j];
        } else {
          copyBoard[i][j] = newBoard[i][j + 1];
        }
      } else if (i < R - 1 && i > ax2) {
        if (j === C - 1) {
          copyBoard[i][j] = newBoard[i - 1][j];
        } else if (j === 0) {
          copyBoard[i][j] = newBoard[i + 1][j];
        }
      }
    }
  }
  return copyBoard;
}

let count = 0;
let spread_arr = Spread(board);

while (count < T) {
  if (count > 0) {
    spread_arr = Spread(spread_arr);
  }
  let a = AirConditionar(spread_arr);
  spread_arr = a;

  count++;
}

let answer = spread_arr.flat().reduce((acc, cur) => acc + cur, 0) + 2;

console.log(answer);
