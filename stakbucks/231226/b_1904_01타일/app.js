const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = +fs.readFileSync(filePath).toString().trim();

const DIVIDE_NUM = 15746;

function solution(input) {
  const dp = Array(input + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= input; i++) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % DIVIDE_NUM;
  }

  console.log(dp[input]);
}
solution(input);
