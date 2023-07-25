function solution(maps) {
  class Queue {
    queue = [];
    front = 0;
    rear = 0;
    enqueue(val) {
      this.queue[this.rear++] = val;
    }
    dequeue() {
      const returnVal = this.queue[this.front];
      delete this.queue[this.front++];
      return returnVal;
    }
    size() {
      return this.rear - this.front;
    }
  }

  let n = maps[0].length - 1;
  let m = maps.length - 1;
  let move = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  let queue = new Queue();
  queue.enqueue([0, 0, 1]);

  while (queue.size()) {
    let [y, x, len] = queue.dequeue();
    if (x < 0 || y < 0 || x > n || y > m || maps[y][x] === 0) continue;
    if (x === n && y === m) return len;
    maps[y][x] = 0;
    for (let i = 0; i < 4; i++) {
      let [xm, ym] = move[i];
      queue.enqueue([ym + y, xm + x, len + 1]);
    }
  }
  return -1;
}

// 1. 처음 시작하는 [y좌표,x좌표,이동 거리]를 큐에 넣는다. (x, y 순서 유의)
// 2. 큐에서 값을 꺼내 맵을 벗어나거나 해당 위치가 벽인 경우 continue한다.
// 3. 해당 위치가 목적지의 위치와 일치하는 경우 이동 거리를 return 한다.
// 4. 해당 위치를 지나갔음을 표시하기 위해 0으로 바꿔준다.
// 5. 상하좌우로 1칸씩 이동한 위치와 이동거리를 다시 큐에 넣는다.
