function solution(places) {
  const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const DFS = (i, j, place, distance, visited) => {
    if (distance === 2) return true;

    for (const [dx, dy] of dir) {
      const [nx, ny] = [i + dx, j + dy];
      if (nx < 0 || nx > 4 || ny < 0 || ny > 4) continue;
      if (place[nx][ny] === 'X' || visited[nx][ny]) {
        continue;
      }
      if (place[nx][ny] === 'P') {
        return false;
      }
      visited[nx][ny] = true;
      if (!DFS(nx, ny, place, distance + 1, [...visited])) {
        // 거리두기가 지켜지지 않은 경우가 하나라도 있으면 바로 false 리턴
        return false;
      }
      visited[nx][ny] = false;
    }
    return true;
  };
  const check = (place) => {
    const visited = Array.from({length: 5}, () => Array(5).fill(false));
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (place[i][j] === 'P') {
          // 'P'에서 부터 DFS
          visited[i][j] = true;
          if (!DFS(i, j, place, 0, [...visited])) {
            return false;
          }
          visited[i][j] = false;
        }
      }
    }
    return true;
  };

  const result = [];
  for (const place of places) {
    if (check(place)) result.push(1);
    else result.push(0);
  }
  return result;
}
