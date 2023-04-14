// const readFileSyncAddress = "/dev/stdin";
const readFileSyncAddress = "text.txt";

const input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trimEnd()
  .split("\n");

const dy = [0, 0, -1, 1];
const dx = [-1, 1, 0, 0];

const N = Number(input[0]);
const map = input.slice(1, 1 + N).map((el) => el.split(" ").map(Number));
// DP 맵을 0으로 초기화
const dp = Array.from({ length: N }, () => new Array(N).fill(0));
let answer = 0;

// DFS를 하면서 DP 배열의 값을 채움.
// 만약 DP 배열의 값이 0이면 DFS 진행
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (dp[i][j] === 0) dfs(i, j, 1);
  }
}

// 결과값이 저장된 DP 배열 중 가장 큰 값을 찾음
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    answer = Math.max(answer, dp[i][j]);
  }
}

console.log(answer);

/** 현재 비용에서 갈 수 있는 경로를 찾는 DFS */
// 현재 위치에서 4방향을 탐색하며 탐색한 위치에 대해서는 DP에 값을 저장
// DP에 값이 저장되어 있다면 해당 값을 재활용
function dfs(y, x, cnt) {
  let max = 0;

  for (let i = 0; i < 4; i++) {
    const [ny, nx] = [y + dy[i], x + dx[i]];

    // 범위 조건 & 다음 탐색 위치의 크기가 작다면 탐색 X
    if (ny < 0 || nx < 0 || ny >= N || nx >= N || map[ny][nx] <= map[y][x])
      continue;

    // 이미 탐색한 위치라면, 해당값 + 1로 재활용
    if (dp[y][x] !== 0) {
      max = Math.max(max, dp[ny][nx] + 1);
      continue;
    }

    // 탐색하지 않은 위치라면, DFS 탐색 진행
    max = Math.max(max, dfs(ny, nx, cnt + 1) + 1);
  }

  // 만약, 해당 위치에서 탐색할 수 없다면 DP에 1 할당 및 리턴
  // 해당 위치에서 탐색할 수 있다면, DP에 최대값 할당 및 리턴
  if (max === 0) return (dp[y][x] = 1);
  else return (dp[y][x] = max);
}
