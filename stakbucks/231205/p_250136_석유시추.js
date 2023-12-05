class Queue {
  queue = [];
  front = 0;
  rear = 0;
  enqueue(value) {
    this.queue[this.rear] = value;
    this.rear++;
  }
  dequeue() {
    const returnValue = this.queue[this.front];
    delete this.queue[this.front++];
    return returnValue;
  }
  size() {
    return this.rear - this.front;
  }
}

const DIRS = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

// 풀이: land 배열의 석유(1) 있는 칸을 석유 덩어리의 id로 갱신
// id를 통해 해당 덩어리의 크기 가져옴

function solution(land) {
  const m = land[0].length;
  const n = land.length;

  let oilLumpId = 2; // 석유 덩어리 아이디로 사용될 값. 2부터 시작

  const oilLump = new Map(); // 석유 덩어리 (id, 크기)

  let answer = 0;

  for (let i = 0; i < m; i++) {
    let rowCnt = 0;
    const visited = new Set();
    for (let j = 0; j < n; j++) {
      if (land[j][i] !== 0) {
        // 석유 발견
        const id = land[j][i] === 1 ? BFS(j, i) : land[j][i];

        if (!visited.has(id)) {
          // 해당 열에서 아직 이 덩어리를 카운트 하지 않은 경우
          rowCnt += oilLump.get(id);
          visited.add(id);
        }
      }
    }
    answer = Math.max(rowCnt, answer);
  }
  return answer;

  function BFS(j, i) {
    const queue = new Queue();

    queue.enqueue([j, i]);
    land[j][i] = oilLumpId;

    let oilSize = 1; // 덩어리 크기

    while (queue.size()) {
      const [x, y] = queue.dequeue();
      for (const [dx, dy] of DIRS) {
        const [nx, ny] = [x + dx, y + dy];
        if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
        if (land[nx][ny] !== 1) continue;

        queue.enqueue([nx, ny]);
        oilSize++;
        land[nx][ny] = oilLumpId;
      }
    }

    oilLump.set(oilLumpId, oilSize);
    oilLumpId++;
    return oilLumpId - 1;
  }
}
