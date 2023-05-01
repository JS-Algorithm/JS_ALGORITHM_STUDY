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

function solution(n, paths, gates, summits) {
  const INF = Infinity;
  const g = Array.from({ length: n + 1 }, () => []);
  // summitSet: 산봉우리를 빨리 찾기 위한 Set
  const summitSet = new Set(summits);
  // dist : 다익스트라용 비용 저장 배열
  const dist = new Array(n + 1).fill(INF);
  let [minCost, minNode] = [INF, INF];

  // 등산 경로 그래프를 그림
  paths.forEach((el) => {
    const [u, v, cost] = el;

    g[u].push([v, cost]);
    g[v].push([u, cost]);
  });

  // 다익스트라 실행
  dijkstra();

  // 최소 비용의 산봉우리와 인덱스를 찾음
  summits.forEach((summit) => {
    if (minCost >= dist[summit]) {
      if (minCost === dist[summit]) {
        minNode = Math.min(minNode, summit);
      } else {
        minNode = summit;
      }

      minCost = dist[summit];
    }
  });

  return [minNode, minCost];

  function dijkstra() {
    const minHeap = new MinHeap();

    // 시작점들을 모두 힙에 push
    gates.forEach((gate) => {
      dist[gate] = 0;

      minHeap.push({
        vertex: gate,
        cost: 0,
      });
    });

    while (minHeap.size() > 0) {
      const { vertex, cost } = minHeap.pop();

      // 현재 경로의 비용이 이미 저장된 비용보다 크다면 pass
      if (dist[vertex] < cost) continue;

      for (let i = 0; i < g[vertex].length; i++) {
        const [next, nextCost] = g[vertex][i];

        // 현재 경로 비용과 다음 경로의 비용 중 더 큰 값을 찾음
        const finalCost = Math.max(cost, nextCost);

        // 미방문 값 or 혹은 더 작은 값이 올 수 있다면
        // 즉, 현재 저장된 비용보다 작다면 갱신 될 수 있음
        if (dist[next] > finalCost) {
          dist[next] = finalCost;

          // 산봉우리라면 값 갱신 후, pass
          if (summitSet.has(next)) continue;

          minHeap.push({ vertex: next, cost: finalCost });
        }
      }
    }
  }
}

const n = 6;
const paths = [
  [1, 2, 3],
  [2, 3, 5],
  [2, 4, 2],
  [2, 5, 4],
  [3, 4, 4],
  [4, 5, 3],
  [4, 6, 1],
  [5, 6, 1],
];
const gates = [1, 3];
const summits = [5];

console.log(solution(n, paths, gates, summits));
