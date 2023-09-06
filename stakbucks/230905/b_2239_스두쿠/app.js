const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

// 각 행 중복 없게
// 각 열 중복 없게
// 3x3 크기의 보드에 중복 없게

function solution(input) {
  const puzzle = Array.from({length: 9}, (_, i) => input[i].split('').map(Number));
  const targets = []; // 0이 채워진 칸들
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (!puzzle[i][j]) {
        targets.push([i, j]);
      }
    }
  }
  function checkRow(x, y) {
    // 현재 위치한 열에서 가능 한 숫자들 리턴
    const temp = Array(10).fill(true);
    for (const number of puzzle[x]) {
      temp[number] = false;
    }
    return temp;
  }
  function checkColumn(x, y) {
    // 현재 위치한 행에서 가능 한 숫자들 리턴
    const temp = Array(10).fill(true);
    for (let i = 0; i < 9; i++) {
      const number = puzzle[i][y];
      temp[number] = false;
    }
    return temp;
  }
  function check3By3Board(x, y) {
    // 속한 3x3 보드에서 가능한 숫자들 리턴
    const i = Math.floor(x / 3);
    const j = Math.floor(y / 3);
    const temp = Array(10).fill(true);
    for (let k = i * 3; k < i * 3 + 3; k++) {
      for (let t = j * 3; t < j * 3 + 3; t++) {
        temp[puzzle[k][t]] = false;
      }
    }
    return temp;
  }
  function getAvailableNumbers(x, y) {
    // 가능한 숫자 구하기
    const row = checkRow(x, y);
    const col = checkColumn(x, y);
    const _3by3 = check3By3Board(x, y);
    const candidates = [];
    for (let i = 1; i <= 9; i++) {
      if (row[i] && col[i] && _3by3[i]) {
        candidates.push(i);
      }
    }
    return candidates;
  }

  function DFS(i) {
    const [x, y] = targets[i];
    const candidates = getAvailableNumbers(x, y);
    for (const number of candidates) {
      puzzle[x][y] = number;
      if (i === targets.length - 1) {
        // 0이 채워진 칸들 모두 확인한 경우
        console.log(puzzle.map((v) => v.join('')).join('\n'));
        process.exit();
      }
      DFS(i + 1);
      puzzle[x][y] = 0;
    }
  }
  DFS(0);
}

solution(input);
