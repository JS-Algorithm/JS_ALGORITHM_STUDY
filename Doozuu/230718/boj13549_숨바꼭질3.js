const input = require('fs').readFileSync('ex.txt').toString().trim();

// 시간초과를 막기 위해 덱 사용해야 함.
const sol = (input) => {
  const [N, K] = input.split(' ').map(Number);
  const visit = Array.from({length: 100100}, () => 0);

  function bfs(N) {
    const queue = [[N, 0]];
    visit[N] = 1;
    while (queue.length) {
      const [cur, time] = queue.shift();
      if (cur === K) return time;
      for (next of [cur * 2, cur - 1, cur + 1]) {
        if (!visit[next] && next >= 0 && next <= 100000) {
          visit[next] = 1;
          if (next == cur * 2) {
            queue.unshift([next, time]); // 2X로 이동할 때는 시간을 증가시키지 않고, 우선순위를 반영하여 큐의 맨 앞에 넣어준다.
          } else {
            queue.push([next, time + 1]); // X-1, X+1로 이동할 때는 시간을 증가시키고, 큐에 순서대로 넣어준다.
          }
        }
      }
    }
  }
  return bfs(N);
};

console.log(sol(input));

// 큐로 했다가 시간초과로 틀린 풀이
// const input = require('fs')
//   .readFileSync('ex.txt')
//   .toString()
//   .trim()
//   .split(' ')
//   .map((el) => +el);

// const [N, K] = input;
// const visited = Array(100100).fill(false); // 방문 여부 나타낼 배열
// const choice = [-1, 1];

// function solution(cur) {
//   let queue = [[cur, 0]];

//   while (queue.length) {
//     const [cur, move] = queue.shift();
//     if (visited[cur]) continue; // 이미 방문했으면 패스
//     if (cur === K) return move;
//     visited[cur] = true; // 방문 체크

//     for (let i = 0; i < 2; i++) {
//       const next = cur + choice[i];
//       queue.push([next, move + 1]);
//     }
//     const jump = cur * 2;
//     queue.push([jump, move]);
//   }
// }

// const answer = solution(N);

// console.log(answer);
