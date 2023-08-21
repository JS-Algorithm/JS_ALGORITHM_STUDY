const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let testCase = input.slice(1);

for (let i = 0; i < testCase.length - 2; i += 3) {
  let N = +testCase[i]; // 동전의 가지 수
  let types = testCase[i + 1].split(' ').map(Number); // 동전의 각 금액
  let M = +testCase[i + 2]; // 만들어야 할 금액

  let dp = Array.from({length: M + 1}, () => 0);
  dp[0] = 1;

  for (let j = 0; j < N; j++) {
    for (let k = types[j]; k <= M; k++) {
      dp[k] += dp[k - types[j]];
    }
  }

  console.log(dp[M]);
}
