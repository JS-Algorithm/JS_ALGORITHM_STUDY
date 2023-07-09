function solution(n, t, m, p) {
  let answer = '';
  let turn = 0;

  for (let i = 0; ; i++) {
    let arr = i.toString(n).split('');

    for (let j = 0; j < arr.length; j++) {
      if (turn === p - 1) {
        // 튜브의 순서가 왔다면 answer 갱신
        answer += arr[j].toUpperCase();
        if (answer.length === t) break;
      }
      // 다음 사람 턴으로 넘김.
      turn++;
      if (turn === m) turn = 0;
    }
    if (answer.length === t) break;
  }

  return answer;
}
