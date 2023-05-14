/**
 * 점화식 : dp[i] = min(dp[i - n], dp[i / 2], dp[i / 3]) + 1
 * 단, i / 2가 x 보다 크면서 정수여야 하고, i / 3 이 x 보다 크면서 정수여야 한다. i - n도 x 보다 커야 한다.
 * 이후 조건에 맞는 값들을 추출하고, 가장 작은 값에 1을 더한 결과를 dp에 메모이제이션 한다.
 */
function solution(x, y, n) {
  const dp = Array.from({length: y + 1}).fill(-1);
  dp[x] = 0;
  for (let i = x; i <= y; i++) {
    let validCase = [];
    if (i % 2 === 0 && i / 2 >= x) validCase.push(dp[i / 2]);
    if (i % 3 === 0 && i / 3 >= x) validCase.push(dp[i / 3]);
    if (i - n >= x) validCase.push(dp[i - n]);
    validCase = validCase.filter((value) => value !== -1);
      
    if (!validCase.length) continue;
    dp[i] = Math.min(...validCase) + 1;
  }
  return dp[y];
}