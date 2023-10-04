const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

/**
 * 가장 긴 증가하는 부분 수열의 길이 구하기!
 */

function solution(input) {
  const N = input.shift();
  const dp = Array(N).fill([]);
  dp[0] = [input[0]];
  for (let i = 1; i < N; i++) {
    // input[i]가 포함된, 가장 긴 증가하는 부분수열 구하기
    const targetNum = input[i];
    dp[i] = [targetNum];

    for (let j = 0; j < i; j++) {
      // 앞에 구한 dp 배열들의 가장 마지막 원소(가장 큰 원소)와 값을 비교하여
      // 해당 값 보다, 비교하는 값이 더 크다면 증가하는 부분수열 생성 가능
      // 이렇게 생성된 부분수열 중 길이가 가장 긴 부분수열을 dp에 기록

      const temp = [...dp[j]];
      const top = temp.at(-1);

      if (top < targetNum && dp[i].length <= temp.length + 1) {
        dp[i] = [...temp, targetNum];
      }
    }
  }
  let max = 1;
  // 길이가 가장 긴 부분수열의 길이 구하기
  for (let i = 1; i < dp.length; i++) {
    max = Math.max(dp[i].length, max);
  }
  console.log(N - max);
}
solution(input);

// 3 7 5 2 6 1 4
// 3
// 3 7
// 3 5
// 2
// 3 6, 3 5 6, 2,6
// 1
// 3 4, 2 4, 1 4
