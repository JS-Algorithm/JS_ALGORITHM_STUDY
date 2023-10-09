const fs = require("fs");

const input = fs.readFileSync('/dev/stdin').toString().trimEnd().split("\n");
const [N, ...rest] = input;

const lineList = rest.map((row) => row.split(" ").map(Number));
lineList.sort(([first], [second]) => first - second);

const leftLineList = lineList.map(([_, b]) => b);

const connectionAmount = leftLineList.length;
const dp = Array(connectionAmount).fill(1);

for (let i = 0; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (leftLineList[i] > leftLineList[j] && dp[i] < dp[j] + 1) dp[i] = dp[j] + 1;
  }
}

console.log(connectionAmount - Math.max(...dp));
