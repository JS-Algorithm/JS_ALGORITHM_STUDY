// 2차원 최대힙
class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  size() {
    return this.heap.length - 1;
  }

  add(num) {
    if (this.size() === 0) {
      this.heap.push(num);
      return;
    }

    this.heap.push(num);

    let cur_idx = this.size();
    let par_idx = Math.floor(cur_idx / 2);

    // [거리, rest]
    while (cur_idx > 1 && this.heap[cur_idx][0] > this.heap[par_idx][0]) {
      [this.heap[cur_idx], this.heap[par_idx]] = [
        this.heap[par_idx],
        this.heap[cur_idx],
      ];

      cur_idx = par_idx;
      par_idx = Math.floor(cur_idx / 2);
    }
  }

  pop() {
    const curr_size = this.size();

    if (curr_size === 0) {
      return -1;
    }

    if (curr_size === 1) {
      return this.heap.pop();
    }

    const max = this.heap[1];
    this.heap[1] = this.heap.pop();

    let cur_idx = 1;
    let lt_idx = cur_idx * 2;
    let rt_idx = cur_idx * 2 + 1;

    // 자식이 없다면
    if (!this.heap[lt_idx]) {
      return max;
    }

    // 자식이 하나라면
    if (!this.heap[rt_idx]) {
      if (this.heap[cur_idx][0] < this.heap[lt_idx][0]) {
        this.swap(cur_idx, lt_idx);
      }
      return max;
    }

    // 자식이 둘 이상
    while (
      lt_idx < this.size() &&
      (this.heap[lt_idx][0] > this.heap[cur_idx][0] ||
        this.heap[rt_idx][0] > this.heap[cur_idx][0])
    ) {
      const max_idx =
        this.heap[lt_idx][0] < this.heap[rt_idx][0] ? rt_idx : lt_idx;

      this.swap(cur_idx, max_idx);

      cur_idx = max_idx;
      lt_idx = cur_idx * 2;
      rt_idx = cur_idx * 2 + 1;
    }

    return max;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
}

// 항상 거리가 최대인 물건을 찾아 배달 or 회수
function solution(cap, _, deliveries, pickups) {
  // 최대 거리를 빠르게 찾기 위한 배달,픽업 최대힙
  const del_heap = new MaxHeap();
  const pickup_heap = new MaxHeap();
  let answer = 0;

  // 해당 거리에 물건이 있다면 힙에 추가
  deliveries.forEach((val, idx) => {
    if (val > 0) del_heap.add([idx + 1, val]);
  });
  pickups.forEach((val, idx) => {
    if (val > 0) pickup_heap.add([idx + 1, val]);
  });

  // 배달 or 픽업할 아이템이 없을 떄까지 반복
  while (del_heap.size() || pickup_heap.size()) {
    // 이번 배달에서 최대 거리를 저장할 변수 선언
    let del_dist = 0;
    let pickup_dist = 0;

    // 이번 배달에서 배달할 아이템의 수를 관리할 변수 선언
    let del_cnt = 0;
    let pickup_cnt = 0;

    // 아직 더 배달할 수 있고 배달할 아이템이 남아있을 떄까지 반복
    while (del_cnt < cap && del_heap.size()) {
      // 최대힙에서 거리가 가장 먼 요소 pop
      const [dist, rest] = del_heap.pop();
      // 현재 배달한 수 + 현재 거리의 배달 수
      const sum = del_cnt + rest;

      // 최대 배달 거리 갱신
      del_dist = Math.max(del_dist, dist);

      // 1. 현재 거리의 배달 수를 모두 수용 가능 => 반복 진행
      if (sum <= cap) {
        del_cnt = sum;
      }
      // 2. 배달 가능 수량을 초과했다면
      // 배달 가능한 개수까지만 가져가고 남은 개수 다시 힙에 push
      else {
        const diff = sum - cap;

        del_cnt = cap;

        del_heap.add([dist, diff]);
      }
    }

    // 배달 로직과 동일.
    while (pickup_cnt < cap && pickup_heap.size()) {
      const [dist, rest] = pickup_heap.pop();
      const sum = pickup_cnt + rest;

      pickup_dist = Math.max(pickup_dist, dist);

      if (sum <= cap) {
        pickup_cnt = sum;
      } else {
        const diff = sum - cap;
        pickup_cnt = cap;

        pickup_heap.add([dist, diff]);
      }
    }

    // 이번 운행에서 배달 거리와 픽업 거리 중 더 큰 값만큼 answer에 추가
    answer += Math.max(del_dist, pickup_dist) * 2;
  }

  return answer;
}

const cap = 4;
const n = 5;
const deliveries = [1, 0, 3, 1, 2];
const pickups = [0, 3, 0, 4, 0];

// const cap = 2;
// const n = 7;
// const deliveries = [1, 0, 2, 0, 1, 0, 2];
// const pickups = [0, 2, 0, 1, 0, 2, 0];

console.log(solution(cap, n, deliveries, pickups));
