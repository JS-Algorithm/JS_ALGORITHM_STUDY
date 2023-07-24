class Queue {
  queue = [];
  front = 0;
  rear = 0;
  enqueue(value) {
    this.queue[this.rear++] = value;
    return;
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

function solution(priorities, location) {
  const queue = new Queue();
  priorities.forEach((v, i) => {
    queue.enqueue({value: v, isTarget: location === i});
  });
  priorities.sort((a, b) => a - b);
  let count = 1;
  while (1) {
    const {value, isTarget} = queue.dequeue();
    if (value === priorities.at(-1)) {
      // 최고 우선순위인 경우
      if (isTarget) {
        //정답인 경우
        return count;
      }
      priorities.pop();
      count++;
    } else {
      queue.enqueue({value, isTarget});
    }
  }
}
