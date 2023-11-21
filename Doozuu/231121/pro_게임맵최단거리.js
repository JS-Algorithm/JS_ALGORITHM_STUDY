function solution(maps) {
  class Queue {
    queue = [];
    front = 0;
    rear = 0;
    enqueue(val) {
      this.queue[this.rear++] = val;
    }
    dequeue() {
      const returnVal = this.queue[this.front];
      delete this.queue[this.front++];
      return returnVal;
    }
    size() {
      return this.rear - this.front;
    }
  }
  let n = maps[0].length - 1;
  let m = maps.length - 1;
  let move = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  let queue = new Queue();
  queue.enqueue([0, 0, 1]);

  while (queue.size()) {
    let [y, x, len] = queue.dequeue();
    if (x < 0 || y < 0 || x > n || y > m || maps[y][x] === 0) continue;
    if (x === n && y === m) return len;
    maps[y][x] = 0;
    for (let i = 0; i < 4; i++) {
      let [xm, ym] = move[i];
      queue.enqueue([ym + y, xm + x, len + 1]);
    }
  }
  return -1;
}
