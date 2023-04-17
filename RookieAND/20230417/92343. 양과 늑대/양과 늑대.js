function solution(info, edges) {
  let answer = 1;
  const length = info.length;
  const tree = Array.from({ length }, () => []);

  // 간선의 정보를 활용하여 트리를 구축한다.
  for (const [parent, child] of edges) {
    tree[parent].push(child);
  }

  const dfs = (current, next, sheep, wolves) => {
    // 현재 노드에 양 (0) 이 있는지, 늑대 (1) 가 있는지를 체크
    info[current] ? wolves++ : sheep++;

    // 이후 현재 보유한 양의 개수를 기반으로 정답 업데이트
    answer = Math.max(answer, sheep);

    // 만약 양과 늑대의 머릿수가 같아지면 더 이상 탐색이 불가능함.
    if (sheep === wolves) return;

    // 현재 노드로부터 하위 노드로 이동이 가능하다면 다음으로 이동할 노드 목록 가져오기.
    const connectedNodeList = [...next];
    const currentIndex = connectedNodeList.indexOf(current);

    // 현재 노드와 이어진 모든 노드들을 가져와 다음으로 이동할 경로에 추가한다.
    // 단, 현재 노드는 다음으로 이동할 경로에서 반드시 제거해줘야 한다.
    if (tree[current].length) {
      connectedNodeList.push(...tree[current]);
    }
    connectedNodeList.splice(currentIndex, 1);

    // 현재 노드와 이어진 다음 경로를 향해 재귀 탐색을 진행한다
    for (const connectedNode of connectedNodeList) {
      dfs(connectedNode, connectedNodeList, sheep, wolves);
    }
  };

  dfs(0, [0], 0, 0);

  return answer;
}
