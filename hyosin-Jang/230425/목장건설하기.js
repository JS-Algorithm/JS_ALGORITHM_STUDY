const env = '/dev/stdin';
let fs = require('fs');
let input = fs.readFileSync(env).toString().trim().split('\n');

const [M, N] = input.shift().split(' ');
const graph = input.map((row) => row.split(' ').map(Number));

let dp = Array.from({length: M}, (_) => Array.from({length: N}, () => 0));

// 들판이면 1, 아니면 0으로 기본값 세팅
// dp[i][j] : (i,j)를 기준으로 대각선 위쪽 방향에서 찾은 가장 큰 정사각현 한 변의 크기
for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    dp[i][j] = graph[i][j] === 0 ? 1 : 0;
  }
}

if (M == 1 || N == 1) {
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (graph[i][j] === 0) {
        console.log(1);
        return;
      }
    }
  }
  console.log(0);
  return;
}

let maxSize = 0;

for (let i = 1; i < M; i++) {
  for (let j = 1; j < N; j++) {
    if (dp[i][j]) {
      // 세 방향 중 최솟값 + 1 저장
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      maxSize = Math.max(maxSize, dp[i][j]);
    }
  }
}

// console.log(dp);
console.log(maxSize);
return;
