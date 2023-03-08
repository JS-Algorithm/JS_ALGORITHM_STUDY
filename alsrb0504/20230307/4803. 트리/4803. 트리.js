// const readFileSyncAddress = "/dev/stdin";
const readFileSyncAddress = 'text.txt';

const input = require('fs')
  .readFileSync(readFileSyncAddress)
  .toString()
  .trimEnd()
  .split('\n');

const ONE = 'There is one tree.';
const NONE = 'No trees.';

const answer = [];
let line = 0;
let cnt = 1;

while (true) {
  const [N, M] = input[line].split(' ').map(Number);

  if (N === 0 && M === 0) break;

  const result = solution(N, M, line);

  if (result === 0) {
    answer.push(`Case ${cnt}: ${NONE}`);
  } else if (result === 1) {
    answer.push(`Case ${cnt}: ${ONE}`);
  } else {
    answer.push(`Case ${cnt}: A forest of ${result} trees.`);
  }

  line += M + 1;
  cnt++;
}

console.log(answer.join('\n'));

// 풀이 방법
// 주어진 간선 정보로 유니온 파인드 실행
// 사이클이 발생한 경우, 따로 Set에 push
// Set에 들어있지 않은 정점의 수(=트리의 개수) 구함
function solution(N, M, L) {
  // 유니온 파인드 배열 생성
  const arr = [...new Array(N + 1).keys()];

  const notTree = new Set();
  const isTree = new Set();

  input.slice(L + 1, L + 1 + M).forEach((el) => {
    const [u, v] = el.split(' ').map(Number);

    // 사이클이 생기거나 || 사이클이 생긴 점과 연결되면
    // notTree Set에 push
    if (isSameParent(u, v) || notTree.has(u) || notTree.has(v)) {
      notTree.add(getParent(u));
      notTree.add(getParent(v));
      notTree.add(u);
      notTree.add(v);
    }

    // 유니온 실행
    union(u, v);
  });

  // 모든 정점을 돌며
  // 유니온 배열[Index]가 notTree에 포함되어 있지 않다면
  // isTree Set에 부모값 삽입.
  for (let i = 1; i <= N; i++) {
    const parent = getParent(arr[i]);

    if (!notTree.has(parent)) {
      isTree.add(parent);
    }
  }

  // 리턴 isTree Set의 사이즈 === 트리 개수
  return isTree.size;

  // 유니온 파인드 관련 함수들
  function getParent(num) {
    if (num === arr[num]) return num;

    arr[num] = getParent(arr[num]);
    return arr[num];
  }

  function union(a, b) {
    const aParent = getParent(a);
    const bParent = getParent(b);

    if (aParent < bParent) arr[bParent] = aParent;
    else arr[aParent] = bParent;
  }

  function isSameParent(a, b) {
    const aParent = getParent(a);
    const bParent = getParent(b);

    if (aParent === bParent) return true;
    else return false;
  }
}
