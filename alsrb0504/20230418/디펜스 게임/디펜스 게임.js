class MaxHeap {
  constructor() {
    this.q = [null];
  }

  size() {
    return this.q.length;
  }

  heapPush(item) {
    this.q.push(item);

    let curidx = this.size() - 1;
    let paridx = Math.floor(curidx / 2);

    // 부모가 자신보다 커야함.
    while (this.q[curidx] > this.q[paridx] && curidx !== 1) {
      [this.q[curidx], this.q[paridx]] = [this.q[paridx], this.q[curidx]];
      curidx = paridx;
      paridx = Math.floor(curidx / 2);
    }
  }

  heapPop() {
    // 빈 경우
    if (this.size() === 1) return -1;

    const min = this.q[1];

    if (this.size() <= 2) this.q = [null];
    else this.q[1] = this.q.pop();

    let curidx = 1;
    let leftidx = curidx * 2;
    let rightidx = curidx * 2 + 1;

    // 자식이 없는 경우
    if (this.q[leftidx] === null) return min;

    // 자식이 하나
    if (this.q[rightidx] === null) {
      if (this.q[curidx] < this.q[leftidx]) {
        [this.q[curidx], this.q[leftidx]] = [this.q[leftidx], this.q[curidx]];
      }
      return min;
    }

    // 자식이 둘 다 존재.
    while (
      this.q[curidx] < this.q[leftidx] ||
      this.q[curidx] < this.q[rightidx]
    ) {
      const maxidx = this.q[leftidx] < this.q[rightidx] ? rightidx : leftidx;

      [this.q[curidx], this.q[maxidx]] = [this.q[maxidx], this.q[curidx]];

      curidx = maxidx;
      leftidx = maxidx * 2;
      rightidx = maxidx * 2 + 1;
      //
    }

    return min;
  }
}

function solution(n, k, enemy) {
  // 막아낸 라운드의 적의 수를 저장할 최대힙
  const maxHeap = new MaxHeap();
  // 최대힙에 저장된 적의 수의 총합
  let accAttack = 0;
  let answer = 0;

  for (let attack of enemy) {
    // 최대힙에 공격한 적의 수 저장
    accAttack += attack;
    maxHeap.heapPush(attack);

    // (최대힙에) 막아낼 수 있는 적의 수를 넘은 경우
    // 방어권을 쓸 수 있을 때까지 반복
    while (accAttack > n && k > 0) {
      const tmp = maxHeap.heapPop();
      accAttack -= tmp;
      k--;
    }

    // 방어권을 모두 썼음에도 막아낼 수 없다면 break
    if (accAttack > n) break;

    answer++;
  }

  return answer;
}

// const n = 12;
// const k = 1;
// const enemy = [6, 4, 2, 1, 3, 5, 7];

const n = 7;
const k = 3;
const enemy = [4, 2, 4, 5, 3, 3, 1];

console.log(solution(n, k, enemy));
