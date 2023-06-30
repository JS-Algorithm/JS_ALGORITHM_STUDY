const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }
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
  // 위로 U층, 아래로 D층, 도착 G층, 현재 S층, 총 F층
  const [F, S, G, U, D] = input.map(Number);
  const dp = Array(F + 1).fill(Infinity);
  dp[S] = 0;
  const queue = new Queue();
  queue.enqueue(S);

  const set = new Set(); // 방문 여부 확인용
  set.add(S);

  while (queue.size()) {
    const s = queue.dequeue();
    if (s + U <= F && !set.has(s + U)) {
      queue.enqueue(s + U);
      set.add(s + U);
      dp[s + U] = dp[s] + 1;
    }
    if (s - D >= 1 && !set.has(s - D)) {
      queue.enqueue(s - D);
      set.add(s - D);
      dp[s - D] = dp[s] + 1;
    }
    if (dp[G] !== Infinity) return console.log(dp[G]);
  }
  console.log('use the stairs');
}

solution(input);
