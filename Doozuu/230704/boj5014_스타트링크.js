const input = require('fs').readFileSync('dev/stdin').toString().trim().split(' ');

const [F, S, G, U, D] = input.map(Number);
const visited = Array(F + 1).fill(false); // 방문 여부 나타낼 배열
const upDown = [U, -D];

if (S === G) console.log(0); // 출발점과 도착점이 같으면 바로 0 출력

const bfs = (start, goal) => {
  const queue = [[start, 0]]; // [시작지점, 이동횟수]

  while (queue.length) {
    const [cur, move] = queue.shift(); // [현재지점, 이동횟수]
    if (visited[cur]) continue; // 이미 방문했으면 패스
    if (cur === goal) return move; // 현재지점과 도착점이 같으면 이동횟수 반환
    visited[cur] = true; // 방문 체크

    for (let i = 0; i < 2; i++) {
      const next = cur + upDown[i]; // up/down 적용한 다음 위치

      if (next > 0 && next <= F && !visited[next]) {
        queue.push([next, move + 1]); // 이동위치가 0보다 크고 최고층보다 같거나 작고 방문하지 않았을 경우 푸시(이동횟수 증가)
      }
    }
  }
};

const answer = bfs(S, G);

console.log(answer ? answer : 'use the stairs');
