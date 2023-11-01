function solution(N, road, K) {
  let graph = Array.from({length: N + 1}, () => []);
  for (let i = 1; i <= N; i++) {
    road.map((el) => {
      let [from, to, dist] = el;
      if (from === i) {
        graph[i].push({to: to, dist: dist});
      } else if (to === i) {
        graph[i].push({to: from, dist: dist});
      }
    });
  }
  // 1번 노드와 각 노드까지 최단 경로를 저장하는 배열 생성
  const dist = Array.from({length: N + 1}, () => Infinity);

  // 큐 생성 및 1번 노드에 대한 정보 저장
  const queue = [{to: 1, dist: 0}];

  // 1번 노드의 거리는 0 으로 설정
  dist[1] = 0;

  // 큐가 빌 때까지 반복
  while (queue.length) {
    // 큐에서 방문할 노드 꺼내기
    const {to} = queue.pop();

    // 방문한 노드까지 이동한 거리 + 다음 방문 노드까지 거리를
    // 기존에 저장된 값과 비교해서 갱신
    graph[to].forEach((next) => {
      const acc = dist[to] + next.dist;
      if (dist[next.to] > acc) {
        dist[next.to] = acc;
        // 최단 경로가 되는 노드는 큐에 추가
        queue.push(next);
      }
    });
  }
  return dist.filter((el) => el <= K).length;
}
