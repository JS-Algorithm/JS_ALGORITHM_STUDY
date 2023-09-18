const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const N = Number(input.shift());
  const board = Array.from({length: N}, () => Array(N).fill(0));
  const K = Number(input.shift());
  for (let i = 0; i < K; i++) {
    const [x, y] = input
      .shift()
      .split(' ')
      .map((v) => Number(v) - 1);
    board[x][y] = 1; // 사과 존재하는 칸 1로 표시
  }
  const L = Number(input.shift());
  const dirChanges = new Map();
  for (let i = 0; i < L; i++) {
    const change = input
      .shift()
      .split(' ')
      .map((v, i) => (i === 0 ? Number(v) : v));
    dirChanges.set(change[0], change[1]);
  }

  board[0][0] = -1; // 뱀이 존재하는 칸 -1로 표시
  const snake = [];
  snake.push([0, 0]);

  let currentDir = [0, 1]; // 오른쪽
  let time = 0;
  while (1) {
    if (dirChanges.has(time)) {
      // 방향을 바꾼 시간인 경우
      currentDir = changeDir(dirChanges.get(time), currentDir); // 다음 방향 설정
    }
    time++;
    const [x, y] = snake.at(-1); // 현재 머리 위치
    const [dx, dy] = currentDir;
    const [nx, ny] = [x + dx, y + dy]; // 다음에 머리가 이동할 위치
    if (nx < 0 || nx >= N || ny < 0 || ny >= N || board[nx][ny] === -1) {
      // 만약에 이동한 머리의 위치가 이동할 수 없는 칸일 경우
      console.log(time);
      return;
    }
    if (board[nx][ny] !== 1) {
      const [i, j] = snake.shift(); // 꼬리 자르기
      board[i][j] = 0;
    }
    // 머리 늘리기
    snake.push([nx, ny]);
    board[nx][ny] = -1;
  }

  function changeDir(dir, currentDir) {
    const [x, y] = currentDir;
    if (dir === 'D') {
      // 오른쪽으로 90도 회전
      if (y === 1 && x === 0) {
        return [1, 0];
      }
      if (y === -1 && x === 0) {
        return [-1, 0];
      }
      if (y === 0 && x === 1) {
        return [0, -1];
      }
      if (y === 0 && x === -1) {
        return [0, 1];
      }
    }
    if (dir === 'L') {
      // 왼쪽으로 90도 회전
      if (y === 1 && x === 0) {
        return [-1, 0];
      }
      if (y === -1 && x === 0) {
        return [1, 0];
      }
      if (y === 0 && x === 1) {
        return [0, 1];
      }
      if (y === 0 && x === -1) {
        return [0, -1];
      }
    }
  }
}

solution(input);

// 사과 존재 => 꼬리 그대로
// 사과 존재 x => 몸 줄인다(꼬리 자름)
