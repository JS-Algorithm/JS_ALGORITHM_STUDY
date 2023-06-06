function solution(n, a, b) {
  // a, b를 2^x로 나눈 몫이 같은 x를 찾기
  let ans = 1;
  while (2 ** ans <= n) {
    // 라운드 1~n -> 0~n-1라고 가정
    if (Math.floor((a - 1) / 2 ** ans) == Math.floor((b - 1) / 2 ** ans)) break;
    ans++;
  }
  return ans;
}
