// const readFileSyncAddress = "/dev/stdin";
const readFileSyncAddress = "text.txt";

const input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trimEnd()
  .split("\n");

const [H, W] = input[0].split(" ").map(Number);
const map = input.slice(1, 1 + H).map((el) => el.split(" ").map(Number));
const dp = Array.from({ length: H + 1 }, () => new Array(W + 1).fill(1));
let answer = 0;

// dp 초기화 과정
// 돌이나 나무일 경우 dp값을 0으로 셋팅
// 추가적으로 H+1, W+1 위치를 셋팅 (예외처리 없이 하기 위해)
for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    if (map[y][x] !== 0) dp[y][x] = 0;
  }
}

for (let y = 0; y <= H; y++) dp[y][W] = 0;
for (let x = 0; x <= W; x++) dp[H][x] = 0;

// 모든 위치 탐색
for (let y = H - 1; y >= 0; y--) {
  for (let x = W - 1; x >= 0; x--) {
    // 들판일 경우
    if (map[y][x] === 0) {
      // 오른쪽, 오른쪽 아래 대각선, 아래쪽 확인하며
      // 최솟값 + 1을 해당 위치의 dp값 셋팅
      // (ex. Math.min([우, 우하, 하]), ...[2, 2, 2], [1, 2, 2])
      dp[y][x] = Math.min(dp[y][x + 1], dp[y + 1][x + 1], dp[y + 1][x]) + 1;

      answer = Math.max(answer, dp[y][x]);
    }
  }
}

console.log(answer);
