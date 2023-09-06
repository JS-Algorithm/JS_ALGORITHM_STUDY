const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const [R, C] = input[0].split(' ').map(Number);
  const board = input.slice(1);
  let max = 0;
  // 방문한 알파벳을 아스키코드로 변환해서 배열에 기록
  const visited = Array(91).fill(false);
  visited[board[0][0].charCodeAt()] = true;
  const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  function DFS(x, y, visited, count) {
    let hasNextSquare = false; // 다음으로 갈 수 있는 칸이 존재하는지 여부 플래그
    for (const [dx, dy] of dir) {
      const [nx, ny] = [x + dx, y + dy];
      if (nx < 0 || ny < 0 || nx >= R || ny >= C) {
        // 보드 밖으로 벗어나는 경우
        continue;
      }
      if (visited[board[nx][ny].charCodeAt()]) {
        // 이미 방문한 알파벳인 경우
        continue;
      }
      hasNextSquare = true;
      visited[board[nx][ny].charCodeAt()] = true;
      DFS(nx, ny, visited, count + 1);
      visited[board[nx][ny].charCodeAt()] = false;
    }
    if (!hasNextSquare) {
      max = Math.max(count, max);
      return;
    }
  }
  DFS(0, 0, visited, 1);
  console.log(max);
}
solution(input);
