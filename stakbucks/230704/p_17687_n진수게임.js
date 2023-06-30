function solution(n, t, m, p) {
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'].slice(0, n);
  const dp = Array(t * m + p + 1).fill('');

  for (let i = 0; i < t * m + p; i++) {
    if (i >= digits.length) {
      const quotient = Math.floor(i / digits.length);
      const mod = i % digits.length;
      dp[i] = dp[quotient] + dp[mod];
    } else dp[i] = digits[i];
  }

  let answer = '';
  let i = 0;
  while (answer.length < t) {
    if ((i % m) + 1 === p) {
      answer += dp.join('')[i];
    }
    i++;
  }
  return answer;
}
