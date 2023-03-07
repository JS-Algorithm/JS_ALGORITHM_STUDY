const readFileSyncAddress = "/dev/stdin";

const input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trimEnd()
  .split("\n");

const INF = Infinity;
const N = Number(input[0]);
const [m1, m2] = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const M = Number(input[2]);
const orders = input.slice(3, 3 + M).map(Number);
let answer = INF;

// 3차원 DP 생성 => [y][x][z] => [왼쪽문][오른쪽문][현재 count]
const dp = Array.from({ length: N + 1 }, () =>
  Array.from({ length: N + 1 }, () => new Array(M + 1).fill(INF))
);

// 처음 시작 상태 저장
dp[m1][m2][0] = 0;

orders.forEach((next, idx) => {
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      // 현재 값이 있는 경우 (문이 열려있는 상태)
      // 다음 순서의 벽장문을 여는 곳을 탐색
      if (dp[i][j][idx] !== INF) {
        const curr = dp[i][j][idx];

        // 1. 다음값이 왼쪽 문(작은 값)보다 더 작은 경우
        if (next < i) {
          const diff = i - next;
          dp[next][j][idx + 1] = Math.min(dp[next][j][idx + 1], curr + diff);
        }

        // 2. ... 오른쪽 문(큰 값)보다 더 큰 경우
        else if (j < next) {
          const diff = next - j;
          dp[i][next][idx + 1] = Math.min(dp[i][next][idx + 1], curr + diff);
        }

        // 3. 그 외
        // 중간에 있거나 or 현재 문이 열린 곳과 다음이 같은 경우
        else {
          const upDiff = next - i;
          dp[next][j][idx + 1] = Math.min(dp[next][j][idx + 1], curr + upDiff);

          const downDiff = j - next;
          dp[i][next][idx + 1] = Math.min(
            dp[i][next][idx + 1],
            curr + downDiff
          );
        }
      }
    }
  }
});

// 마지막 순서일 때 값이 있는 것들 중 최소값이 정답
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    answer = Math.min(answer, dp[i][j][M]);
  }
}

console.log(answer);
