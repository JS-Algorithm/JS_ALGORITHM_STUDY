function solution(dirs) {
  const visited = new Set();
  const dir = new Map();
  dir.set('U', [1, 0]);
  dir.set('D', [-1, 0]);
  dir.set('R', [0, 1]);
  dir.set('L', [0, -1]);

  let pos = [0, 0];
  let count = 0;
  for (const d of dirs) {
    const [x, y] = pos;
    const [dx, dy] = dir.get(d);
    if (x + dx < -5 || y + dy < -5 || x + dx > 5 || y + dy > 5) {
      continue;
    }
    pos = [x + dx, y + dy];
    const value1 = JSON.stringify([
      [x, y],
      [x + dx, y + dy],
    ]);
    const value2 = JSON.stringify([
      [x + dx, y + dy],
      [x, y],
    ]);
    if (!visited.has(value1)) {
      visited.add(value1);
      visited.add(value2);
      count++;
    }
  }
  return count;
}
