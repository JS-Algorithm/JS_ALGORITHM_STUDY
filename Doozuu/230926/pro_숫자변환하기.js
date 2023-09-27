class Queue {
  queue = [];
  front = 0;
  rear = 0;
  enqueue(value) {
    this.queue[this.rear] = value;
    this.rear++;
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

// dfs 풀이
function solution(x, y, n) {
  let queue = new Queue();
  queue.enqueue([x, 0]);
  let visited = new Array(1000000).fill(0);

  while (queue.size()) {
    let [val, count] = queue.dequeue();
    if (val === y) return count;
    if (visited[val] === 1) continue;
    let newVal = [val + n, val * 2, val * 3];
    newVal.map((el) => {
      if (el <= y) queue.enqueue([el, count + 1]);
    });
    visited[val] = 1;
  }
  return -1;
}
