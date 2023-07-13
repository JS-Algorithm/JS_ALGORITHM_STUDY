function solution(n, l, r) {
  let result = 0;
  let memo = new Array(r - l + 1).fill().map((_, idx) => idx + l);

  if (n === 1) {
    return memo.filter((el) => el !== 3).length;
  }

  while (memo.length) {
    const newMemo = [];

    for (const el of memo) {
      if (el === 1) result += 1;
      else {
        if (!!((el + 2) % 5)) {
          const fixedEl = Math.ceil(el / 5);
          newMemo.push(fixedEl);
        }
      }
    }

    memo = newMemo;
  }

  return result;
}

// 신박한 풀이
function solution(n, l, r) {
  let answer = 0;
  for (let i = l - 1; i <= r - 1; i++) {
    if (!i.toString(5).match('2')) answer += 1;
  }
  return answer;
}
