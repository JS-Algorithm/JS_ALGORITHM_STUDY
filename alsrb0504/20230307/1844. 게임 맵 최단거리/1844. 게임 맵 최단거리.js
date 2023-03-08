function solution(maps) {
  const dy = [0, 0, -1, 1];
  const dx = [-1, 1, 0, 0];

  const H = maps.length;
  const W = maps[0].length;

  // 최소 이동 비용을 저장할 방문 배열 선언
  const visited = Array.from({length: H}, () => new Array(W).fill(Infinity));

  // bfs 탐색
  bfs();

  // 도달한 경우 최소 비용을 리턴
  // 도달하지 못한 경우에는 -1 리턴
  return visited[H - 1][W - 1] === Infinity ? -1 : visited[H - 1][W - 1];

  function bfs() {
    const q = [[0, 0, 1]];
    visited[0][0] = 0;

    while (q.length) {
      const [y, x, cnt] = q.shift();

      for (let i = 0; i < 4; i++) {
        const [ny, nx] = [y + dy[i], x + dx[i]];

        if (
          ny < 0 ||
          nx < 0 ||
          ny >= H ||
          nx >= W ||
          maps[ny][nx] === 0 ||
          visited[ny][nx] <= cnt + 1
        )
          continue;

        visited[ny][nx] = cnt + 1;
        q.push([ny, nx, cnt + 1]);
      }
    }
  }
}

const maps = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
];

console.log(solution(maps));
