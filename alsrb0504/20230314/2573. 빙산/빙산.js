const readFileSyncAddress = "/dev/stdin";
const input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trimEnd()
  .split("\n");

const dy = [0, 0, -1, 1];
const dx = [-1, 1, 0, 0];

const [h, w] = input[0].split(" ").map(Number);
let map = input.slice(1, 1 + h).map((el) => el.split(" ").map(Number));
let answer = 0;

// 빙산이 없어질 때까지 반복
// 매번 새로운 방문 배열 선언 및 bfs 실행
while (true) {
  const visited = Array.from({ length: h }, () => new Array(w).fill(false));
  let group = 0;
  const iced = [];
  // 현재 map(빙산) 상태 복사
  const updated_map = map.map((el) => [...el]);

  // 빙산 위치 찾기
  for (let i = 1; i < h - 1; i++) {
    for (let j = 1; j < w - 1; j++) {
      if (map[i][j] > 0) iced.push([i, j]);
    }
  }

  // 예외 경우 : 빙산이 없다면(=나눠지지 않고 다 녹은 경우) 종료
  if (iced.length === 0) {
    console.log(0);
    return;
  }

  iced.forEach((el) => {
    const [y, x] = el;

    // 현재 빙산이 몇 개의 그룹인지 bfs로 탐색
    if (!visited[y][x]) {
      visited[y][x] = true;
      group++;

      bfs(y, x);
    }
  });

  // 종료 조건 : 빙산이 두 개 이상으로 나뉜 경우
  if (group !== 1) break;

  // 빙산이 녹는 상황을 업데이트
  iced.forEach((el) => {
    const [y, x] = el;

    for (let i = 0; i < 4; i++) {
      const [ny, nx] = [y + dy[i], x + dx[i]];

      // 인접한 빙산의 값을 감소
      if (map[ny][nx] === 0) {
        updated_map[y][x] =
          updated_map[y][x] - 1 > 0 ? updated_map[y][x] - 1 : 0;
      }
    }
  });

  map = updated_map;
  answer++;

  function bfs(sy, sx) {
    const q = [[sy, sx]];

    while (q.length) {
      const [cy, cx] = q.shift();

      for (let i = 0; i < 4; i++) {
        const [ny, nx] = [cy + dy[i], cx + dx[i]];

        if (visited[ny][nx] || map[ny][nx] === 0) continue;

        visited[ny][nx] = true;
        q.push([ny, nx]);
      }
    }
  }
}

console.log(answer);
