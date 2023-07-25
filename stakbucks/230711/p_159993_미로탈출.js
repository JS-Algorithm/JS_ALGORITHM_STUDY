// 1. S->L까지의 최단 경로 구하기
// 2. L->E까지의 최단 경로 구하기

class Queue {
  queue = [];
  front = 0;
  rear = 0;
  enqueue(value) {
    this.queue[this.rear++] = value;
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
  let S = [];
  let E = [];
  let L = [];
  // S, E, L 좌표 찾기
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j] === 'S') {
        S = [i, j];
      }
      if (maps[i][j] === 'E') {
        E = [i, j];
      }
      if (maps[i][j] === 'L') {
        L = [i, j];
      }
    }
  }

  const BFS = (from, to) => {
    const dir = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    const visited = Array.from({length: maps.length}, () => Array(maps[0].length).fill(0));
    const queue = new Queue();
    queue.enqueue(from);

    while (queue.size()) {
      const [x, y] = queue.dequeue();
      if (x === to[0] && y === to[1]) {
        return visited[x][y];
      }

      for (const [dx, dy] of dir) {
        const [nx, ny] = [x + dx, y + dy];
        if (nx < 0 || nx >= maps.length || ny < 0 || ny >= maps[0].length) {
          continue;
        }
        if (visited[nx][ny] || maps[nx][ny] === 'X') {
          continue;
        }
        visited[nx][ny] = visited[x][y] + 1;
        queue.enqueue([nx, ny]);
      }
    }
    return 0;
  };

  if (BFS(S, L) && BFS(L, E)) return BFS(S, L) + BFS(L, E);
  else return -1;
}
