// 1. 선생님의 경우 상하좌우로 장애물에 막히기 전까지의 경로를 파악할 수 있다.
// 2. 3개의 장애물은 완전 탐색으로 배치해야 한다. N이 6까지라 그렇게 크지 않다.
// 3. 최대 34개의 면적 중에서 3개의 좌표를 선택하는 조합은 34C3 => 6,732가지이므로 그렇게 크지 않다.

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trimEnd()
  .split('\n');

const N = input[0];
const matrix = input.slice(1).map((row) => row.trimEnd().split(' '));
const direction = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

const teacherPos = [];
const studentPos = [];
const emptyPlace = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (matrix[i][j] === 'S') studentPos.push([i, j]);
    else if (matrix[i][j] === 'T') teacherPos.push([i, j]);
    else emptyPlace.push([i, j]);
  }
}

function getCombination(arr, n) {
  if (n === 1) return arr.map((el) => [el]);
  const result = [];

  arr.forEach((fixed, idx, origin) => {
    const rest = origin.slice(idx + 1);
    const combis = getCombination(rest, n - 1);
    const attached = combis.map((combi) => [fixed, ...combi]);
    result.push(...attached);
  });

  return result;
}

// 빈 배열을 3개 뽑아서 나온 모든 조합
const possibleComb = getCombination(emptyPlace, 3);

for (const comb of possibleComb) {
  let isCatched = false;
  // 3개의 좌표에 대해서 벽을 세운다.
  comb.map(([i, j]) => (matrix[i][j] = 'W'));
  // 선생님들 중 한 명이라도 학생을 잡았다면, 잡혔음을 체크한다.
  for (const [teacherY, teacherX] of teacherPos) {
    if (checkTeacherCanCatchStudent(teacherY, teacherX)) {
      isCatched = true;
    }
  }
  // 만약 잡히지 않은 케이스가 있다면 즉시 프로그램을 종료한다.
  if (!isCatched) {
    console.log('YES');
    return;
  }
  // 순회를 마쳤으면 다시 벽을 원래대로 돌려놔야 한다.
  comb.map(([i, j]) => (matrix[i][j] = 'X'));
}

// 모든 경우의 수를 순회했음에도 찾지 못했다면 No 출력.
console.log('NO');

function checkTeacherCanCatchStudent(y, x) {
  for (const [dy, dx] of direction) {
    let current = 1;
    while (true) {
      const [ny, nx] = [y + dy * current, x + dx * current];
      // 경계 면에 부딪혔다면 더 이상의 탐색을 종료해야 한다.
      if (ny < 0 || nx < 0 || ny >= N || nx >= N) break;
      // 만약 벽을 만났다면 다음 방향 탐색을 진행해야 한다.
      // 만약 다른 선생님을 만났다면 이후의 탐색은 진행하지 않아도 된다.
      if (matrix[ny][nx] === 'W' || matrix[ny][nx] === 'T') break;
      // 학생을 만났다면 선생님이 학생을 잡을 수 있다는 의미다.
      if (matrix[ny][nx] === 'S') return true;
      current += 1;
    }
  }
  // 모든 탐색을 진행했음에도 학생을 찾지 못했다면 false.
  return false;
}
