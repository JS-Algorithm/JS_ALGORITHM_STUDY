/** 규칙 찾기
dp(0) : 1
dp(1) : 11011
  -> 총 길이 5**1 : 5
dp(2) : 11011 / 11011 / 00000 / 11011 / 11011 -> dp(1) + dp(1) + 00000 + dp(1) + dp(1)
  -> 총 길이 5**2 : 25
dp(3) : dp(2) + dp(2) + [00000]*5 + dp(2) + dp(2)
  -> 총 길이 5**3 : 125
*/

// 링크 : https://velog.io/@sean2337/Programmers-%EC%9C%A0%EC%82%AC-%EC%B9%B8%ED%86%A0%EC%96%B4-%EB%B9%84%ED%8A%B8%EC%97%B4-JavaScript
// 정답 : 각 자릿수에 대해 1인지 아닌지 체크
function check(num) {
  // 더 이상 나눌 수 없고 2번째 자리 아닐 때 answer++;
  if (num < 5 && num != 2) return true;
  // 5개 중에 2번째 값은 0 => false리턴
  if (num % 5 === 2) return false;

  // 5를 넘고, 2번째 값이 아니라면 5를 나눠서 진행
  return check(Math.floor(num / 5));
}

function solution(n, l, r) {
  let answer = 0;
  for (let i = l - 1; i < r; i++) {
    if (check(i)) answer++;
  }
  return answer;
}

// 두번째 풀이 : dp 활용 -> RangeError: Invalid string length
function solution(n, l, r) {
  return dp(n)
    .split('')
    .slice(l - 1, r)
    .filter((item) => item === '1').length;
}

function dp(idx) {
  if (idx === 0) return '1';
  else if (idx === 1) return '11011';
  else {
    let temp = dp(idx - 1);
    return temp + temp + '00000'.repeat(5 ** (idx - 2)) + temp + temp;
  }
}

// 첫 풀이 : 단순 구현
function solution(n, l, r) {
  let last = '1';

  for (let i = 1; i <= n; i++) {
    let cur = '';
    last.split('').forEach((ch) => {
      if (ch === '1') cur += '11011';
      else if (ch === '0') cur += '00000';
    });
    last = cur;
  }

  return last
    .split('')
    .slice(l - 1, r)
    .filter((l) => l === '1').length;
}
