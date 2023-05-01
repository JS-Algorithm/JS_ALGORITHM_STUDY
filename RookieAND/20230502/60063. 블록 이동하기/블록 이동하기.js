function solution(board) {
  const N = board.length;
  const goal = `${N}${N}`;
  const queue = [[[1, 1], [1, 2], 0]];

  // 좌표 값을 문자열로 치환하여 (y1, x1, y2, x2) 방문 여부를 체크한다.
  const visit = new Set(['1112']);

  const new_board = Array.from({length: N + 2}, () => new Array(N + 2).fill(1));
  // 상하좌우 테두리를 제외한 나머지는 원래의 board 에 맞게 채우면 된다.
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      new_board[i + 1][j + 1] = board[i][j];
    }
  }

  while (queue.length) {
    const [left, right, count] = queue.shift();

    // 로봇이 걸친 좌표 중 한 곳이라도 (N, N) 에 도달했다면 즉시 count를 return 한다.
    if (left.join('') === goal || right.join('') === goal) return count;

    // 그렇지 않을 경우, 이동 가능한 다음 위치를 탐색하는 함수를 실행시킨다.
    const nextPosition = getNextPosition(left, right, new_board);
    for (const next of nextPosition) {
      const [next_left, next_right] = next;
      const key = next_left.join('') + next_right.join('');
      if (!visit.has(key)) {
        queue.push([next_left, next_right, count + 1]);
        visit.add(key);
      }
    }
  }
}

const getNextPosition = (left, right, board) => {
  // 이동 가능한 좌표를 담은 배열 result
  const result = [];
  // 0번째 인덱스가 y 값이고, 1번째 인덱스가 x 값임을 명시하기 위한 상수
  const X = 1,
    Y = 0;
  const moves = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  // 상하좌우 이동이 가능한지 먼저 체크하고, 이동이 가능한 것들만 result에 넣는다.
  for (const move of moves) {
    const [dy, dx] = move;
    const next_left = [left[Y] + dy, left[X] + dx];
    const next_right = [right[Y] + dy, right[X] + dx];

    if (
      board[next_left[Y]][next_left[X]] === 0 &&
      board[next_right[Y]][next_right[X]] === 0
    ) {
      result.push([next_left, next_right]);
    }
  }

  // 앞 뒤, 좌 우를 구분 짓는 요소 toward
  const toward = [-1, 1];

  // Y 좌표가 같다면 로봇이 가로로 위치해 있다는 의미이다.
  if (left[Y] === right[Y]) {
    for (const dy of toward) {
      // 현재 로봇을 기점으로 아래 두 좌표가 비었는지, 위 두 좌표가 비었는지를 체크한다.
      // 만약 아래 두 좌표가 비었다면 두 개의 회전 경로가 이동 가능하다고 판별된다.
      if (
        board[left[Y] + dy][left[X]] === 0 &&
        board[right[Y] + dy][right[X]] === 0
      ) {
        result.push([left, [left[Y] + dy, left[X]]]);
        result.push([[right[Y] + dy, right[X]], right]);
      }
    }
  } else {
    // 그렇지 않은 경우 로봇이 세로로 위치해 있다는 의미이므로, 두 좌표가 비었는지를 체크한다.
    for (const dx of toward) {
      // 현재 로봇을 기점으로 좌측의 두 좌표가 비었는지, 우측의 두 좌표가 비었는지를 체크한다.
      if (
        board[left[Y]][left[X] + dx] === 0 &&
        board[right[Y]][right[X] + dx] === 0
      ) {
        result.push([[left[Y], left[X] + dx], left]);
        result.push([right, [right[Y], right[X] + dx]]);
      }
    }
  }

  return result;
};