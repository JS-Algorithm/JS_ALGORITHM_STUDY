// BaaaaaaaarkingDog님 비트마스킹 풀이 참고
// https://blog.encrypted.gg/1029
function solution(info, edges) {
  const SIZE = info.length;

  const visited = new Array(1 << 17).fill(false);
  const left = new Array(SIZE).fill(-1);
  const right = new Array(SIZE).fill(-1);

  let answer = 1;

  edges.forEach((el) => {
    const [u, v] = el; // [부모, 자식]

    if (left[u] === -1) left[u] = v;
    else right[u] = v;
  });

  // 0번 노드만 포함된 상태에서 dfs 시작
  dfs(1);

  return answer;

  function dfs(state) {
    // 이미 방문한 상태라면 종료
    if (visited[state]) return;

    visited[state] = true; // 방문처리

    // wolf: 늑대의 수, num: 전체 정점의 수
    let [wolf, num] = [0, 0];
    // 현재 상태에서 방문한 정점의 수와 늑대의 수를 카운트
    // ex. [0, 1, 2, 3, 4]번 방문했다면, state = 11011 => 5개 정점 방문
    // ex. [0, 1, 2, 8]번 방문했다면, state = 10000111 => 4개 정점 방문
    for (let i = 0; i < SIZE; i++) {
      if (state & (1 << i)) {
        num++;
        wolf += info[i];
      }
    }

    // 만약 절반 이상이 늑대라면 종료
    if (2 * wolf >= num) return;

    // 정답 갱신 및 다음 상태 탐색
    answer = Math.max(answer, num - wolf);

    for (let i = 0; i < SIZE; i++) {
      // i번째 비트가 꺼져있다면 패스
      if (!(state & (1 << i))) continue;
      // i번째 비트가 켜져있고 left자식이 있다면
      if (left[i] !== -1) dfs(state | (1 << left[i]));
      // i번째 비트가 켜져있고 right자식이 있다면
      if (right[i] !== -1) dfs(state | (1 << right[i]));
    }
  }
}

const info = [0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1];
const edges = [
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

console.log(solution(info, edges));
