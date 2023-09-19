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

function solution(board) {
  const queue = new Queue();
  let target;

  // board에 각 위치까지 이동하는데 최소 이동 횟수 기록
  board = board.map((row, i) =>
    row.split('').map((v, j) => {
      if (v === '.') {
        return Infinity;
      }
      if (v === 'R') {
        queue.enqueue([i, j]);
        return 0;
      }
      if (v === 'G') {
        target = [i, j];
        return Infinity;
      }
      return v;
    }),
  );
  const MAX_X = board.length;
  const MAX_Y = board[0].length;
  const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  while (queue.size()) {
    const currentPos = queue.dequeue();
    for (const d of dir) {
      const [nx, ny] = move(d, currentPos);
      if (board[nx][ny] > board[currentPos[0]][currentPos[1]] + 1) {
        queue.enqueue([nx, ny]);
        board[nx][ny] = board[currentPos[0]][currentPos[1]] + 1;
      }
    }
  }
  return board[target[0]][target[1]] === Infinity ? -1 : board[target[0]][target[1]];

  function move(d, currentPos) {
    // 특정 방향으로 한 번 움직였을 때의 위치를 리턴
    const [dx, dy] = d;
    let [nx, ny] = [...currentPos];
    while (nx + dx >= 0 && nx + dx < MAX_X && ny + dy >= 0 && ny + dy < MAX_Y && board[nx + dx][ny + dy] !== 'D') {
      nx += dx;
      ny += dy;
    }
    return [nx, ny];
  }
}
