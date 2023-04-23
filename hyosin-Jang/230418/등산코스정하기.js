// 휴식 없이 이동해야 하는 시간 중 가장 긴 시간: intensity
// 출입구 중 하나 > 산봉오리 중 한 곳만 방문 > 다시 원래 출입구 (중간에 다른 출입구 방문하면 안됨)

// 각 코스 별로 intensity가 최대가 되는 등산코스르 구하고 (출입구 -> 산봉오리)
// 이 코스 중에서 Intensity가 최소인 경로 구하기
// 참고: https://chamdom.blog/pg3-118669/

function solution(n, paths, gates, summits) {
  const isSummit = new Set(summits);

  // 그래프 초기화
  const graph = Array.from({length: n + 1}, () => []);
  for (const [a, b, c] of paths) {
    graph[a].push([b, c]);
    graph[b].push([a, c]);
  }

  for (const gate of gates) {
    queue.add([gate, 0]); // 출입구 추가: [노드, 가중치]
    visited[gate] = 0; // 시작 정점의 intensity는 0으로 초기화
  }

  while (queue.size()) {
    // 우선순위 큐에서 현재까지 가장 가까운 정점 가져오기
    const [node, intensity] = queue.poll();

    // 현재 노드가 산봉우리거나 이미 방문한 노드의 Intensity보다 크다면 continue
    if (isSummit.has(node) || visited[node] < intensity) {
      continue;
    }

    // 인접 노드 탐색
    for (const [nextNode, weight] of graph[node]) {
      // 최대값 비교
      const newIntensity = Math.max(intensity, weight);
      if (newIntensity < visited[nextNode]) {
        visited[nextNode] = newIntensity;
        queue.add([nextNode, newIntensity]);
      }
    }
  }

  let answer = [0, Infinity];
  summits.sort((a, b) => a - b); // 오름차순 정렬
  for (const summit of summits) {
    // intensity가 가장 작은거 갱신
    if (visited[summit] < answer[1]) answer = [summit, visited[summit]];
  }

  return answer;
}
paths = [
  [1, 2, 3],
  [2, 3, 5],
  [2, 4, 2],
  [2, 5, 4],
  [3, 4, 4],
  [4, 5, 3],
  [4, 6, 1],
  [5, 6, 1],
];

gates = [1, 3];

summits = [5];

n = 6;

solution(n, paths, gates, summits);
