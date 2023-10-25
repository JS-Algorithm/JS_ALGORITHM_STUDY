class Queue {
  constructor(arr = []) {
    this.queue = [...arr];
    this.rear = this.queue.length;
    this.front = 0;
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
  peek() {
    return this.queue[this.front];
  }
  size() {
    return this.rear - this.front;
  }
}

function solution(bridge_length, weight, truck_weights) {
  const truckQueue = new Queue(truck_weights); // 다리를 아직 건너지 않은 트럭들
  const bridgeQueue = new Queue(); // 다리 위에 있는 트럭들 ([트럭 무게, 다리를 건넌 시간] 형태로 저장)
  let totalWeight = 0;
  let time = 0;

  while (1) {
    if (bridgeQueue.size() === 0 && truckQueue.size() === 0) {
      return time;
    }

    time++;

    // 가장 앞에 위치한 트럭의 다리 건너는 시간이면 dequeue
    const front = bridgeQueue.peek();
    if (bridgeQueue.size() && front[1] === time) {
      bridgeQueue.dequeue();
      totalWeight -= front[0];
    }

    // 다리에 트럭을 올릴 수 있는 경우
    const nextTruck = truckQueue.peek();
    if (totalWeight + nextTruck <= weight) {
      truckQueue.dequeue();

      // 트럭 무게와 다리를 건너는 시간을 큐에 같이 저장
      bridgeQueue.enqueue([nextTruck, time + bridge_length]);

      totalWeight += nextTruck;
    }
  }
}
