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
}

function solution(want, number, discount) {
  let answer = 0;
  const queue = new Queue();

  const wantMap = new Map(); // 정현이가 원하는 [제품, 수량]
  const currentMap = new Map(); // 해당 날에 회원가입시 할인 받는 [제품, 수량]

  for (let i = 0; i < want.length; i++) {
    wantMap.set(want[i], number[i]);
    currentMap.set(want[i], 0);
  }

  const push = (product) => {
    queue.enqueue(product);
    const value = currentMap.get(product);
    currentMap.set(product, value + 1);
  };
  const pop = () => {
    const product = queue.dequeue();
    const value = currentMap.get(product);
    currentMap.set(product, value - 1);
  };
  const shouldRegister = () => {
    // 회원가입하기 적합한 날인지 확인하는 함수
    for (const product of wantMap.keys()) {
      if (wantMap.get(product) !== currentMap.get(product)) {
        return false;
      }
    }
    return true;
  };

  // 첫날 기준으로 초기화
  for (let i = 0; i < 10; i++) {
    push(discount[i]);
  }
  if (shouldRegister()) answer++;
  for (let i = 10; i < discount.length; i++) {
    pop();
    push(discount[i]);
    if (shouldRegister()) {
      answer++;
    }
  }
  return answer;
}
