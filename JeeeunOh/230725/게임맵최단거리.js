function solution(maps) {
  let n = maps.length,
    m = maps[0].length;
  const dir = [
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 0],
  ];

  let queue = [[0, 0, 1]];
  maps[0][0] = 0;

  while (queue.length) {
    let [cx, cy, cnt] = queue.shift();
    if (cx === n - 1 && cy === m - 1) return cnt;

    for (const [dx, dy] of dir) {
      let [nx, ny] = [cx + dx, cy + dy];
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (maps[nx][ny]) {
        maps[nx][ny] = 0;
        queue.push([nx, ny, cnt + 1]);
      }
    }
  }

  return -1;
}
