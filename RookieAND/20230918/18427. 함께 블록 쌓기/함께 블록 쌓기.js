const fs = require('fs');
const inputPath = process.platform === 'linux' ? '/dev/stdin' : '20230918/input.txt';
let input = fs
  .readFileSync(inputPath)
  .toString()
  .trim()
  .split('\n')
  .map((row) => row.split(' ').map(Number));

const [[N, M, H]] = input;
const blockList = input.slice(1);

// 0, 1, 2, .. , N 번까지의 학생들이 가진 블록을 기준으로 합이 5인 케이스를 추적.
// 학생이 할 수 있는 행동 : 블럭을 아예 두지 않거나 가진 블럭 중 하나만 올린다.

// dp[i][j] : i번째 학생이 j 높이을 쌓을 수 있는 경우의 수 (j < weight);

// blockList[i - 1] = [1, 2, 3] 이라고 가정해보자.
// 점화식 : dp[i][height] = dp[i - 1][weight - 1] + dp[i - 2][weight - 2] + dp[i - 3][weight - 3];

// dp[i][0] = 1 인 이유는, 0인 경우는 늘 하나만 존재하기 때문이다 (모든 학생이 아직 블럭을 안 쓴 경우)
const dp = Array.from({length: N}, () => Array.from({length: H + 1}, (_, index) => Number(index === 0)));

// 1번째 학생이 할 수 있는 경우의 수를 적용.
blockList[0].map((height) => (dp[0][height] += 1));

for (let i = 1; i < N; i++) {
  for (let j = 1; j <= H; j++) {
    blockList[i].map((height) => {
      if (j >= height) dp[i][j] = (dp[i][j] + dp[i - 1][j - height]) % 10007;
    });
    // 블럭 미사용의 경우에도 그대로 값을 계승해야 한다.
    dp[i][j] = (dp[i][j] + dp[i - 1][j]) % 10007;
  }
}

console.log(dp[N - 1][H] % 10007);
