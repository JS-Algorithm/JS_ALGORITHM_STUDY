// const costs = [
//   [0, 1, 1],
//   [0, 2, 2],
//   [1, 2, 5],
//   [1, 3, 1],
//   [2, 3, 8],
// ];
// const n = 4;

// answer : 159
const costs = [
  [2, 3, 7],
  [3, 6, 13],
  [3, 5, 23],
  [5, 6, 25],
  [0, 1, 29],
  [1, 5, 34],
  [1, 2, 35],
  [4, 5, 53],
  [0, 4, 75],
];
const n = 7;

console.log(solution(n, costs));

function solution(n, costs) {
  let answer = 0;

  // 사이클을 생성하지 않고 하나의 그래프를 만들기 위해
  // 유니온 파인드 사용
  const arr = new Array(n).fill(0);
  for (let i = 1; i < n; i++) arr[i] = i;

  // 비용 순으로 다리 정렬
  costs.sort((a, b) => a[2] - b[2]);

  for (let i = 0; i < costs.length; i++) {
    const [start, dest, cost] = costs[i];

    // start, dest의 유니온이 같다면 이미 갈 수 있는 섬
    if (CheckSameParent(start, dest)) continue;

    // 그렇지 않다면
    // 유니온 과정 진행
    Union(start, dest);

    answer += cost;
  }

  return answer;

  function GetParent(num) {
    if (num === arr[num]) return num;

    // 경로 압축 : 모든 노드가 최상단 노드를 가리키도록 하기 위함
    arr[num] = GetParent(arr[num]);
    return arr[num];
  }

  function Union(a, b) {
    const aParent = GetParent(a);
    const bParent = GetParent(b);

    if (aParent < bParent) {
      arr[bParent] = aParent;
    } else {
      arr[aParent] = bParent;
    }
  }

  function CheckSameParent(a, b) {
    const aParent = GetParent(a);
    const bParent = GetParent(b);

    if (aParent === bParent) return true;
    else return false;
  }
}
