//dp[i] = dp[i-1] + dp[i-1] + '0...0' + dp[i-1] + dp[i-1] 이용
function solution(n, l, r) {
  // n번째 비트열에서 ~idx번째 수까지 1의 개수 구하는 함수
  const count = (n, idx) => {
    if (idx === 0) return 0;
    if (n === 0) return 1;

    // n번째 비트열을 5등분한다.
    const patternlength = 5 ** (n - 1); // 5등분된 한 집합의 길이
    const patternCount = 4 ** (n - 1); // 5등분된 한 집합에서의 1의 개수
    let quotient = Math.floor(idx / patternlength);
    let mod = idx % patternlength;

    // 3번째 집합은 모두 0인점 고려
    if (quotient === 2) mod = 0;
    if (quotient > 2) quotient--;

    return quotient * patternCount + count(n - 1, mod);
  };
  return count(n, r) - count(n, l - 1);
}

// 직접 n번째 비트열 구하는 방법 => 의문의 런타임 에러 발생
// function solution(n, l, r) {
//   const dp = Array(n + 1).fill('');
//   dp[0] = '1';
//   dp[1] = '11 11';
//   for (let i = 2; i <= n; i++) {
//     const length = Math.floor(dp[i - 1].length / 5);
//     const zeros = dp[i - 1].slice(length * 2, length * 3);
//     dp[i] += dp[i - 1];
//     dp[i] += dp[i - 1];
//     dp[i] += zeros.repeat(5);
//     dp[i] += dp[i - 1];
//     dp[i] += dp[i - 1];
//   }
//   let count = 0;
//   [...dp[n]].forEach((v, i) => i >= l - 1 && i < r && v === '1' && count++);
//   return count;
// }
