const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split('').map(Number));

class Queue {
  queue = [];
  front = 0;
  rear = 0;

  enqueue(value) {
    this.queue[this.rear] = value;
    this.rear++;
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

const DIRS = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function solution(input) {
  const [[N], ...graph] = input;
  const visited = Array.from({length: N}, () => Array(N).fill(false));

  const house = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (graph[i][j] && visited[i][j] === false) {
        BFS([i, j]);
      }
      visited[i][j] = true;
    }
  }

  function BFS(initValue) {
    const queue = new Queue();
    queue.enqueue(initValue);
    visited[initValue[0]][initValue[1]] = true;

    let count = 1;

    while (queue.size()) {
      const [x, y] = queue.dequeue();

      for (const [dx, dy] of DIRS) {
        const [nx, ny] = [x + dx, y + dy];
        if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
        if (visited[nx][ny] || graph[nx][ny] === 0) continue;
        queue.enqueue([nx, ny]);
        visited[nx][ny] = true;
        count++;
      }
    }
    house.push(count);
  }
  console.log([house.length, ...house.sort((a, b) => a - b)].join('\n'));
}
solution(input);
