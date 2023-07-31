// 첫 번째 시도 : 메모리 초과로 틀림
const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

const N = +input[0];
let MinBoard = input.slice(1).map((el) => el.split(' ').map((el) => +el));
let MaxBoard = input.slice(1).map((el) => el.split(' ').map((el) => +el));
const [min, max] = [0, N - 1];

for (let i = 1; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (j === min) {
      // 현재 값 + 바로 위 or 대각선 오른쪽 위의 값
      MinBoard[i][j] += Math.min(MinBoard[i - 1][j], MinBoard[i - 1][j + 1]);
      MaxBoard[i][j] += Math.max(MaxBoard[i - 1][j], MaxBoard[i - 1][j + 1]);
    } else if (j === max) {
      // 현재 값 + 바로 위 or 대각선 왼쪽 위의 값
      MinBoard[i][j] += Math.min(MinBoard[i - 1][j], MinBoard[i - 1][j - 1]);
      MaxBoard[i][j] += Math.max(MaxBoard[i - 1][j], MaxBoard[i - 1][j - 1]);
    } else {
      // 현재 값 + 바로 위 or 대각선 오른쪽 위 or 대각선 왼쪽 위의 값
      MinBoard[i][j] += Math.min(MinBoard[i - 1][j - 1], MinBoard[i - 1][j], MinBoard[i - 1][j + 1]);
      MaxBoard[i][j] += Math.max(MaxBoard[i - 1][j - 1], MaxBoard[i - 1][j], MaxBoard[i - 1][j + 1]);
    }
  }
}

// 두 번째 시도 : 메모리 초과로 틀림
// const MaxAnswer = Math.max(...MaxBoard[N - 1]);
// const MinAnswer = Math.min(...MinBoard[N - 1]);

// console.log(MaxAnswer, MinAnswer);

// const input = require('fs').readFileSync('ex.txt').toString().trim().split('\n');

// const N = +input[0];
// let board = input.slice(1);
// const dp = board[0].split(' ').map(Number);
// let dpMax = [...dp];
// let dpMin = [...dp];
// let map = [...dp];
// let answer;

// function update(str) {
//   map = str.split(' ').map(Number);
//   const tempMax = [...dpMax];
//   const tempMin = [...dpMin];

//   dpMax[0] = map[0] + Math.max(tempMax[0], tempMax[1]);
//   dpMax[1] = map[1] + Math.max(tempMax[0], tempMax[1], tempMax[2]);
//   dpMax[2] = map[2] + Math.max(tempMax[1], tempMax[2]);

//   dpMin[0] = map[0] + Math.min(tempMin[0], tempMin[1]);
//   dpMin[1] = map[1] + Math.min(tempMin[0], tempMin[1], tempMin[2]);
//   dpMin[2] = map[2] + Math.min(tempMin[1], tempMin[2]);

//   return [dpMax, dpMin];
// }

// for (let i = 1; i < N; i++) {
//   answer = update(board[i]);
// }

// const MaxAnswer = Math.max(...answer[0]);
// const MinAnswer = Math.min(...answer[1]);

// console.log(MaxAnswer, MinAnswer);
