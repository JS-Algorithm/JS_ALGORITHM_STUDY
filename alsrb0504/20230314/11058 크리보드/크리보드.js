// https://www.acmicpc.net/problem/11058

// const readFileSyncAddress = "/dev/stdin";
const readFileSyncAddress = "text.txt";

const input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trimEnd()
  .split("\n");

const N = Number(input[0]);

// [ maxValue,  maxBufferIdx ]
const dp = Array.from({ length: 101 }, () => [0, 0]);

// 처음 초기 값 설정
for (let i = 1; i <= 6; i++) dp[i][0] = i;
dp[6][1] = 3;

for (let i = 7; i <= N; i++) {
  // 이전 최대 버퍼값이 있던 인덱스에서 ~ J - 2까지
  // 최대값 계산 => 최대값에 해당하는 값과 버퍼 인덱스 저장
  const prevIdx = dp[i - 1][1];

  for (let j = prevIdx; j <= i - 2; j++) {
    const result = dp[j][0] + dp[j][0] * (i - 2 - j);

    if (dp[i][0] <= result) {
      dp[i][0] = result;
      dp[i][1] = j;
    }
  }
}

console.log(dp[N][0]);
