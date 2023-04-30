// const readFileSyncAddress = "/dev/stdin";
const readFileSyncAddress = "text.txt";

const input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trimEnd()
  .split("\n");

const answer = [];
const SIZE = 30;
// 높이 31, 너비 32의 DP 테이블 생성
const dp = Array.from({ length: SIZE + 1 }, () => new Array(SIZE + 2).fill(1n));

// DP 규칙
// 세로(크기 1의 알약), 가로(크기 1/2의 알약)를 기준으로
// 현재 위치의 바로 왼쪽 dp값과 오른쪽 대각선 dp값의 합이 현재 위치의 dp
for (let i = 1; i <= SIZE; i++) {
  for (let j = 0; j <= SIZE; j++) {
    // 예외, 크기 1/2의 알약이 0개인 경우
    // 오른쪽 대각선 dp값을 그대로 사용
    if (j === 0) {
      dp[i][j] = dp[i - 1][1];
    } else {
      dp[i][j] = dp[i][j - 1] + dp[i - 1][j + 1];
    }
  }
}

input.forEach((el) => {
  const num = Number(el);

  if (num !== 0) answer.push(dp[num][0]);
});

console.table(answer.join("\n"));
