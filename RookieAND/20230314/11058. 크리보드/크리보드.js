const input = require('fs').readFileSync('/dev/stdin').toString().trimEnd();
const N = +input;

// dp[i] : i번째 버튼을 눌렀을 때 가장 많이 출력되는 A의 갯수.
// dp 초기화, 처음에는 누를 수 있는 버튼의 횟수만큼 이를 추가.
const dp = [...Array(N + 1).keys()];

/**
 * 맨 처음에는 A를 화면에 출력시키는 것으로 시작한다.
 * 1. 화면 선택 - 복사 - 붙여넣기와 같은 순번 (3회 필요)
 * 2. 버튼을 누를 수 있는 횟수만큼 A를 눌러 추가하기.
 * => 3회 이전의 횟수에서 선택 => 붙여넣기를 했을 때의 케이스가 더 큰지 비교
 * => 특정 시점에서 버퍼에 든 값을 계속해서 복사 붙여넣기 했는지를 조사해야 함.
 */
for (let i = 4; i <= N; i++) {
  // 3회 이상 이전으로 되돌아가야 하므로 최소 3회 이상의 카운트가 필요하다.
  // i-j 번째의 내용을 복사하여 버퍼에 옮기고, 이를 j - 1 번만큼 붙였을 때의 값을 대조
  for (let j = 3; j < i; j++) {
    dp[i] = Math.max(dp[i], dp[i - j] * (j - 1));
  }
}

console.log(dp[N]);
