const fs = require("fs");

const input = fs.readFileSync('/dev/stdin').toString().trimEnd().split("\n");
const [N, ...rest] = input;

const lineList = rest.map((row) => row.split(" ").map(Number));
lineList.sort(([first], [second]) => first - second);

// A와 B 사이를 연결하는 전깃줄을 "A" 연결점을 기준으로 정렬한다.
const leftLineList = lineList.map(([_, b]) => b);

const connectionAmount = leftLineList.length;
const dp = Array(connectionAmount).fill(1);

// 이후 B의 연결점들을 대상으로, 가장 긴 부분수열을 구한다.
for (let i = 0; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (leftLineList[i] > leftLineList[j] && dp[i] < dp[j] + 1) dp[i] = dp[j] + 1;
  }
}

console.log(connectionAmount - Math.max(...dp));
