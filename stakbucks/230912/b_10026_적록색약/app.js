const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

// 적록색약이 아닌 경우
// 적록색약인 경우 => R,G 같은 색 취급

class Queue {
  constructor(init) {
    this.queue = [];
    this.queue.push(init);
    this.front = 0;
    this.rear = 1;
  }

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

function solution(input) {
  const N = Number(input.shift());
  const grid = [...input];
  const 적록색약Grid = Array.from({length: N}, (_, i) => input[i].split('').map((color) => (color === 'G' ? 'R' : color)));
  const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  console.log(getSectionsCnt(false), getSectionsCnt(true));

  function getSectionsCnt(is적록색약) {
    let sectionsCnt = 0;
    const visited = Array.from({length: N}, () => Array(N).fill(false));
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (!visited[i][j]) {
          visited[i][j] = true;
          if (!is적록색약) {
            BFS([i, j], grid[i][j], is적록색약, visited);
          } else {
            BFS([i, j], 적록색약Grid[i][j], is적록색약, visited);
          }
          sectionsCnt++;
        }
      }
    }
    return sectionsCnt;
  }

  function BFS(init, color, is적록색약, visited) {
    const queue = new Queue(init);
    while (queue.size()) {
      const [x, y] = queue.dequeue();
      for (const [dx, dy] of dir) {
        const [nx, ny] = [x + dx, y + dy];
        if (nx < 0 || nx >= N || ny < 0 || ny >= N) {
          continue;
        }
        if (visited[nx][ny]) {
          continue;
        }
        if (!is적록색약 && color !== grid[nx][ny]) {
          continue;
        }
        if (is적록색약 && color !== 적록색약Grid[nx][ny]) {
          continue;
        }
        visited[nx][ny] = true;

        queue.enqueue([nx, ny]);
      }
    }
  }
}
solution(input);
