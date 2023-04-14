// 1. 그래프 순회하면서 empty, student, teacher 좌표 미리 저장
// 2, dfs + 백트래킹으로 empty에서 조합으로 3개 고름
// 2-1. 기저조건일 때, 학생이 모두 숨을 수 있는지 검사

// const env = './input.txt';
const env = '/dev/stdin';
let fs = require('fs');
let input = fs.readFileSync(env).toString().trim().split('\n');

let n = parseInt(input.shift());
let board = input.map((str) => str.split(' '));

let empty = [];
let students = [];
let teachers = [];
let obstacles = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    switch (board[i][j]) {
      case 'X':
        empty.push([i, j]);
        break;
      case 'S':
        students.push([i, j]);
        break;
      case 'T':
        teachers.push([i, j]);
        break;
    }
  }
}

let visit = Array.from({length: n}, () => Array.from({length: n}, () => 0));

let flag = 0; // 최종적으로 학생 숨을 수 있는 경우 있는지 검사하는 플래그

dfs(0, 0, obstacles);

function dfs(cur, cnt) {
  if (cnt == 3) {
    let isValid = isHide(); // 장애물 3개 설치했을 때 학생들 숨을 수 있는지 검사
    if (isValid) flag = 1;
    return;
  }
  if (flag === 1) return; // 더 탐색 안하고 종료시킴

  for (let i = cur; i < empty.length; i++) {
    let [r, c] = empty[i];
    if (!visit[r][c]) {
      board[r][c] = 'O';
      obstacles.push([r, c]);
      dfs(i + 1, cnt + 1, obstacles);
      obstacles.pop([r, c]);
      board[r][c] = 'X'; // 되돌려놓기
      visit[r][c] = 0;
    }
  }
}

function isHide() {
  // 조건만족하면 중지하려고 some 씀
  let notValid = students.some((student) => {
    let [sx, sy] = student;

    // every: return 문의 모든 조건 만족하면 true, 하나라도 만족 못하면 false
    const isValid = teachers.every((teacher) => {
      let [tx, ty] = teacher;
      if (sx === tx) {
        // obstacles에 [sx, min(sy, ty) < oy < max(sy, ty)]인 장애물의 좌표가 존재해야 함
        let isValid = obstacles.filter(
          (obstacle) =>
            obstacle[0] === sx &&
            obstacle[1] > Math.min(sy, ty) &&
            obstacle[1] < Math.max(sy, ty),
        ).length;

        return isValid === 1 ? true : false;
      } else if (sy === ty) {
        let isValid = obstacles.filter(
          (obstacle) =>
            obstacle[1] === sy &&
            obstacle[0] > Math.min(sx, tx) &&
            obstacle[0] < Math.max(sx, tx),
        ).length;
        return isValid === 1 ? true : false;
      } else return true;
    });

    // isValid = false라면
    // 한명의 학생이라도 장애물이 티쳐로부터 공격당하는거 커버못한다 > 이 dfs는 틀려먹음

    // isValid가 하나라도 false라면 즉시 탐색 종료
    return isValid === false;
  });
  return notValid ? false : true;
}

if (flag === 1) {
  console.log('YES');
  return;
} else {
  console.log('NO');
  return;
}
