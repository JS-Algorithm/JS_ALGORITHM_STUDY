// 카탈란 수를 응용한 문제
// 카탈란 수: n쌍의 잘짜인 괄호의 수를 구할 때 사용되는 수열

// ex. n쌍의 괄호가 잘 짷여있는 방법의 수를 Cn이라고 하자
// Cn = n-1쌍의 괄호가 잘 짜여진 것에다 알맞게 ()를 넣는 방법을 세면 된다.
// (A)B와 같이 넣는다고 하면 A와 B도 잘 짜여있어야 한다. ( 항상 여는 괄호의 개수가 닫는 괄호의 개수보다 같거나 많아야 한다.)
// 만약, A에 괄호가 k쌍이 있다면 B에는 괄호가 n-1-k쌍이 존재함
// 따라서, 괄호들을 A와 B로 나누는 방법을 세어주면 된다.
// (2n)! / (n+1)! x (n-1)!

// 이 문제에 같은 로직을 적용하면 n = k일 때, 문자열을 W (A) H (B)로 나타낼 수 있다.
// A 문자열에 (W, H)가 i쌍이 들어간다면
// B 문자열에 (W, H) k-1-i쌍이 들어간다.

// 중요한 건 A문자열, B문자열 모두 W로 시작하고 H로 끝나기 때문에 위의 정의에서 겹치는 경우는 생기지 않는다.
// 따라서 점화식은 다음과 같다.
// dp[i] = dp[0] * dp[i-1]
//         + dp[1] * dp[i-2]
//         + ...
//         + dp[i-2] * dp[1]
//         + dp[i-1] * dp[0]

const env = '/dev/stdin';
const input = require('fs')
  .readFileSync(env)
  .toString()
  .split('\n')
  .map(Number);

const dp = Array(30 + 1).fill(0);
dp[0] = 1;
dp[1] = 1;
dp[2] = 2;
dp[3] = 5;
dp[4] = 14;

for (let i = 5; i <= 30; i++) {
  for (let j = 0; j < i; j++) {
    dp[i] += dp[j] * dp[i - j - 1];
  }
}

input.forEach((tc) => {
  if (tc !== 0) console.log(dp[tc]);
  else return;
});
