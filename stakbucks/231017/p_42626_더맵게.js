class MinHeap {
  constructor(arr) {
    this.heap = [null, ...arr];
  }

  push(value) {
    this.heap.push(value);
    let currentIdx = this.heap.length - 1;
    let parentIdx = Math.floor(currentIdx / 2);

    while (this.heap[parentIdx] > value && parentIdx > 0) {
      const temp = this.heap[currentIdx];
      this.heap[currentIdx] = this.heap[parentIdx];
      this.heap[parentIdx] = temp;

      currentIdx = parentIdx;
      parentIdx = Math.floor(currentIdx / 2);
    }
  }

  pop() {
    if (this.heap.length === 2) return this.heap.pop();

    const returnValue = this.heap[1];

    this.heap[1] = this.heap.pop();

    let currentIdx = 1;
    let leftIdx = 2;
    let rightIdx = 3;

    while (this.heap[currentIdx] > this.heap[leftIdx] || this.heap[currentIdx] > this.heap[rightIdx]) {
      if (this.heap[leftIdx] > this.heap[rightIdx]) {
        const temp = this.heap[currentIdx];
        this.heap[currentIdx] = this.heap[rightIdx];
        this.heap[rightIdx] = temp;

        currentIdx = rightIdx;
      } else {
        const temp = this.heap[currentIdx];
        this.heap[currentIdx] = this.heap[leftIdx];
        this.heap[leftIdx] = temp;

        currentIdx = leftIdx;
      }
      leftIdx = currentIdx * 2;
      rightIdx = currentIdx * 2 + 1;
    }

    return returnValue;
  }

  isAnswer(K) {
    return this.heap[1] >= K;
  }

  size() {
    return this.heap.length - 1;
  }
}

function solution(scoville, K) {
  const heap = new MinHeap(scoville.sort((a, b) => a - b));

  let count = 0;
  while (1) {
    if (heap.isAnswer(K)) return count;
    if (heap.size() < 2) return -1;
    mix();
    count++;
  }
  return count;

  function mix() {
    const v1 = heap.pop();
    const v2 = heap.pop();

    heap.push(v1 + v2 * 2);
  }
}
