const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const T = Number(input[0]);
  const arr = [];
  for (let i = 1; i < input.length; i += 3) {
    const temp = [];
    temp.push(Number(input[i]));
    temp.push(input[i + 1].split(' ').map(Number));
    temp.push(Number(input[i + 2]));
    arr.push(temp);
  }

  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    const [_, coins, target] = arr[i];
    const dp = Array(target + 1).fill(0);
    dp[0] = 1;

    for (let j = 0; j < coins.length; j++) {
      for (let k = coins[j]; k <= target; k++) {
        dp[k] += dp[k - coins[j]];
      }
    }
    answer.push(dp[target]);
  }

  console.log(answer.join('\n'));
}
solution(input);

// 시간 초과 풀이
// function solution(input) {
//   const T = Number(input[0]);
//   const arr = [];
//   for (let i = 1; i < input.length; i += 3) {
//     const temp = [];
//     temp.push(Number(input[i]));
//     temp.push(input[i + 1].split(' ').map(Number));
//     temp.push(Number(input[i + 2]));
//     arr.push(temp);
//   }

//   const answer = [];

//   function go(target, coins) {
//     if (coins.length === 1) {
//       if (target % coins[0]) {
//         // 나누어 떨어지지 않는 경우
//         return 0;
//       }
//       return 1;
//     }

//     // 동전들 중 가장 금액이 큰 동전
//     const maxCoin = coins.at(-1);
//     let count = 0;
//     for (let i = 0; i <= Math.floor(target / maxCoin); i++) {
//       count += go(target - i * maxCoin, [...coins].slice(0, -1));
//     }
//     return count;
//   }
//   arr.forEach((v) => answer.push(go(v[2], v[1])));
//   console.log(answer.join('\n'));
// }
solution(input);
