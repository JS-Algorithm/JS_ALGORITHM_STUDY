const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const numbers = input[1].split(' ').map(Number);
  const target = numbers.pop();

  const dp = Array.from({length: numbers.length}, () => Array(21).fill(BigInt(0)));
  dp[0][numbers[0]] = BigInt(1);

  for (let i = 1; i < numbers.length; i++) {
    const number = numbers[i];
    for (let j = 0; j <= 20; j++) {
      if (j - number >= 0) dp[i][j] += dp[i - 1][j - number];
      if (j + number <= 20) dp[i][j] += dp[i - 1][j + number];
    }
  }
  console.log(dp[numbers.length - 1][target].toString());
}

solution(input);

// 0 0 0
//

// 8 0 = 8
// [8]=1
// [8]=1
// [5]=1 [11]=1
// [3]=1 [7]=1 [9]=1 [13]=1
