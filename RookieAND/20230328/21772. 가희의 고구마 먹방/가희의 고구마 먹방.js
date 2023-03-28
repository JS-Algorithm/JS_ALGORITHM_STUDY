// 고구마를 먹으러 갔다가 다시 돌아오는 경우도 있기 때문에 백트래킹으로 구현
// 이동한 횟수, 2차원 배열, 현재 위치를 매개변수로 넣어 재귀함수를 구현한다.

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trimEnd()
  .split('\n');
const direction = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

const [R, C, T] = input[0].split(' ').map(Number);
const matrix = input.slice(1).map((row) => row.trimEnd().split(''));

let gahee;
let [answer, maxAmount] = [0, 0];

for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (matrix[i][j] === 'G') gahee = [i, j];
    if (matrix[i][j] === 'S') maxAmount += 1;
  }
}

const [gaheeY, gaheeX] = gahee;
dfs(gaheeY, gaheeX, 0, 0);
console.log(answer);

function dfs(y, x, movement, sweetPotatoAmount) {
  // 정해진 시간이 지났거나, 모든 고구마를 전부 먹었을 경우 더 이상의 탐색을 멈춰야 한다.
  if (movement === T || sweetPotatoAmount === maxAmount) {
    answer = Math.max(answer, sweetPotatoAmount);
    return;
  }

  for (const [dy, dx] of direction) {
    const [ny, nx] = [y + dy, x + dx];
    if (ny >= 0 && nx >= 0 && ny < R && nx < C && matrix[ny][nx] !== '#') {
      // 고구마를 먹은 경우 일단 먹었다고 처리하고, 이후 다시 되돌려야 한다.
      if (matrix[ny][nx] === 'S') {
        matrix[ny][nx] = '.';
        dfs(ny, nx, movement + 1, sweetPotatoAmount + 1);
        matrix[ny][nx] = 'S';
      } else {
        dfs(ny, nx, movement + 1, sweetPotatoAmount);
      }
    }
  }
}
