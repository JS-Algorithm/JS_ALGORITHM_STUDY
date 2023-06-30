class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
    this.sum = 0;
  }
  enqueue(value) {
    this.queue[this.rear++] = value;
    this.sum += value;
  }
  dequeue() {
    const returnValue = this.queue[this.front];
    delete this.queue[this.front++];
    this.sum -= returnValue;
    return returnValue;
  }
  size() {
    return this.rear - this.front;
  }
}

function solution(queue1, queue2) {
  const q1 = new Queue();
  const q2 = new Queue();

  queue1.forEach((v) => q1.enqueue(v));
  queue2.forEach((v) => q2.enqueue(v));

  let count = 0;
  while (q1.sum !== q2.sum) {
    if (count > 2 * (q1.size() + q2.size())) return -1;
    if (q1.sum > q2.sum) {
      q2.enqueue(q1.dequeue());
    } else {
      q1.enqueue(q2.dequeue());
    }
    count++;
  }

  return count;
}
