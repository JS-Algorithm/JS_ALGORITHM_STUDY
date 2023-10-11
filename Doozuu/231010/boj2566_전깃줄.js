const input = require('fs').readFileSync('ex.txt').toString().trim().split('\n');

const n = +input.slice(0, 1);

const arr = input
  .slice(1)
  .map((el) => el.split(' ').map(Number))
  .sort((a, b) => a[0] - b[0]);

function solution(n, arr) {
  let dp = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    const current = arr[i][1];
    let count = 0;
    for (let j = 0; j < i; j++) {
      const before = arr[j][1];
      if (current > before) count = Math.max(count, dp[j]);
      // 가장 긴 오름차순 수열을 만들기 위해 count를 최대한 큰 값으로 갱신
    }
    dp[i] = count + 1; // 현재 값도 길이에 포함해야 하므로 + 1
  }

  console.log(n - Math.max(...dp));
  // 전체 길이 - 가장 긴 오름차순 수열 길이 = 제거해야 하는 전깃줄 개수
}

solution(n, arr);
