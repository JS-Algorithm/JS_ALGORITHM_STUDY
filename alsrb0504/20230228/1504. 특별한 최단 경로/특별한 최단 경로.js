// const readFileSyncAddress = "/dev/stdin";
const readFileSyncAddress = "text.txt";

const input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trimEnd()
  .split("\n");

// 다익스트라를 위한 최소힙
class MinHeap {
  constructor() {
    this.heap = [null];
  }

  getMin() {
    return this.heap[1] ? this.heap[1] : null;
  }

  size() {
    return this.heap.length - 1;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  push(value) {
    this.heap.push(value);
    let curIdx = this.heap.length - 1;
    let parIdx = Math.floor(curIdx / 2);

    while (curIdx > 1 && this.heap[parIdx].cost > this.heap[curIdx].cost) {
      this.swap(curIdx, parIdx);
      curIdx = parIdx;
      parIdx = Math.floor(curIdx / 2);
    }
  }

  pop() {
    const min = this.heap[1];
    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    let curidx = 1;
    let leftidx = curidx * 2;
    let rightidx = curidx * 2 + 1;

    if (!this.heap[leftidx]) return min;
    if (!this.heap[rightidx]) {
      if (this.heap[leftidx].cost < this.heap[curidx].cost) {
        this.swap(leftidx, curidx);
      }
      return min;
    }

    while (
      leftidx < this.size() &&
      (this.heap[leftidx].cost < this.heap[curidx].cost ||
        this.heap[rightidx].cost < this.heap[curidx].cost)
    ) {
      const minidx =
        this.heap[leftidx].cost > this.heap[rightidx].cost ? rightidx : leftidx;
      this.swap(minidx, curidx);
      curidx = minidx;
      leftidx = curidx * 2;
      rightidx = curidx * 2 + 1;
    }

    return min;
  }
}

function dijkstra(start, dest) {
  const g = Array.from({ length: V + 1 }, () => []);
  const dist = new Array(V + 1).fill(Infinity);
  const visited = new Array(V + 1).fill(false);
  const heap = new MinHeap();

  input.slice(1, 1 + E).forEach((el) => {
    const [S, E, C] = el.split(" ").map(Number);
    g[S].push({ next: E, cost: C });
    g[E].push({ next: S, cost: C });
  });

  heap.push({ vertix: start, cost: 0 });
  dist[start] = 0;

  while (heap.size() > 0) {
    const { vertix, _ } = heap.pop();
    visited[vertix] = true;

    for (let i = 0; i < g[vertix].length; i++) {
      const { next, cost } = g[vertix][i];
      const nextCost = dist[vertix] + cost;

      if (visited[next]) continue;

      if (dist[next] > nextCost) {
        dist[next] = nextCost;
        heap.push({ vertix: next, cost: nextCost });
      }
    }
  }

  return dist[dest];
}

const [V, E] = input[0].split(" ").map(Number);
const [T1, T2] = input[E + 1].split(" ").map(Number);

// 1 -> T1 -> T2 -> N 으로 가능 경로
const path1 = dijkstra(1, T1);
const path2 = dijkstra(T1, T2);
const path3 = dijkstra(T2, V);

// 1 -> T2 -> T1 -> N으로 가능 경로
const path4 = dijkstra(1, T2);
const path5 = dijkstra(T2, T1);
const path6 = dijkstra(T1, V);

const sum1 = path1 + path2 + path3;
const sum2 = path4 + path5 + path6;

const answer = Math.min(sum1, sum2);

// 2 경로 중 더 작은 값을 출력
console.log(answer !== Infinity ? answer : -1);

console.log(`path1 = ${path1}`);
console.log(`path2 = ${path2}`);
console.log(`path3 = ${path3}`);
