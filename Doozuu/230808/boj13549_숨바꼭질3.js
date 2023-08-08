const input = require('fs').readFileSync('dev/stdin').toString().trim();

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
