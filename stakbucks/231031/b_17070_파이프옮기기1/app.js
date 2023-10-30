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

const 가로 = '가로';
const 세로 = '세로';
const 대각선 = '대각선';

function solution(input) {
  const N = input.shift();

  const dp = Array.from({length: N}, () => Array(N).fill(0));

  if (input[N - 1][N - 1] === 1) {
    console.log(0);
    return;
  }

  let count = 0;

  const queue = new Queue();
  queue.enqueue([[0, 0], [0, 1], 가로]);

  while (queue.size()) {
    const curLoc = queue.dequeue();

    const nextLocs = move(curLoc);

    for (const [[r1, c1], [r2, c2], dir] of nextLocs) {
      if (r1 < 0 || c1 < 0 || r1 >= N || c1 >= N) continue;
      if (r2 < 0 || c2 < 0 || r2 >= N || c2 >= N) continue;
      if (input[r1][c1] === 1 || input[r2][c2] === 1) continue;

      // 대각선 방향인 경우 2개 칸 추가로 확인
      if (dir === 대각선) {
        if (input[r2 - 1][c2] === 1 || input[r2][c2 - 1] === 1) continue;
      }

      if (r1 === N - 1 && c1 === N - 1) {
        count++;
        continue;
      }

      if (r2 === N - 1 && c2 === N - 1) {
        count++;
        continue;
      }

      queue.enqueue([[r1, c1], [r2, c2], dir]);
    }
  }
  console.log(count);
  function move(curLoc) {
    const [[r1, c1], [r2, c2], dir] = curLoc;
    switch (dir) {
      case 가로:
        return [
          [[r1, c1 + 1], [r2, c2 + 1], 가로],
          [[r1, c1 + 1], [r2 + 1, c2 + 1], 대각선],
        ];
      case 세로:
        return [
          [[r1 + 1, c1], [r2 + 1, c2], 세로],
          [[r1 + 1, c1], [r2 + 1, c2 + 1], 대각선],
        ];
      case 대각선:
        return [
          [[r1 + 1, c1 + 1], [r2, c2 + 1], 가로],
          [[r1 + 1, c1 + 1], [r2 + 1, c2], 세로],
          [[r1 + 1, c1 + 1], [r2 + 1, c2 + 1], 대각선],
        ];
    }
  }
}
solution(input);
