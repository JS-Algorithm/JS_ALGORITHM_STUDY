// 1. 빙하를 BFS 방식으로 녹이되, 각 위치마다 1년 전 빙하가 존재했는지를 체크해야 함.
// 2. 빙하를 한 차례 녹이고 나면, 현재 빙하가 한 덩어리로 이루어졌는지를 체크해야 함.
// 3. 현재 빙하가 한 덩어리 째로 모두 녹아 없어졌는지에 대한 처리도 진행해주어야 함.

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trimEnd()
  .split('\n');

function IsIceburgExist() {
  for (const row of matrix) {
    const iceburgAmount = row.reduce((acc, cur) => acc + cur, 0);
    if (iceburgAmount > 0) return true;
  }
  return false;
}

function getMeltAmount(y, x, visited) {
  let emptyAmount = 0;
  // 방문하지 않은 상태 (빙하가 있다가 녹은 자리) 면서 바다라면, 접한 면적 증가
  for (const [dy, dx] of direction) {
    const [my, mx] = [y + dy, x + dx];
    if (!visited[my][mx] && !matrix[my][mx]) {
      emptyAmount += 1;
    }
  }
  return emptyAmount;
}

function meltIceburg(y, x, visited) {
  // 첫 탐지점인 (y, x) 좌표에 대한 처리 선 진행
  const queue = [[y, x]];
  const leftAmount = matrix[y][x] - getMeltAmount(y, x, visited);
  matrix[y][x] = leftAmount > 0 ? leftAmount : 0;
  visited[y][x] = true;

  while (queue.length > 0) {
    const [ny, nx] = queue.shift();
    for (const [dy, dx] of direction) {
      const [my, mx] = [ny + dy, nx + dx];
      // 배열의 첫 번째 행과 열, 마지막 행과 열에는 항상 0으로 채워진다. (탐색 범주 좁혀짐)
      if (my >= 1 && my < N - 1 && mx >= 1 && mx < M - 1) {
        if (matrix[my][mx] > 0 && !visited[my][mx]) {
          const leftAmount = matrix[my][mx] - getMeltAmount(my, mx, visited);
          matrix[my][mx] = leftAmount > 0 ? leftAmount : 0;
          visited[my][mx] = true;
          queue.push([my, mx]);
        }
      }
    }
  }
}

const [N, M] = input[0].split(' ').map(Number);
const matrix = input.slice(1).map((row) => row.split(' ').map(Number));
const direction = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

let [answer, isSeperated] = [0, false];
while (IsIceburgExist()) {
  const visited = Array.from(Array(N), () => new Array(M).fill(false));
  let iceburgAmount = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      // 아직 방문하지 않았으면서 빙하가 남은 지점이라면 탐색을 시작.
      if (matrix[i][j] > 0 && !visited[i][j]) {
        meltIceburg(i, j, visited);
        iceburgAmount++;
      }
    }
  }
  // 만약 빙산이 1개 이상으로 쪼개졌다면 반복을 종료.
  if (iceburgAmount > 1) {
    isSeperated = true;
    break;
  }
  // 그렇지 않다면 1년이 지나야 하므로 answer 에 1 추가
  answer += 1;
}

console.log(isSeperated ? answer : 0);
