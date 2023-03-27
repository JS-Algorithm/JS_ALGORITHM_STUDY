// https://www.acmicpc.net/problem/13325

const readFileSyncAddress = "/dev/stdin";
const input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trimEnd()
  .split("\n");

const N = +input[0];
const lines = input[1].split(" ").map(Number);
// tree : 입력된 간선 정보를 저장할 배열
const tree = Array.from({ length: 2 ** N }, () => [0, 0]);
// dp : 최소 간선 비용을 저장할 배열
const dp = Array.from({ length: 2 ** N }, () => [0, 0]);
let answer = 0;

// 1번 ~ (2 ** N) - 1번 노드까지 간선 정보 저장
lines.forEach((cost, idx) => {
  const position = Math.floor(idx / 2) + 1;

  if (idx % 2 === 0) {
    tree[position][0] = cost;
  } else {
    tree[position][1] = cost;
  }
});

// dp 초기 조건 : 리프 노드와 연결되는 간선 정보 저장
// 두 간선 중 항상 큰 값으로 설정
for (let i = 2 ** (N - 1); i < 2 ** N; i++) {
  dp[i][0] = tree[i][0];
  dp[i][1] = tree[i][1];
}

// 가장 높은 레벨의 정점부터 시작해서
// 최상단 노드까지 간선들의 누적 비용을 dp 배열에 저장
for (let i = N; i >= 1; i--) {
  for (let j = 2 ** (i - 1); j < 2 ** i; j++) {
    const max = Math.max(dp[j][0], dp[j][1]);
    dp[j][0] = max;
    dp[j][1] = max;

    const parent = Math.floor(j / 2);

    if (j % 2 === 0) {
      dp[parent][0] = max + tree[parent][0];
    } else {
      dp[parent][1] = max + tree[parent][1];
    }
  }
}

// 각 간선의 최종 비용 = dp[i] - dp[i *2] (즉, 부모까지의 누적 비용 - 자신까지의 누적 비용)
// 단, 1번부터 N - 1번 레벨까지만 계산.
for (let i = 0; i < N - 1; i++) {
  for (let j = 2 ** i; j < 2 ** (i + 1); j++) {
    answer += dp[j][0] - dp[j * 2][0];
    answer += dp[j][1] - dp[j * 2 + 1][0];
  }
}

// 마지막 N레벨, 리프를 연결하는 간선 비용 추가
for (let i = 2 ** (N - 1); i < 2 ** N; i++) {
  answer += dp[i][0] + dp[i][1];
}

console.log(answer);
