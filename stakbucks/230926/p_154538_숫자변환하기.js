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

function solution(x, y, n) {
  if (x === y) return 0;
  const queue = new Queue();

  const visited = Array(y + 1).fill(-1);
  visited[x] = 0;

  queue.enqueue(x);

  while (queue.size()) {
    const value = queue.dequeue();
    for (const nextValue of [value + n, value * 2, value * 3]) {
      if (nextValue === y) {
        return visited[value] + 1;
      }
      if (visited[nextValue] !== -1 || nextValue > y) {
        continue;
      }
      queue.enqueue(nextValue);
      visited[nextValue] = visited[value] + 1;
    }
  }
  return -1;
}
