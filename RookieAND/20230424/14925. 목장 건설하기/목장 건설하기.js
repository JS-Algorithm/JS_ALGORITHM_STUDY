// 1. 범위가 1000 까지이므로 완전 탐색은 불가능하다고 봐야 한다.
// 2. 특정 위치를 기준으로 범주를 1씩 늘려나가면서 새롭게 넓혀진 영역을 탐색.

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trimEnd()
  .split("\n");

const [M, N] = input[0].split(" ").map(Number);
const matrix = input.slice(1).map((row) => row.split(" ").map(Number));

let answer = 0;
for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (!matrix[i][j]) {
      // 1×1 을 시작으로 우변과 하변을 체크하는 로직을 반복시킨다.
      let currentLength = 1;
      while (isValidArea(i, j, currentLength)) {
        answer = Math.max(answer, currentLength);
        currentLength += 1;
      }
    }
  }
}

console.log(answer);

// 현재 좌표를 기준으로, length 만큼 떨어진 곳의 하변, 우변을 모두 체크하는 함수
// 굳이 모든 영역을 탐색하지 않고, "새롭게 탐색해야 할" 영역만 탐색하는 로직이다.
// 영역 밖을 벗어났거나, 돌이나 나무가 존재할 경우 false를 반환해야 한다.
function isValidArea(y, x, length) {
  // 현재 탐색하려는 영역이 유효범위 외를 벗어났는지 체크한다.
  if (y + length - 1 >= M || x + length - 1 >= N) return false;

  // 하변을 먼저 체크한다.
  for (let i = 0; i < length; i++) {
    if (matrix[y + length - 1][x + i]) return false;
  }

  // 우변을 이후에 체크한다. (맨 아래는 이미 체크했기에 패스)
  for (let j = 0; j < length - 1; j++) {
    if (matrix[y + j][x + length - 1]) return false;
  }
  return true;
}
