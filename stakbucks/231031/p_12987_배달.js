function solution(N, road, K) {
  // 그래프
  const graph = Array.from({length: N + 1}, () => []);

  for (const [a, b, c] of road) {
    graph[a].push([b, c]);
    graph[b].push([a, c]);
  }

  // 최단 경로의 길이 기록
  const visited = new Set();

  DFS(1, 0);

  function DFS(idx, curTime) {
    visited[idx] = Math.min(visited[idx], curTime);

    graph[idx].forEach(([nextIdx, time]) => {
      const nextTime = curTime + time;
      if (visited[nextIdx] > nextTime && nextTime <= K) DFS(nextIdx, nextTime);
    });
  }

  // Infinity가 아닌 개수 count
  return visited.reduce((acc, cur) => (cur !== Infinity ? acc + 1 : acc), 0);
}
