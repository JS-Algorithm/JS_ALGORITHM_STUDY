// 그래프를 2차원 배열로 구현한 후, DFS 탐색을 통해 모든 노드를 순회해본다.
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trimEnd()
  .split('\n');

for (let index = 1; index < input.length; ) {
  const [N, M] = input[index].trimEnd().split(' ').map(Number);
  const graph = Array.from({length: N + 1}, () => new Set());

  input.slice(index + 1, index + M + 1).map((edge) => {
    const [a, b] = edge.split(' ').map(Number);
    graph[a].add(b);
    graph[b].add(a);
  });

  const visited = new Array(N + 1).fill(false);
  const result = dfs(1, 0);
  console.log(result);
  index += M + 1;

  function dfs(node, movement) {
    visited[node] = true;
    for (const next of graph[node].values()) {
      if (!visited[next]) {
        movement = dfs(next, movement + 1);
      }
    }
    return movement;
  }
}
