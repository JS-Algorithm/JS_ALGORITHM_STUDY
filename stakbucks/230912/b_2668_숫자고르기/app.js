const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

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
  const row1 = Array.from({length: N}, (_, i) => i + 1);
  const row2 = input.map(Number);

  const visited = new Set();
  const queue = new Queue([...row1]);
  visited.add(JSON.stringify(row1));
  while (queue.size()) {
    const selected = queue.dequeue().sort((a, b) => a - b);
    for (let i = 0; i < selected.length; i++) {
      const newSelected = [...selected].filter((_, idx) => idx !== i).sort((a, b) => a - b);
      if (visited.has(JSON.stringify(newSelected))) {
        continue;
      }
      if (check(newSelected)) {
        console.log(newSelected.length);
        console.log(newSelected.sort((a, b) => a - b).join('\n'));
        return;
      }
      visited.add(JSON.stringify(newSelected));
      queue.enqueue(newSelected);
    }
  }

  function check(selected) {
    // 선택한 숫자들이 조건을 만족하는지 체크
    const row1Set = new Set(selected.sort((a, b) => a - b));
    const row2Set = new Set();
    for (const number of selected) {
      row2Set.add(row2[number - 1]);
    }
    return JSON.stringify([...row1Set]) === JSON.stringify([...row2Set].sort((a, b) => a - b));
  }
}
solution(input);
