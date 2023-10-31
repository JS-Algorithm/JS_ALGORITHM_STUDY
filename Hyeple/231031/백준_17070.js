const fs = require("fs");

const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
const N = parseInt(input[0]);

const map = [];
for (let i = 0; i < N; i++) {
    map.push(input[i + 1].split(" ").map(Number));
}

const dp = new Array(N).fill(0).map(() => new Array(N).fill(0).map(() => new Array(3).fill(0)));

dp[0][1][0] = 1;

for (let i = 0; i < N; i++) {
    for (let j = 2; j < N; j++) {
        if (map[i][j] === 0) {
            dp[i][j][0] = dp[i][j - 1][0] + dp[i][j - 1][2];

            if (i - 1 >= 0) {
                dp[i][j][1] = dp[i - 1][j][1] + dp[i - 1][j][2];

                if (map[i - 1][j] === 0 && map[i][j - 1] === 0) {
                    dp[i][j][2] = dp[i - 1][j - 1][0] + dp[i - 1][j - 1][1] + dp[i - 1][j - 1][2];
                }
            }
        }
    }
}

const result = dp[N - 1][N - 1][0] + dp[N - 1][N - 1][1] + dp[N - 1][N - 1][2];

console.log(result);
