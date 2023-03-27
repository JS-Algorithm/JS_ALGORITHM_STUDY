function solution(N) {
  let answer = 0;

  // 2차원 체스판
  const map = Array.from({ length: N }, () => new Array(N).fill(0));

  // 탐색 시작
  dfs(0, 0);

  return answer;

  function dfs(cnt, y) {
    // N개의 퀸을 높을 수 있는 경우 카운트
    if (cnt === N) {
      answer++;
      return;
    }

    // x좌표 0 ~ (N - 1)까지 탐색
    // 체스판에 방문처리할 때마다 +1 / -1 (방문처리가 여러번 될 수 있기 때문)
    // 해당 칸이 0보다 크다면 놓을 수 없음.
    for (let i = 0; i < N; i++) {
      // 놓을 수 없다면 패스
      if (map[y][i] > 0) continue;

      // 방문 처리 + 1
      calcVisit(y, i, 1);

      // 현재 row에 퀸을 두고 다음 row 탐색
      dfs(cnt + 1, y + 1, i);

      // 방문 해제 - 1
      calcVisit(y, i, -1);
    }
  }

  function calcVisit(y, x, oper) {
    // 세로 한 줄 방문
    for (let j = 0; j < N; j++) {
      map[j][x] += oper;
    }

    // 가로 한 줄 방문
    for (let j = 0; j < N; j++) {
      map[y][j] += oper;
    }

    // 오른쪽 대각 아래 방문
    for (let ny = y + 1, nx = x + 1; ny < N && nx < N; ny++, nx++) {
      map[ny][nx] += oper;
    }

    // 왼쪽 대각 아래 방문
    for (let ny = y + 1, nx = x - 1; ny < N && nx >= 0; ny++, nx--) {
      map[ny][nx] += oper;
    }

    // 왼쪽 대각 위 방문
    for (let ny = y - 1, nx = x - 1; ny >= 0 && nx >= 0; ny--, nx--) {
      map[ny][nx] += oper;
    }

    // 오른쪽 대각 위 방문
    for (let ny = y - 1, nx = x + 1; ny >= 0 && nx < N; ny--, nx++) {
      map[ny][nx] += oper;
    }
  }
}

const N = 4;

console.log(solution(N));
