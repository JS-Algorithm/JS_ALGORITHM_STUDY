// 야근 시작 시점**남은 일의 작업량 더함 -> 수들의 편차를 적게 해야함.

function solution(n, works) {
  works.sort((a, b) => b - a); // 내림차순 정렬

  let sum = works.reduce((acc, cur) => acc + cur, 0); // 주어진 일을 해결할 수 있을 떄
  if (sum <= n) return 0;

  let max = works[0];
  while (n) {
    for (let i = 0; i < works.length; i++) {
      if (max === works[i]) {
        // 주어진 일 max와 같은 것들 다 --
        works[i]--;
        n--;
        if (n === 0) break;
      } else break;
    }
    max--;
  }

  return works.reduce((acc, cur) => (cur > 0 ? acc + cur ** 2 : acc), 0);
}
