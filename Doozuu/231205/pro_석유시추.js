// 정확성 9/9, 효율성 2/6

function solution(land) {
  const N = land.length;
  const M = land[0].length;
  const visited = Array.from({length: N}, () => Array(M).fill(false));
  const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const answer = Array.from({length: M}, () => 0);
  let range = 0;
  let visited_col = [];

  function dfs(row, col) {
    if (row < 0 || row >= N || col < 0 || col >= M || visited[row][col] || land[row][col] === 0) {
      return;
    }

    visited[row][col] = true;
    visited_col.push(col);
    range++;

    for (const [dx, dy] of dir) {
      let newRow = row + dx;
      let newCol = col + dy;
      dfs(newRow, newCol);
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (land[i][j] === 1 && !visited[i][j]) {
        dfs(i, j);
        let set = new Set(visited_col);
        [...set].map((el) => (answer[el] += range));
        visited_col = [];
        range = 0;
      }
    }
  }

  return Math.max(...answer);
}
