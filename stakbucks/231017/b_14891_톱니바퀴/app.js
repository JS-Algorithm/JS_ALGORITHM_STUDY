const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const CLOCK = 1;
const COUNTER_CLOCK = -1;

const LEFT = 6; // 톱니바퀴 왼쪽 칸 인덱스
const RIGHT = 2; //  톱니바퀴 오른쪽 칸 인덱스

class Queue {
  queue = [];
  front = 0;
  rear = 0;

  enqueued = new Set();

  enqueue(value) {
    this.queue[this.rear] = value;
    this.rear++;
    this.enqueued.add(value[0]);
  }
  dequeue() {
    const returnValue = this.queue[this.front];
    delete this.queue[this.front++];

    return returnValue;
  }
  hasEnqueued(value) {
    return this.enqueued.has(value);
  }
  size() {
    return this.rear - this.front;
  }
}

function solution(input) {
  const gears = input.slice(0, 4).map((v) => v.split('').map(Number));
  const K = Number(input[4]);
  const arr = input.slice(5).map((v) => v.split(' ').map(Number));

  for (const [gearNum, dir] of arr) {
    const prevGears = gears.map((v) => [...v]);
    BFS(gearNum - 1, dir, prevGears);
  }

  console.log(calcScore(gears));

  function BFS(startGear, dir, prevGears) {
    const queue = new Queue();
    queue.enqueue([startGear, dir]);

    while (queue.size()) {
      const [gearNum, dir] = queue.dequeue();

      // 회전 시키기
      gears[gearNum] = rotate(gears[gearNum], dir);

      // 왼쪽 톱니바퀴 확인
      if (gearNum > 0 && prevGears[gearNum][LEFT] !== prevGears[gearNum - 1][RIGHT] && !queue.hasEnqueued(gearNum - 1)) {
        if (dir === CLOCK) queue.enqueue([gearNum - 1, COUNTER_CLOCK]);
        else queue.enqueue([gearNum - 1, CLOCK]);
      }

      // 오른쪽 톱니바퀴 확인
      if (gearNum < 3 && prevGears[gearNum][RIGHT] !== prevGears[gearNum + 1][LEFT] && !queue.hasEnqueued(gearNum + 1)) {
        if (dir === CLOCK) queue.enqueue([gearNum + 1, COUNTER_CLOCK]);
        else queue.enqueue([gearNum + 1, CLOCK]);
      }
    }
  }

  function rotate(gear, dir) {
    if (dir === CLOCK) return [gear[7], ...gear.slice(0, 7)];
    else return [...gear.slice(1, 8), gear[0]];
  }

  function calcScore(gears) {
    return gears.reduce((acc, cur, idx) => acc + cur[0] * 2 ** idx, 0);
  }
}
solution(input);
