function solution(n, lighthouse) {
  const visited = new Array(n + 1).fill(false);
  let result = 0;

  while (lighthouse.length) {
    const matrix = Array.from({length: n + 1}, () => []);

    for (const [a, b] of lighthouse) {
      matrix[a].push(b);
      matrix[b].push(a);
    }

    // 각 말단 노드를 순회하여, 해당 노드가 아직 미방문된 상태라면 방문 처리를 진행한다.
    // 만약 해당 말단 노드와 연결된 등대의 간선이 1개라면 말단 노드가 소거된 이후에 불이 켜진 등대도 조건문에 해당된다.
    // 따라서 실질적으로는 연결된 등대만 켜지고 이후의 등대는 켜지지 않도록 처리를 해준 것이다. (진짜 이렇게 풀어야 하는구나..)
    matrix
      .filter((el) => el.length === 1)
      .forEach(([target]) => {
        if (!visited[target]) {
          visited[target] = true;
          result += matrix[target].length !== 1 ? 1 : 0.5;
        }
      });

    // 간선이 1개인 등대를 모두 제거하고, 반복을 재개한다.
    lighthouse = lighthouse.filter(([a, b]) => !visited[a] && !visited[b]);
  }

  return result;
}
