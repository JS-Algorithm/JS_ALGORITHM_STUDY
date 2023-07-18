const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

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

function solution(input) {
  const [from, to] = input.map(Number);
  const time = Array(100001).fill(-1); // 특정 위치까지의 최소 시간을 기록하는 배열
  const queue = new Queue();
  queue.enqueue(from);
  time[from] = 0;

  while (queue.size()) {
    const current = queue.dequeue();
    const currentTime = time[current];
    if (current > 0) {
      const nextTime = time[current - 1];
      if (nextTime === -1 || nextTime > currentTime + 1) {
        queue.enqueue(current - 1);
        time[current - 1] = currentTime + 1;
      }
    }
    if (current < 100000) {
      const nextTime = time[current + 1];
      if (nextTime === -1 || nextTime > currentTime + 1) {
        queue.enqueue(current + 1);
        time[current + 1] = currentTime + 1;
      }
    }
    if (current * 2 <= 100000) {
      const nextTime = time[current * 2];
      if (nextTime === -1 || nextTime > currentTime) {
        queue.enqueue(current * 2);
        time[current * 2] = currentTime;
      }
    }
  }
  console.log(time[to]);
}

solution(input);
