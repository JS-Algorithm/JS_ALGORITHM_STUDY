const input = require('fs').readFileSync('ex.txt').toString().trim().split('\n');

const [col, row] = input.shift().split(' ').map(Number);
const board = input.map((i) => i.split(' ').map(Number));
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
let ans = 0;

// 바이러스 퍼뜨리고 안전 영역 크기 구하기
const countingSafeZone = (arr) => {
  let cnt = 0;
  let queue = [];

  // 위험 영역 위치 담기
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (arr[i][j] === 2) queue.push([i, j]);
    }
  }

  // 위험 영역 퍼뜨리기 BFS
  while (queue.length) {
    const [curX, curY] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [curX + dx[i], curY + dy[i]];

      if (nx >= 0 && nx < col && ny >= 0 && ny < row && arr[nx][ny] === 0) {
        arr[nx][ny] = 2;
        queue.push([nx, ny]);
      }
    }
  }

  // 안전 영역 크기 구하기
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (arr[i][j] === 0) {
        cnt += 1;
      }
    }
  }

  return cnt;
};

const dfs = (cnt) => {
  if (cnt === 3) {
    let arr = board.map((v) => [...v]); // 깊은 복사해서 원본배열이 변하지 않도록
    let cntOfSafe = countingSafeZone(arr); // 안전 영역 크기 세기

    ans = Math.max(ans, cntOfSafe); // 최대 영역 크기 갱신
    return;
  }

  // 벽 세우기
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (board[i][j] === 0) {
        board[i][j] = 1;
        dfs(cnt + 1);
        board[i][j] = 0;
      }
    }
  }
};

dfs(0);
console.log(ans);
