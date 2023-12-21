const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'ex.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input.shift());
const board = input.map((el) => el.split('').map(Number));
const visited = Array.from({length: N}, () => Array(N).fill(false));
const answer = [];
const move = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
let count = 0;

function DFS(i, j) {
  if (i < 0 || j < 0 || i >= N || j >= N || visited[i][j] || !board[i][j]) {
    return;
  }

  count++;
  visited[i][j] = true;

  for (const [dx, dy] of move) {
    const newX = i + dx;
    const newY = j + dy;
    DFS(newX, newY);
  }

  return count;
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (board[i][j] && !visited[i][j]) {
      answer.push(DFS(i, j));
      count = 0;
    }
  }
}

console.log(answer.length);
console.log(answer.sort((a, b) => a - b).join('\n'));
