// 1. 일반적인 BFS로 풀기에는 범위가 너무 크다 (1 ≤ n ≤ 500)
// 2. 하지만 모든 대나무 숲을 일일히 탐색하면서 최댓값을 도출해야 한다. => 깡 BFS 로 풀었다가 시간 초과 맞았다.
// 3. [풀이 참고] 기존의 탐색 과정에서 도출된 결과를 메모이제이션 하여 탐색하는 건?

// 정답 풀이 : DFS + 메모이제이션 (DP), 산출된 최댓값을 저장하여 활용하는 방식으로 개선
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const bambooForest = input.slice(1).map((row) => row.split(" ").map(Number));
const direction = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

// 각 좌표 별로 판다가 이동한 최대 거리를 저장하는 배열 maximumMovement (기본 값 : 1)
const maximumMovements = Array.from({ length: N }, () => new Array(N).fill(1));

let answer = 0;
// 모든 대나무 숲을 탐색하면서 최댓값을 찾기는 찾아야 한다.
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    answer = Math.max(answer, findMaximumBamboo(i, j));
  }
}

console.log(answer);

function findMaximumBamboo(y, x) {
  // 메모이제이션 배열에 값이 존재할 경우 이를 반환
  if (maximumMovements[y][x] > 1) return maximumMovements[y][x];

  // 그렇지 않을 경우 현재 좌표를 기준으로 탐색 시작.
  for (const [dy, dx] of direction) {
    let [ny, nx] = [y + dy, x + dx];
    if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
    // 더 많은 대나무가 심어진 곳을 찾았다면 계속 재귀를 진행한다
    if (bambooForest[ny][nx] > bambooForest[y][x]) {
      // 재귀를 통해 현재 좌표를 기준으로 최대 이동 거리를 산출해서 업데이트 한다.
      maximumMovements[y][x] = Math.max(
        maximumMovements[y][x],
        findMaximumBamboo(ny, nx) + 1 // 1을 더하는 이유는 현재 위치도 포함해야 하니까
      );
    }
  }
  return maximumMovements[y][x];
}
