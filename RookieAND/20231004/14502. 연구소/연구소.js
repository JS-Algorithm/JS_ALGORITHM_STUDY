const fs = require("fs");

const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map(Number));

let answer = 0;
const [[N, M], ...matrix] = input;
const direction = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const virusLocs = [];
const emptySpaces = [];

// 먼저 연구소 맵을 순회하면서 바이러스 영역과 빈 공간을 구한다.
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (matrix[i][j] === 2) {
      virusLocs.push([i, j]);
    }
    if (matrix[i][j] === 0) {
      emptySpaces.push([i, j]);
    }
  }
}

// 안전지대 영역의 크기를 구하는 함수 getSafetyZone
const getSafetyZone = () => {
  let newMatrix = matrix.map((row) => [...row]);
  const queue = [...virusLocs];

  while (queue.length) {
    const [ny, nx] = queue.shift();

    for (const [dy, dx] of direction) {
      const [my, mx] = [ny + dy, nx + dx];
      if (my >= 0 && my < N && mx >= 0 && mx < M && newMatrix[my][mx] === 0) {
        newMatrix[my][mx] = 2;
        queue.push([my, mx]);
      }
    }
  }

  let zoneSize = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (newMatrix[i][j] === 0) {
        zoneSize += 1;
      }
    }
  }

  return zoneSize;
};

const dfs = (count) => {
  if (count === 3) {
    const zoneSize = getSafetyZone();
    answer = Math.max(answer, zoneSize);
    return;
  }

  // 백트래킹으로 빈 곳 중 무작위하게 3곳을 벽으로 변경
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][j] = 1;
        dfs(count + 1);
        matrix[i][j] = 0;
      }
    }
  }
};

dfs(0);
console.log(answer);