const readFileSyncAddress = process.platform === 'linux' ? '/dev/stdin' : 'text.txt';

const input = require('fs').readFileSync(readFileSyncAddress).toString().trimEnd().split('\n');

const dy = [0, 0, -1, 1];
const dx = [-1, 1, 0, 0];

const [N, L, R] = input[0].split(' ').map(Number);
const board = input.slice(1, 1 + N).map((el) => el.split(' ').map(Number));

let visited = Array.from({length: N}, () => new Array(N).fill(false));
let answer = 0;

// while문이 한 번 실행될 때마다
// 국경을 공유하는 것이 가능한 경우가 있다면 annswer++ 후, 반복
// 국경을 공유할 수 없다면 종료
while (true) {
  let isPossible = false; // 국경 공유가 가능한지 판단하는 변수

  // 매번 while 반복마다 방문 배열을 초기화
  visited = Array.from({length: N}, () => new Array(N).fill(false));

  // 국경 공유가 가능하다면 방문처리, 값 분배, isPossible에 참 할당
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j]) {
        if (bfs(i, j)) {
          isPossible = true;
        }
      }
    }
  }

  if (isPossible) answer++;
  else break;
}

// 정답 출력
console.log(answer);

function bfs(y, x) {
  // bfs로 탐색하면서 값을 공유할 나라의 인덱스는 stack에
  // 나라의 인구값들은 acc(누적합)에 저장
  // 이후, stack과 acc를 활용하여 국경이 공유된 나라에 동일한 값을 할당
  let stack = [[y, x]];
  let q = [[y, x]];
  let acc = board[y][x];

  visited[y][x] = true;

  while (q.length) {
    const [cy, cx] = q.shift();
    const curr = board[cy][cx];

    for (let i = 0; i < 4; i++) {
      const [ny, nx] = [cy + dy[i], cx + dx[i]];
      if (ny < 0 || nx < 0 || ny >= N || nx >= N || visited[ny][nx]) continue;

      const diff = Math.abs(curr - board[ny][nx]);
      if (diff < L || diff > R) continue;

      visited[ny][nx] = true;
      acc += board[ny][nx];
      stack.push([ny, nx]);
      q.push([ny, nx]);
    }
  }

  const result = Math.floor(acc / stack.length);

  stack.forEach((el) => {
    const [cy, cx] = el;
    board[cy][cx] = result;
  });

  if (stack.length > 1) return true;
  else return false;
}
