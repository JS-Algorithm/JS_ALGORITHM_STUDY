class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  // 값을 넣되, 오름차순 정렬함
  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 0 && this.heap[currentIndex] < this.heap[Math.floor((currentIndex - 1) / 2)]) {
      const temp = this.heap[currentIndex];
      this.heap[currentIndex] = this.heap[Math.floor((currentIndex - 1) / 2)];
      this.heap[Math.floor((currentIndex - 1) / 2)] = temp;
      currentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }

  // 값을 빼되, 오름차순 정렬 함
  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const minValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    let currentIndex = 0;

    while (currentIndex * 2 + 1 < this.heap.length) {
      let minChildIndex =
        currentIndex * 2 + 2 < this.heap.length && this.heap[currentIndex * 2 + 2] < this.heap[currentIndex * 2 + 1] ? currentIndex * 2 + 2 : currentIndex * 2 + 1;

      if (this.heap[currentIndex] < this.heap[minChildIndex]) {
        break;
      }

      const temp = this.heap[currentIndex];
      this.heap[currentIndex] = this.heap[minChildIndex];
      this.heap[minChildIndex] = temp;
      currentIndex = minChildIndex;
    }

    return minValue;
  }

  peek() {
    return this.heap[0];
  }
}

function solution(scoville, K) {
  const minHeap = new MinHeap();

  for (const sco of scoville) {
    minHeap.push(sco);
  }

  let mixedCount = 0;

  while (minHeap.size() >= 2 && minHeap.peek() < K) {
    const first = minHeap.pop();
    const second = minHeap.pop();
    const mixedScov = first + second * 2;
    minHeap.push(mixedScov);
    mixedCount++;
  }

  return minHeap.peek() >= K ? mixedCount : -1;
}

// 시간 초과 풀이
// function solution(scoville, K) {
//     let answer = 0;
//     scoville.sort((a,b) => b-a);
//     while(scoville.at(-1) < K){
//         if(scoville.length === 1) return -1;
//         scoville.unshift(scoville.at(-1) + (scoville.at(-2) * 2));
//         scoville.pop();
//         scoville.pop();
//         answer++;
//         scoville.sort((a,b) => b-a);
//     }
//     return answer;
// }
