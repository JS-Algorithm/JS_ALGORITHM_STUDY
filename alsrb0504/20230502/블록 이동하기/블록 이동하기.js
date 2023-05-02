// 첫 번째 블록(=fir)과 두 번째 블록(=sec)의 위치를 기준으로
// 회전하는 경우 => 각각 4가지 * 2
// 현재 모양 그대로 이동하는 4가지
// 를 합쳐 총 12가지 경우의 수를 탐색하며 bfs를 진행하는 구현 문제
function solution(board) {
  // 좌, 우, 상, 하
  const dy = [0, 0, -1, 1];
  const dx = [-1, 1, 0, 0];
  // 첫 번째 블럭(=fir)을 기준으로 옆에 붙은 두 번째 블록(=sec)의 위치를 파악할 변수(객체)
  // 추후 방문처리를 fir위치 기준, sec 위치 기준 2가지를 한 번에 하기 위해 필요.
  const reverse = {
    0: 1,
    1: 0,
    2: 3,
    3: 2,
  };

  const size = board[0].length;
  // 3차원 방문 배열 생성
  // fir와 sec를 기준으로 방문 처리 구현을 위함
  const visited = Array.from(
    { length: size },
    () => Array.from({ length: size }, () => new Array(4).fill(999)) // 999 => infinity
  );
  // 초기 위치 처리 1: (fir:(0,0)의 오른쪽에 sec(0,1)이 위치함)
  // 초기 위치 처리 2: (sec:(0,1)의 왼쪽에 fir(0,0)이 위치함)
  // 2가지 경우를 처리하는 이유 : 뒤집어도 똑같기 때문에
  // (0,1)에 위치한 sec를 fir라 취급하면 fir(0,1)의 왼쪽에 sec(0,0)이 위치한 경우임.
  visited[0][0][1] = 0;
  visited[0][1][0] = 0;

  bfs();

  function bfs() {
    // [fir, sec, cnt, fir에 sec가 있는 방향]
    const q = [[[0, 0], [0, 1], 0, 1]];

    while (q.length) {
      const [fir, sec, cnt, dir] = q.shift();
      const [fy, fx] = fir;
      const [sy, sx] = sec;

      // y_diff : y 좌표 위치 차이 => 좌우로 놓여있는지 상하로 놓여있는지 확인하기 위해
      const y_diff = fy - sy;

      // 1. 상하좌우로 이동
      // 현재 모양 그대로 이동
      for (let i = 0; i < 4; i++) {
        const [nfy, nfx] = [fy + dy[i], fx + dx[i]];
        const [nsy, nsx] = [sy + dy[i], sx + dx[i]];

        if (!CheckBoundary(nfy, nfx) || !CheckBoundary(nsy, nsx)) continue;
        if (visited[nfy][nfx][dir] <= cnt + 1) continue;

        visited[nfy][nfx][dir] = cnt + 1;
        visited[nsy][nsx][reverse[dir]] = cnt + 1;

        q.push([[nfy, nfx], [nsy, nsx], cnt + 1, dir]);
      }

      // 2. 회전
      // 2-1.가로로 놓여진 상태라면
      if (y_diff === 0) {
        // 2-1-1. fir 기준 위로 회전
        let uy = fy - 1;

        // fir를 위로 돌릴 수 있다면
        if (
          CheckOneBoundary(uy) &&
          board[uy][fx] !== 1 &&
          board[uy][sx] !== 1 &&
          visited[fy][fx][2] > cnt + 1
        ) {
          visited[fy][fx][2] = cnt + 1;
          // fir와 sec의 위치가 바뀐 경우도 방문 처리 추가
          visited[uy][fx][reverse[2]] = cnt + 1;

          q.push([[fy, fx], [uy, fx], cnt + 1, 2]);
        }

        // 2-1-2. fir 기준 아래로 회전
        let dy = fy + 1;

        // fir를 아래로 돌릴 수 있다면 (방문 처리는 동일)
        if (
          CheckOneBoundary(dy) &&
          board[dy][fx] !== 1 &&
          board[dy][sx] !== 1 &&
          visited[fy][fx][3] > cnt + 1
        ) {
          visited[fy][fx][3] = cnt + 1;
          q.push([[fy, fx], [dy, fx], cnt + 1, 3]);
        }

        // 2-1-3. sec 기준 위로 회전
        uy = sy - 1;

        if (
          CheckOneBoundary(uy) &&
          board[uy][fx] !== 1 &&
          board[uy][sx] !== 1 &&
          visited[sy][sx][2] > cnt + 1
        ) {
          visited[sy][sx][2] = cnt + 1;
          q.push([[sy, sx], [uy, sx], cnt + 1, 2]);
        }

        // 2-1-4. sec 기준 아래로 회전
        dy = sy + 1;

        if (
          CheckOneBoundary(dy) &&
          board[dy][fx] !== 1 &&
          board[dy][sx] !== 1 &&
          visited[sy][sx][3] > cnt + 1
        ) {
          visited[sy][sx][3] = cnt + 1;
          q.push([[sy, sx], [dy, sx], cnt + 1, 3]);
        }
      }
      // 2-2. 세로로 놓여있는 경우
      else {
        // 2-2-1. fir 기준 왼쪽으로 회전
        let lx = fx - 1;

        if (
          CheckOneBoundary(lx) &&
          board[fy][lx] !== 1 &&
          board[sy][lx] !== 1 &&
          visited[fy][fx][0] > cnt + 1
        ) {
          visited[fy][fx][0] = cnt + 1;
          q.push([[fy, fx], [fy, lx], cnt + 1, 0]);
        }

        // 2-2-2. fir 기준 오른쪽으로 회전
        let rx = fx + 1;

        if (
          CheckOneBoundary(rx) &&
          board[fy][rx] !== 1 &&
          board[sy][rx] !== 1 &&
          visited[fy][fx][1] > cnt + 1
        ) {
          visited[fy][fx][1] = cnt + 1;
          q.push([[fy, fx], [fy, rx], cnt + 1, 1]);
        }

        // 2-2-3. sec 기준 왼쪽으로 회전
        lx = sx - 1;

        if (
          CheckOneBoundary(lx) &&
          board[fy][lx] !== 1 &&
          board[sy][lx] !== 1 &&
          visited[sy][sx][0] > cnt + 1
        ) {
          visited[sy][sx][0] = cnt + 1;
          q.push([[sy, sx], [sy, lx], cnt + 1, 0]);
        }

        // 2-2-4. sec 기준 오른쪽으로 회전
        rx = sx + 1;

        if (
          CheckOneBoundary(rx) &&
          board[fy][rx] !== 1 &&
          board[sy][rx] !== 1 &&
          visited[sy][sx][1] > cnt + 1
        ) {
          visited[sy][sx][1] = cnt + 1;
          q.push([[sy, sx], [sy, rx], cnt + 1, 1]);
        }
      }
    }
  }

  // visited의 마지막 위치에서 4가지 방향 중, 최대 값 리턴.
  return Math.min(...visited[size - 1][size - 1]);

  function CheckOneBoundary(val) {
    if (val < 0 || val >= size) return false;
    return true;
  }

  function CheckBoundary(y, x) {
    if (y < 0 || x < 0 || y >= size || x >= size) return false;
    if (board[y][x] === 1) return false;
    return true;
  }
}
