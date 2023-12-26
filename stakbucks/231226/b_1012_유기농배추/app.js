const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

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

const DIRS = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const NO_CABBAGE = 0;
const CABBAGE = 1;

function solution(input) {
  const T = input.shift();

  const answer = [];
  for (let i = 0; i < T; i++) {
    const result = go();
    answer.push(result);
  }

  console.log(answer.join('\n'));

  function go() {
    const [M, N, K] = input.shift();

    // 배추들의 좌표
    const field = Array.from({length: N}, () => Array(M).fill(0));

    for (let i = 0; i < K; i++) {
      const [X, Y] = input.shift();
      field[Y][X] = 1;
    }

    let count = 0;

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (field[i][j] === CABBAGE) {
          BFS([i, j]);
          count++;
        }
      }
    }

    return count;

    function BFS(initValue) {
      const queue = new Queue();
      queue.enqueue(initValue);

      const [x, y] = initValue;
      field[x][y] = NO_CABBAGE; // 방문 표시

      while (queue.size()) {
        const [x, y] = queue.dequeue();

        for (const [dx, dy] of DIRS) {
          const [nx, ny] = [x + dx, y + dy];
          if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
          if (field[nx][ny] === NO_CABBAGE) continue;

          queue.enqueue([nx, ny]);
          field[nx][ny] = NO_CABBAGE;
        }
      }
    }
  }
}
solution(input);
