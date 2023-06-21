// 최대힙 구현
class MaxHeap {
  constructor() {
    this.heap = [null];
  }
  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);
    while (parentIndex && value > this.heap[parentIndex]) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }
  pop() {
    if (this.heap.length === 2) return this.heap.pop();

    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftChild = 2;
    let rightChild = 3;

    while (this.heap[leftChild] > this.heap[currentIndex] || this.heap[rightChild] > this.heap[currentIndex]) {
      if (this.heap[leftChild] < this.heap[rightChild]) {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[rightChild];
        this.heap[rightChild] = temp;
        currentIndex = rightChild;
      } else {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[leftChild];
        this.heap[leftChild] = temp;
        currentIndex = leftChild;
      }
      leftChild = currentIndex * 2;
      rightChild = currentIndex * 2 + 1;
    }
    return returnValue;
  }
}

function solution(n, k, enemy) {
  let count = 0;
  let heap = new MaxHeap();
  let sum = 0;

  for (const e of enemy) {
    heap.push(e);
    sum += e;

    // 병사가 부족해지면 힙의 루트(가장 큰 값) pop
    // k가 0이 될 때까지 반복
    if (sum > n) {
      if (k === 0) return count;
      sum -= heap.pop(); //가장 큰 수 빼기
      k--;
    }
    count++;
  }
  return count;
}
