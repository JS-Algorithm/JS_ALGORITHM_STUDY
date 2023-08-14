class MinHeap {
  heap = [null];

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);
    while (parentIndex !== 0 && this.heap[parentIndex] > value) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    const returnValue = this.heap[1];

    // 예외 처리 반드시 해줘야..
    if (this.size() === 1) {
      this.heap.pop();
      return returnValue;
    }
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;
    while (this.heap[currentIndex] > this.heap[leftIndex] || this.heap[currentIndex] > this.heap[rightIndex]) {
      if (this.heap[leftIndex] > this.heap[rightIndex]) {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;
        currentIndex = rightIndex;
      } else {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = temp;
        currentIndex = leftIndex;
      }
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return returnValue;
  }

  // 정답 여부 체크 (가장 작은 값이 K 이상인지)
  isAnswer(K) {
    return this.heap[1] >= K;
  }

  size() {
    return this.heap.length - 1;
  }
}

function solution(scoville, K) {
  const heap = new MinHeap();
  scoville.forEach((v) => heap.push(v));
  const mix = () => {
    const val1 = heap.pop();
    const val2 = heap.pop();
    heap.push(val1 + val2 * 2);
  };

  let count = 0;
  while (1) {
    if (heap.isAnswer(K)) {
      return count;
    }
    if (heap.size() < 2) return -1;
    mix();
    count++;
  }

  return count;
}
