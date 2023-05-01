// https://joojaewoo.github.io/posts/blockMove/

const solution = (board) => {
  const queue = [];
  const N = board.length;
  const goal = JSON.stringify([N, N]);
  
  // rotate = [1, -1];를 위해 범위 재설정, 추가로 생성된 벽은 1 처리
  const newBoard = Array.from(Array(N + 2), () => Array(N + 2).fill(1)); 
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      newBoard[i + 1][j + 1] = board[i][j];
    }
  }
  
  queue.push({ head: [1, 1], tail: [1, 2], dist: 0 });
  const visit = new Set(JSON.stringify(queue[0].head+queue[0].tail));
  
  while (queue.length > 0) {
      const { head, tail, dist } = queue.shift();
      // 끝까지 도달했으면 dist return
      if (JSON.stringify(head) === goal || JSON.stringify(tail) === goal) return dist;
      // 다음에 탐색 가능한 위치 arr 받아오기
      const nextPos = getNextPos(head, tail, newBoard, dist, visit);
      
      for (const next of nextPos) {
          const { head: nextHead, tail: nextTail } = next;
          if (!visit.has(JSON.stringify(nextHead+nextTail))) { // visit한 위치들인지 확인
              visit.add(JSON.stringify(nextHead+nextTail));
              queue.push(next);
          }
      }
  }
};


const getNextPos = ([x1, y1], [x2, y2], board, dist) => {
  const arr = [];
  const dir = [[-1, 0], [1, 0], [0, 1], [0, -1]];

  // A. 평범하게 상하좌우 이동.
  dir.forEach(([X, Y]) => {
      const head = [x1 + X, y1 + Y];
      const tail = [x2 + X, y2 + Y];
      if (board[head[0]][[head[1]]] === 0 && board[tail[0]][[tail[1]]] === 0)
          arr.push({ head, tail, dist: dist + 1 });
  });

  // B. 로테이션 이동.
  const rotate = [1, -1];
  rotate.forEach((value) => {
        // 1. 가로로 위치한 경우
        if (x1 === x2) {
            // 1-1. head 기준점. tail을 head 위로 올림. 
            // 1-2. tail 기준점. head를 tail 아래로 내림.
            if (board[x1 + value][y1] === 0 && board[x2 + value][y2] === 0) { // 회전하려면 현재 위치의 바로 아래 공간들이 다 비어있어야 함.
                arr.push({ head: [x1, y1], tail: [x1 + value, y1], dist: dist + 1 });
                arr.push({ head: [x2 + value, y2], tail: [x2, y2], dist: dist + 1 });
            }
        }
        // 2. 세로로 위치한 경우
        else {
            // 2-1. head 기준점. tail을 head 오른쪽으로 옮김.
            // 2-2. tail 기준점. head를 tail 오른쪽으로 옮김.
            if (board[x1][y1 + value] === 0 && board[x2][y2 + value] === 0) { // 회전하려면 현재 위치의 바로 오른쪽 공간들이 다 비어있어야 함.
                arr.push({ head: [x1, y1], tail: [x1, y1 + value], dist: dist + 1 });
                arr.push({ head: [x2, y2 + value], tail: [x2, y2], dist: dist + 1 });
            }
        }
  });
  return arr;
};