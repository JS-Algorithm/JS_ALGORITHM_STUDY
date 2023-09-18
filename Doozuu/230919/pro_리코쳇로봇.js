function solution(board) {
  var answer = 0;
  board = board.map((items) => items.split(''));

  const q = [];
  const n = board.length; // 가로 길이
  const m = board[0].length; // 세로 길이
  const dx = [-1, 1, 0, 0]; // 상하좌우 방향
  const dy = [0, 0, -1, 1];

  board.forEach((items, i) => {
    items.forEach((item, j) => {
      if (item === 'R') q.push([i, j]); // 시작 위치
    });
  });

  // 1) 시작 위치를 다시 방문하지 않게 'O' 표시
  board[q[0][0]][q[0][1]] = 'O';

  // 2) q의 길이 만큼 반복
  while (q.length) {
    // 3) 횟수(answer)를 카운트하기 위해 현재 q의 길이를 고정시킨다.
    const size = q.length;

    // 4) 고정시킨 길이만큼 반복한다.
    for (let i = 0; i < size; i++) {
      const [x, y] = q.shift();

      // 5) 상하좌우 한번씩 확인
      for (let j = 0; j < 4; j++) {
        // 6) 다음 이동 위치
        let nx = x + dx[j];
        let ny = y + dy[j];

        // 7) 게임판 범위와 벽(D)를 만나지 않을 경우만 미끄러진다.
        while (nx >= 0 && nx < n && ny >= 0 && ny < m && board[nx][ny] !== 'D') {
          nx += dx[j];
          ny += dy[j];
        }

        // 8) 현재 위치로 변경한다.
        nx -= dx[j];
        ny -= dy[j];

        // 9) 현재 위치가 도착(G) 지점이면 횟수(answer)를 1증가 후 반환한다.
        if (board[nx][ny] === 'G') return answer + 1;

        // 10) 한번이라도 방문한적이 없을 경우만
        if (board[nx][ny] !== 'O') {
          // 11) 방문 표시(O) 후 q에 담는다.
          board[nx][ny] = 'O';
          q.push([nx, ny]);
        }
      }
    }
    answer++;
  }
  return -1;
}
