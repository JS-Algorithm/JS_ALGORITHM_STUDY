// 항상 양의 수 > 늑대의 수 만족해야 함
// 참고: https://velog.io/@tnehd1998/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%96%91%EA%B3%BC-%EB%8A%91%EB%8C%80-JavaScript

function solution(info, edges) {
  var answer = 0;

  let n = info.length; // 노드 개수
  let tree = Array.from({length: n}, () => []);

  edges.forEach((edge) => {
    const [start, end] = edge;
    tree[start].push(end);
  });

  // dfs 탐색 문제
  // 1. 매 경우마다 sheep과 answer 비교 후 최댓값으로 answer 갱신
  // 2. 양 === 늑대인 경우 종료
  // 3. 현재 노드에서 이동 가능한 노드를 next에 추가
  // 4. 모든 경로 탐색 후 최댓값인 answer 반환

  const dfs = (node, sheep, wolf, next) => {
    // 현재 노드, 현재 노드까지 양, 늑대 마리 수, 가능한 노드 배열

    let newNext = [...next];
    let currentIndex = newNext.indexOf(node);

    if (info[node]) {
      wolf++;
    } else sheep++;

    answer = Math.max(answer, sheep);

    if (sheep === wolf) return; // 모든 경우가 (양 === 늑대)라면 아무데도 갈 수 없어서 탐색 종료됨

    newNext.push(...tree[node]);
    newNext.splice(currentIndex, 1); //현재 노드는 방문했으니까 자르기

    // 완전탐색
    for (const nextNode of newNext) {
      dfs(nextNode, sheep, wolf, newNext);
    }
  };

  dfs(0, 0, 0, [0]); // 0번 노드에서 시작

  return answer;
}

let info = [0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1];
let edges = [
  [0, 1],
  [1, 2],
  [1, 4],
  [0, 8],
  [8, 7],
  [9, 10],
  [9, 11],
  [4, 3],
  [6, 5],
  [4, 6],
  [8, 9],
];

solution(info, edges);
