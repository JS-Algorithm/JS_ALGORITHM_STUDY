// 실패 1.
// 그리디 방식으로 리프 노드와 연결된 등대들을 on
// 이후 간선들을 하나씩 확인하면서 [u, v]가 모두 켜지지 않았을 경우,
// u와 v에 연결된 등대수가 더 많은 것의 불을 킴
// (u와 v에 연결된 등대수가 같은 경우, lights은 u를, light2는 v를 킴)
// 반례를 찾지 못했지만.. 복잡한 트리의 경우 그리디가 보장되지 않는듯
function solution(n, lighthouse) {
  const graph = Array.from({ length: n + 1 }, () => []);
  lighthouse.forEach((val) => {
    const [u, v] = val;
    graph[u].push(v);
    graph[v].push(u);
  });

  const sizes = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    sizes[i] = graph[i].length;
  }

  const lights = new Set();
  const lights2 = new Set();

  lighthouse.forEach((el) => {
    const [u, v] = el;

    if (sizes[v] === 1 || sizes[u] === 1) {
      if (sizes[v] === 1) lights.add(u);
      else lights.add(v);

      if (sizes[v] === 1) lights2.add(u);
      else lights2.add(v);
    }
  });

  lighthouse.forEach((el) => {
    const [u, v] = el;

    // 양 끝이 다 off 상태인 경우
    if (!lights.has(u) && !lights.has(v)) {
      if (sizes[u] >= sizes[v]) lights.add(u);
      else lights.add(v);
    }

    // 양 끝이 다 off 상태인 경우
    if (!lights2.has(u) && !lights2.has(v)) {
      if (sizes[u] > sizes[v]) lights2.add(u);
      else lights2.add(v);
    }
  });

  console.log(lights);
  console.log(lights2);

  return lights.size > lights2.size ? lights2.size : lights.size;
  // return answer;
}

// 실패 2.
// dfs : while로 구현
// 콜스택 초과는 해결할 수 있지만
// 이전 부모 노드의 상태를 저장하도록 구현하지 못함..
function dfs(curr) {
  const stack = [curr];
  let result = 0;
  // visited[curr] = true;

  while (stack.length) {
    const current = stack.pop();
    console.log(stack);

    if (!visited[current]) {
      visited[current] = true;

      console.log(`current = ${current}`);

      let childTurn = 0;

      for (let child of graph[current]) {
        if (visited[child]) continue;
        // console.log(`curr = ${curr}, child = ${child}`);
        if (graph[child].length === 1) childTurn++;
        else stack.push(child);

        // visited[child] = true;
        // childTurn += dfs(child);
        // visited[child] = false;
      }

      if (childTurn > 0) {
        result++;
      }
    }
  }

  // console.log(result);
  return result;
}
