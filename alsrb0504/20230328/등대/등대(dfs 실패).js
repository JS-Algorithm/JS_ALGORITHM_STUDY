// 구글에 나와있는 풀이
// 테스트 케이스 9 실패 : js 콜스택 초과
function solution(n, lighthouse) {
  const graph = Array.from({ length: n + 1 }, () => []);
  lighthouse.forEach((val) => {
    const [u, v] = val;
    graph[u].push(v);
    graph[v].push(u);
  });

  let answer = 0;

  const visited = new Array(n + 1).fill(false);

  visited[1] = true;
  dfs(1, 0);
  return answer;

  function dfs(curr) {
    let childTurn = 0;

    for (let child of graph[curr]) {
      if (visited[child]) continue;

      visited[child] = true;
      childTurn += dfs(child);
      visited[child] = false;
    }

    if (childTurn === 0) return 1;

    answer++;
    return 0;
  }
}
