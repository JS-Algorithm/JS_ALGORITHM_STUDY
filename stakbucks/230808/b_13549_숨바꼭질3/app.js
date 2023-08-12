const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

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
  const [subinLoc, targetLoc] = input.map(Number);
  const visited = Array(100001).fill(Infinity);
  const queue = new Queue();
  visited[subinLoc] = 0;
  queue.enqueue(subinLoc);

  while (queue.size()) {
    const value = queue.dequeue();
    if (value !== 0 && value * 2 <= 100000 && visited[value] < visited[value * 2]) {
      queue.enqueue(value * 2);
      visited[value * 2] = visited[value];
    }
    if (value < 100000 && visited[value] + 1 < visited[value + 1]) {
      queue.enqueue(value + 1);
      visited[value + 1] = visited[value] + 1;
    }
    if (value > 0 && visited[value] + 1 < visited[value - 1]) {
      queue.enqueue(value - 1);
      visited[value - 1] = visited[value] + 1;
    }
  }
  console.log(visited[targetLoc]);
}

solution(input);
