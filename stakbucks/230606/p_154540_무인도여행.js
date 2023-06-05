function DFS(maps, array, i, j, visited, maxI, maxJ) {
  array.push(maps[i][j]);
  if (i + 1 < maxJ) {
    if (!visited[i + 1][j]) {
      visited[i + 1][j] = true;
      if (maps[i + 1][j] !== 'X') {
        DFS(maps, array, i + 1, j, visited, maxI, maxJ);
      }
    }
  }
  if (i - 1 >= 0) {
    if (!visited[i - 1][j]) {
      visited[i - 1][j] = true;
      if (maps[i - 1][j] !== 'X') {
        DFS(maps, array, i - 1, j, visited, maxI, maxJ);
      }
    }
  }
  if (j + 1 < maxI) {
    if (!visited[i][j + 1]) {
      visited[i][j + 1] = true;
      if (maps[i][j + 1] !== 'X') {
        DFS(maps, array, i, j + 1, visited, maxI, maxJ);
      }
    }
  }
  if (j - 1 >= 0) {
    if (!visited[i][j - 1]) {
      visited[i][j - 1] = true;
      if (maps[i][j - 1] !== 'X') {
        DFS(maps, array, i, j - 1, visited, maxI, maxJ);
      }
    }
  }
}

function solution(maps) {
  const maxI = maps[0].length;
  const maxJ = maps.length;
  console.log(maxI, maxJ);

  //방문여부 체크하는 배열
  const visited = Array.from(Array(maps.length), () => Array(maps[0].length).fill(false));

  const result = [];
  for (let i = 0; i < maxJ; i++) {
    for (let j = 0; j < maxI; j++) {
      if (!visited[i][j]) {
        visited[i][j] = true;

        if (maps[i][j] !== 'X') {
          const array = [];
          DFS(maps, array, i, j, visited, maxI, maxJ);
          result.push(array.reduce((i, v) => Number(i) + Number(v), 0));
        }
      }
    }
  }
  return result.length ? result.sort((a, b) => a - b) : [-1];
}
