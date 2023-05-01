function solution(n, s) {
  const quote = Math.floor(s / n);

  // 0인 경우 -1을 반환한다.
  if (!quote) return [-1];

  // 나머지는 다시 몫에 배분할 수 있다.
  const remainder = s % n;
  const answer = new Array(n).fill(quote);

  // 남은 나머지만큼 반복을 돌면서 1을 더해준다.
  for (let i = 0; i < remainder; i++) {
    answer[i]++;
  }

  return answer.sort();
}

n = 2;
s = 9;

solution(n, s);
