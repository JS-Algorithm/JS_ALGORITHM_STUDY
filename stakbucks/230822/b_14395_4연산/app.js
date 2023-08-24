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
  const [s, t] = input.map(Number);
  if (s === t) {
    console.log(0);
    return;
  }
  const visited = new Map();
  visited.set(s, []);
  const queue = new Queue();
  queue.enqueue(s);

  while (queue.size()) {
    const value = queue.dequeue();
    const next = [
      {nextValue: value * value, operator: '*'},
      {nextValue: value + value, operator: '+'},
      {nextValue: value - value, operator: '-'},
    ];
    if (value) next.push({nextValue: value / value, operator: '/'});
    for (const {nextValue, operator} of next) {
      if (!visited.has(nextValue)) {
        queue.enqueue(nextValue);
        const prevOperators = visited.get(value);
        visited.set(nextValue, [...prevOperators, operator]);
      }
      if (nextValue === t) {
        // 정답을 찾은 경우
        console.log(visited.get(nextValue).join(''));
        return;
      }
    }
  }
  // 바꿀 수 없는 경우
  console.log(-1);
}
solution(input);
