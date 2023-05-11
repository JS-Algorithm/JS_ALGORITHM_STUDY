function solution(n) {
  var answer = [];
  const size = n;

  const arr = Array.from({length: n + 1}, () =>
    Array.from({length: n + 1}, () => 0),
  );

  // 시작좌표
  let x = 0,
    y = 0;
  let idx = 1;
  let cur = 0;

  while (1) {
    // 아래로 내리기
    for (let cur = 0; cur < n; cur++) {
      arr[x++][y] = idx++;
    }
    n--;
    if (n === 0) break;
    cur = 0;

    // 다음 칸으로 이동
    x--;
    y++;

    // 가로로 이동하기
    for (let cur = 0; cur < n; cur++) {
      arr[x][y++] = idx++;
    }
    n--;
    if (n === 0) break;

    y -= 2;
    x--;

    // 대각선으로 이동하기
    for (let cur = 0; cur < n; cur++) {
      arr[x--][y--] = idx++;
    }
    x += 2;
    y++;

    n--;
    if (n === 0) break;
  }

  for (let i = 0; i < size + 1; i++) {
    for (let j = 0; j < size + 1; j++) {
      if (arr[i][j] !== 0) {
        answer.push(arr[i][j]);
      }
    }
  }

  return answer;
}
