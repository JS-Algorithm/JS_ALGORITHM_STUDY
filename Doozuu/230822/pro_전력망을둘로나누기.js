function solution(n, wires) {
  const graph = {};
  const answer = [];

  // 연결 상태를 나타내는 그래프 만들기
  for (let wire of wires) {
    let [v1, v2] = wire;
    if (!(v1 in graph)) {
      graph[v1] = [v2];
    } else {
      graph[v1].push(v2);
    }
    if (!(v2 in graph)) {
      graph[v2] = [v1];
    } else {
      graph[v2].push(v1);
    }
  }

  for (let wire of wires) {
    const [start, end] = wire;
    const stack = [...graph[start]];
    const visited = {};
    let count = 1;

    // 끊어진 시작, 끝점은 방문한 것으로 한다.
    visited[start] = true;
    visited[end] = true;

    while (stack.length !== 0) {
      const temp = stack.pop();
      if (!visited[temp]) {
        visited[temp] = true;
        stack.push(...graph[temp]);
        count++;
      }
    }
    answer.push(Math.abs(count * 2 - n));
  }
  return Math.min(...answer);
}
