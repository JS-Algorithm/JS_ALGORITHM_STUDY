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

function solution(input) {
  const DFSResult = [];
  const BFSResult = [];
  const [N, M, V] = input.shift();

  const graph = Array.from({length: N + 1}, () => []);

  input.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
  });
  graph.forEach((vertex) => {
    vertex.sort((a, b) => a - b);
  });

  DFS(V);
  BFS(V);

  console.log(DFSResult.join(' '));
  console.log(BFSResult.join(' '));

  function DFS(v) {
    const visited = new Set();

    const stack = [];
    stack.push(v);
    while (stack.length) {
      const top = stack.pop();
      if (!visited.has(top)) {
        visited.add(top);
        DFSResult.push(top);
        [...graph[top]].reverse().forEach((vertex) => {
          stack.push(vertex);
        });
      }
    }
  }

  function BFS(v) {
    const queue = new Queue();
    queue.enqueue(v);
    const visited = new Set();
    visited.add(v);

    while (queue.size()) {
      const vertex = queue.dequeue();
      BFSResult.push(vertex);

      graph[vertex].forEach((nextV) => {
        if (!visited.has(nextV)) {
          visited.add(nextV);
          queue.enqueue(nextV);
        }
      });
    }
  }
}
solution(input);
