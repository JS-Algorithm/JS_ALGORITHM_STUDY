// 효율성 테스트 시간초과
// function solution(maps) {
//   const [n, m] = [maps.length, maps[0].length];
//   const visited = Array.from({length: n}, () => Array(m).fill(Infinity));
//   let answer = Infinity;

//   const dir = [
//     [-1, 0],
//     [1, 0],
//     [0, -1],
//     [0, 1],
//   ];

//   const DFS = (i, j, visited) => {
//     if (i === n - 1 && j === m - 1) {
//       // 목적지에 도착한 경우
//       return;
//     }

//     for (const [dx, dy] of dir) {
//       const [nx, ny] = [i + dx, j + dy];
//       if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
//       if (!maps[nx][ny]) continue;
//       if (visited[nx][ny] < visited[i][j] + 1) continue;
//       visited[nx][ny] = visited[i][j] + 1;
//       DFS(nx, ny, visited);
//     }
//   };
//   visited[0][0] = 1;
//   DFS(0, 0, visited);
//   return visited[n - 1][m - 1] === Infinity ? -1 : visited[n - 1][m - 1];
// }

class Queue {
  queue = [];
  front = 0;
  rear = 0;
  enqueue(value) {
    this.queue[this.rear++] = value;
    return;
  }
  dequeue() {
    const returnValue = this.queue[this.front];
    delete this.queue[this.front++];
    return returnValue;
  }
  size() {
    return this.rear - this.front;
  }
}

function solution(maps) {
  const [n, m] = [maps.length - 1, maps[0].length - 1];
  const visited = Array.from({length: n + 1}, () => Array(m + 1).fill(-1));

  const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const queue = new Queue();
  queue.enqueue([0, 0]);
  visited[0][0] = 1;
  while (queue.size()) {
    const [x, y] = queue.dequeue();
    for (const [dx, dy] of dir) {
      const [nx, ny] = [x + dx, y + dy];
      if (nx < 0 || nx > n || ny < 0 || ny > m) continue;
      if (!maps[nx][ny] || visited[nx][ny] !== -1) continue;
      visited[nx][ny] = visited[x][y] + 1;
      // 여기서 정답 체크 안하면 효율성테스트 3 시간초과
      if (nx === n && ny === m) return visited[nx][ny];
      queue.enqueue([nx, ny]);
    }
  }
  return -1;
}
