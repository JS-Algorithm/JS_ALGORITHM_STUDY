const fs = require("fs");

// 현재 학생들이 서 있는 줄 내에서, 오름 차순으로 선 학생 (부분 수열) 중 가장 긴 길이를 구해야 한다.
// [3, 7, 5, 2, 6, 1, 4] 중에서 LIS 는 [3, 5, 6] 이다. 그러므로 7 - 3 = 4명의 학생만 옮기면 된다.

const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [N, ...numList] = input;

// dp[i] = 0부터 i번째 인덱스까지의 원소 중 만들 수 있는 가장 긴 부분수열의 길이
const dp = Array(N).fill(1);

for (let i = 0; i < N; i++) {
    // 0 부터 i 까지의 원소를 순회하면서 비교해보자.
    for (let j = 0; j < i; j ++) {
        // i번째 인덱스에 위치한 숫자가 더 크면서 dp[j] + 1이 dp[i] 보다 더 큰 경우 업데이트.
        // j번째 인덱스까지의 원소 중 만들 수 있는 가장 긴 부분 수열에 i번째 인덱스의 숫자를 더하면 됨.
        if (numList[i] > numList[j] && dp[i] < dp[j] + 1) {
            dp[i] = dp[j] + 1;
        }
    }
}

const LIS = Math.max(...dp);
console.log(N - LIS);