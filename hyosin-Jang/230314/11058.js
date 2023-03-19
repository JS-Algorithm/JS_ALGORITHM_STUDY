// 하나의 값을 입력받을 때 사용
let fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

// 숫자로 변환
let n = +input;

let dp = new Array(n).fill(0);

// (전체선택 + 복사 + 붙여넣기)를 한 후, 버퍼에 있는 값을 쭉 붙여넣기만 한 것이 (전체선택 + 복사 + 붙여넣기)를 한번 더 해준 것보다 항상 큼
for (let i = 1; i <= n; i++) {
  // A를 한번 입력하는 경우
  dp[i] = dp[i - 1] + 1;

  // (i-j)번째 앞에 있는 값을 (j-1)번 붙여넣기할 수 있음
  for (let j = 3; j < i; j++) {
    dp[i] = Math.max(dp[i], dp[i - j] * (j - 1));
  }
}

console.log(dp[n]);
