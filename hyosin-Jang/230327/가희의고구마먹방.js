// 1. 입력 처리
const stdin = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let line = 0;

// 1-1. 공백으로 쪼갠 후 숫자로 변환 > R, C, T 획득
const [R, C, T] = stdin[line++].split(' ').map((v) => +v);

// 1-2. 2차원 board 만들기
const board = Array.from({length: R}, () => stdin[line++].split(''));
// console.log('board', board);

// 1-3. RxC 방문 기록 배열 visited 만들기
const visited = Array.from({length: R}, () => Array.from({length: C}, () => 0));
let dx = [0, 0, 1, -1];
let dy = [1, -1, 0, 0];

// 2. start 위치 찾기
let start = [];
for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (board[i][j] === 'G') start = [i, j];
  }
}

let max = 0;

// 3. dfs 탐색
function dfs(visited, start, t = 0, s = 0) {
  // 3-1. 고구마가 있고, 방문한 적 없다면 없다면 s증가
  let [x, y] = start;
  if (board[x][y] === 'S' && visited[x][y] === 0) {
    s++;
  }
  // 3-2. t가 최대치에 도달한 경우 탐색 종료
  if (t === T) {
    max = Math.max(s, max);
    return;
  }

  // 3-3. 다음에 방문할 곳 탐색
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];

    // 갈수없는 곳이라면 다음곳 탐색
    if (nx < 0 || nx >= R || ny < 0 || ny >= C || board[nx][ny] == '#')
      continue;

    // 방문 횟수 기록 (1증가시킴)
    visited[x][y] += 1;

    dfs(visited, [nx, ny], t + 1, s);

    // 다음 위치를 탐색하기전 되돌리기
    visited[x][y] -= 1;
  }
}

dfs(visited, start);
console.log(max);
