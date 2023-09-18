const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const DIVIDE_NUM = 10007;

function solution(input) {
  input = input.map((v) => v.split(' ').map(Number));
  const [N, M, H] = input.shift();
  const blocks = [...input];

  const dp = Array.from({length: N}, () => Array.from({length: H + 1}, (_, i) => (i === 0 ? 1 : 0)));
  for (let i = 0; i < blocks[0].length; i++) {
    dp[0][blocks[0][i]]++;
  }
  for (let i = 1; i < blocks.length; i++) {
    for (let j = 1; j <= H; j++) {
      for (const number of blocks[i]) {
        if (number <= j) {
          dp[i][j] += dp[i - 1][j - number];
          // 값이 증가할 때마다 10007 로 반드시 나줘줘야!
          dp[i][j] %= DIVIDE_NUM;
        }
      }
      dp[i][j] += dp[i - 1][j]; // 블럭을 사용하지 않는 경우
      dp[i][j] %= DIVIDE_NUM;
    }
  }
  console.log(dp[N - 1][H] % DIVIDE_NUM);
}
solution(input);
