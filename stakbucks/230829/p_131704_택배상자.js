class Queue {
  constructor(arr) {
    this.queue = arr;
    this.front = 0;
    this.rear = arr.length;
  }
  peek() {
    return this.queue[this.front];
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

function solution(order) {
  const queue = new Queue(order);
  let nextBox = queue.peek(); // 택배 기사가 필요한 박스
  let beltBox = 1; // 벨트 위에서 꺼낼 수 있는 박스
  const stack = []; // 보조 컨테이너 벨트
  let answer = 0;
  while (queue.size()) {
    if (beltBox === nextBox) {
      beltBox++;
      queue.dequeue();
      nextBox = queue.peek();
      answer++;
    } else if (stack.at(-1) === nextBox) {
      stack.pop();
      queue.dequeue();
      nextBox = queue.peek();
      answer++;
    } else if (beltBox < nextBox) {
      stack.push(beltBox);
      beltBox++;
    } else {
      break;
    }
  }

  return answer;
}
