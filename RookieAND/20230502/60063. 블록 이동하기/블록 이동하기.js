function solution(board) {
  const N = board.length;
  const goal = `${N}${N}`;
  const queue = [[[1, 1], [1, 2], 0]];

  // 좌표 값을 문자열로 치환하여 (y1, x1, y2, x2) 방문 여부를 체크한다.
  const visit = new Set(['1112']);

  // 상하좌우 테두리를 만들기 위해서 N + 2 만큼의 영역을 초기에 생성한다.
  const new_board = Array.from({length: N + 2}, () => new Array(N + 2).fill(1));
  // 상하좌우 테두리를 제외한 나머지는 원래의 board 에 맞게 채우면 된다.
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      new_board[i + 1][j + 1] = board[i][j];
    }
  }

  // BFS 탐색 시작, queue가 빌 때까지 경로를 탐색한다.
  while (queue.length) {
    const [left, right, count] = queue.shift();

    // 로봇이 걸친 좌표 중 한 곳이라도 (N, N) 에 도달했다면 즉시 count를 return 한다.
    if (left.join('') === goal || right.join('') === goal) return count;

    // 그렇지 않을 경우, 이동 가능한 다음 위치를 탐색하는 함수를 실행시킨다.
    const nextPosition = getNextPosition(left, right, new_board);
    for (const next of nextPosition) {
      const [nextLeftLoc, nextRightLoc] = next;
      const currentLoc = `${nextLeftLoc.join('')}${nextRightLoc.join('')}`;
      if (!visit.has(currentLoc)) {
        queue.push([nextLeftLoc, nextRightLoc, count + 1]);
        visit.add(currentLoc);
      }
    }
  }
}

const getNextPosition = (left, right, board) => {
  // 이동 가능한 좌표를 담은 배열 result
  const result = [];
  const direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const [leftY, leftX] = left;
  const [rightY, rightX] = right;

  for (const [dy, dx] of direction) {
    const [nextLeftY, nextLeftX] = [leftY + dy, leftX + dx];
    const [nextRightY, nextRightX] = [rightY + dy, rightX + dx];

    if (!board[nextLeftY][nextLeftX] && !board[nextRightY][nextRightX]) {
      result.push([
        [nextLeftY, nextLeftX],
        [nextRightY, nextRightX],
      ]);
    }
  }

  // 만약 로봇이 가로로 놓여 있다면, 로봇을 기준으로 위 아래 여유 공간을 체크해야 한다.
  if (leftY === rightY) {
    for (const dy of [1, -1]) {
      // 만약 아래 혹은 위 2칸에 대해서 여유 공간이 존재한다면, 두 개의 회전 케이스를 추가한다.
      if (!board[leftY + dy][leftX] && !board[rightY + dy][rightX]) {
        result.push([
          [leftY + dy, leftX],
          [leftY, leftX],
        ]);
        result.push([
          [rightY + dy, rightX],
          [rightY, rightX],
        ]);
      }
    }
  }
  // 만약 로봇이 세로로 놓여 있다면, 로봇을 기준으로 좌우 여백 공간을 체크한다.
  else {
    // 만약 왼쪽 혹은 오른쪽 2칸에 대해서 여유 공간이 존재한다면, 두 개의 회전 케이스를 추가한다.
    for (const dx of [1, -1]) {
      if (!board[leftY][leftX + dx] && !board[rightY][rightX + dx]) {
        result.push([
          [leftY, leftX + dx],
          [leftY, leftX],
        ]);
        result.push([
          [rightY, rightX + dx],
          [rightY, rightX],
        ]);
      }
    }
  }
  return result;
};
