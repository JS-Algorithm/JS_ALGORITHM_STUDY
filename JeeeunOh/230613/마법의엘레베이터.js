// 끝 자리가 5일 때를 기준으로 예외처리가 필요함
// 85 일 때 8*10 + 5*1 (13)보다 1*100 - 3*10 - 5*1 (9)가 더 빠름. : case
// 이 케이스 기준으로 (last == 5 && (st % 10) + 1 <= 5) 와 같은 공식이 나옴.

function solution(st) {
  let cnt = 0;

  while (st) {
    let last = st % 10; // 나머지
    st = Math.floor(st / 10); // 몫

    // 끝자리가 5보다 작을 때 or 위에서 말한 케이스에 해당되지 않을 때
    if (last < 5 || (last === 5 && (st % 10) + 1 <= 5)) {
      cnt += last;
    }
    // 끝자리가 5보다 크거나 or 위에서 말한 케이스에 해당될 때
    else if (last > 5 || (last === 5 && (st % 10) + 1 > 5)) {
      cnt += 10 - last;
      st++;
    }
  }
  return cnt;
}
