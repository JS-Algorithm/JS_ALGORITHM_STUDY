function bfs(start, maps, dst) {
  let queue = [start];
  let cnt = 0;

  let dx = [0, 0, 1, -1];
  let dy = [1, -1, 0, 0];

  // 시작위치 방문 표시 > 이거 안해서 에러났었음
  maps[start[0]][start[1]] = 'X';

  while (queue.length > 0) {
    let size = queue.length;

    // 비용 계산하기 위한 for-loop
    for (let q = 0; q < size; q++) {
      // 큐는 선입선출이므로 Array.shift로 배열의 첫번째 요소 제거 후 반환
      let [x, y] = queue.shift();

      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (
          nx >= 0 &&
          nx < maps.length &&
          ny >= 0 &&
          ny < maps[0].length &&
          maps[nx][ny] !== 'X'
        ) {
          if (maps[nx][ny] === dst) {
            // target 찾는데까지의 비용
            return cnt + 1;
          }
          queue.push([nx, ny]);
          maps[nx][ny] = 'X';
        }
      }
      cnt++;
    }
  }
  // target 못찾는 경우 -1 반환
  return -1;
}

function solution(maps) {
  let start = [];
  let lever = [];

  const map1 = maps.map((item) => item.split(''));
  const map2 = maps.map((item) => item.split(''));

  // 1. START, LEVER 지점 찾기
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[i].length; j++) {
      if (maps[i][j] == 'S') {
        start = [i, j];
      } else if (maps[i][j] == 'L') {
        lever = [i, j];
      }
    }
  }
  // 2. START -> LEVER 찾기
  let leverCost = bfs(start, [...map1], 'L');
  if (leverCost === -1) return -1;

  // 3. LEVER -> EXIT 찾기
  let endCost = bfs(lever, [...map2], 'E');
  if (endCost === -1) return -1;

  return leverCost + endCost;
}
