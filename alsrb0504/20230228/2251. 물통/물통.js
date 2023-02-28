// const readFileSyncAddress = "/dev/stdin";
const readFileSyncAddress = "text.txt";

const input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trimEnd()
  .split("\n");

const [A, B, C] = input[0].split(" ").map(Number);
const visited = Array.from({ length: A + 1 }, () =>
  Array.from({ length: B + 1 }, () => new Array(C + 1).fill(false))
);

// 중복방지와 답을 저장할 Set
const answer = new Set();
answer.add(C);

bfs();

// 배열로 변환하여 정렬 후, 출력
console.log([...answer].sort((a, b) => a - b).join(" "));

function bfs() {
  // 방문처리 로직을 해주는 함수
  function move(ra, rb, rc) {
    visited[ra][rb][rc] = true;
    q.push([ra, rb, rc]);

    // 옮긴 후, A가 0일 경우 answer에 현재 C의 양 저장.
    if (ra === 0) answer.add(rc);
  }

  const q = [[0, 0, C]];
  visited[0][0][C] = true;

  while (q.length) {
    const [a, b, c] = q.shift();

    // 1. A에 물이 있는 경우
    if (a !== 0) {
      // 1-1. A 전체를 B로 옮길 수 있는 경우
      if (a + b <= B && !visited[0][a + b][c]) {
        move(0, a + b, c);
      }

      // 1-2. A의 일부를 B로 ...
      if (a + b > B) {
        const rest = B - b;

        if (!visited[a - rest][B][c]) {
          move(a - rest, B, c);
        }
      }

      // 1-3. A 전체를 C로 ...
      if (a + c <= C && !visited[0][b][a + c]) {
        move(0, b, a + c);
      }

      // 1-4. A 일부를 C로 ...
      if (a + c > C) {
        const rest = C - c;

        if (!visited[a - rest][b][C]) {
          move(a - rest, b, C);
        }
      }
    }

    if (b !== 0) {
      if (b + a <= A && !visited[b + a][0][c]) {
        move(b + a, 0, c);
      }

      if (b + a > A) {
        const rest = A - a;

        if (!visited[A][b - rest][c]) {
          move(A, b - rest, c);
        }
      }

      if (b + c <= C && !visited[a][0][b + c]) {
        move(a, 0, b + c);
      }

      if (b + c > C) {
        const rest = C - c;

        if (!visited[a][b - rest][C]) {
          move(a, b - rest, C);
        }
      }
    }

    if (c !== 0) {
      if (c + a <= A && !visited[c + a][0][0]) {
        move(c + a, b, 0);
      }

      if (c + a > A) {
        const rest = A - a;

        if (!visited[A][b][c - rest]) {
          move(A, b, c - rest);
        }
      }

      if (c + b <= B && !visited[a][c + b][0]) {
        move(a, c + b, 0);
      }

      if (c + b > B) {
        const rest = B - b;

        if (!visited[a][B][c - rest]) {
          move(a, B, c - rest);
        }
      }
    }
  }
}
