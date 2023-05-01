// 참고풀이: https://joojaewoo.github.io/posts/blockMove/

const solution = (board) => {
  // bfs로 문제를 풀기 위해 queue를 초기화해준다
  const queue = [];
  const N = board.length;
  const goal = (N + '' + N).toString();
  const newBoard = Array.from(Array(N + 2), () => Array(N + 2).fill(1));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      newBoard[i + 1][j + 1] = board[i][j];
    }
  }
  queue.push({head: [1, 1], tail: [1, 2], dist: 0});

  // 방문 체크는 중복을 제거하기 위해 Set에 저장해준다.
  const visit = new Set(['1112']);

  while (queue.length > 0) {
    // 머리나 꼬리가 nxn에 도착한 경우 종료시킨다.
    const {head, tail, dist} = queue.shift();
    if (head.join('') === goal || tail.join('') === goal) return dist;

    // getNextPos 함수를 이용해서 현재 위치에서 이동가능한 다음 좌표 배열을 반환받는다.
    const nextPos = getNextPos(head, tail, newBoard, dist, visit);

    for (const next of nextPos) {
      const {head: nextHead, tail: nextTail} = next;

      // 방문했는지 확인한 후, 방문하지 않은 칸인 경우 visit에 추가하고 queue에 넣어준다.
      if (!visit.has(nextHead.join('') + nextTail.join(''))) {
        visit.add(nextHead.join('') + nextTail.join(''));
        queue.push(next);
      }
    }
  }
};

// params: (head 좌표, tail 좌표, board, 움직인 거리)
const getNextPos = ([x1, y1], [x2, y2], board, dist) => {
  const arr = [];
  const dir = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];
  dir.forEach(([X, Y]) => {
    const head = [x1 + X, y1 + Y];
    const tail = [x2 + X, y2 + Y];

    // 상, 하, 좌, 우 4방향으로 움직였을 때 이동할 수 있다면 arr에 추가해준다.
    if (board[head[0]][[head[1]]] === 0 && board[tail[0]][[tail[1]]] === 0)
      arr.push({head, tail, dist: dist + 1});
  });

  const rotate = [1, -1];
  rotate.forEach((value) => {
    if (x1 === x2) {
      //가로로 위치한 경우
      if (board[x1 + value][y1] === 0 && board[x2 + value][y2] === 0) {
        arr.push({head: [x1, y1], tail: [x1 + value, y1], dist: dist + 1});
        arr.push({head: [x2 + value, y2], tail: [x2, y2], dist: dist + 1});
      }
    } else {
      // 세로로 위치한 경우
      if (board[x1][y1 + value] === 0 && board[x2][y2 + value] === 0) {
        arr.push({head: [x1, y1], tail: [x1, y1 + value], dist: dist + 1});
        arr.push({head: [x2, y2 + value], tail: [x2, y2], dist: dist + 1});
      }
    }
  });
  return arr;
};
