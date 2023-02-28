// const readFileSyncAddress = "/dev/stdin";
const readFileSyncAddress = "text.txt";

const input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trimEnd()
  .split("\n");

const [N, L] = input[0].split(" ").map(Number);
const data = input.slice(1, 1 + N).map((el) => el.split(" ").map(Number));

// 웅덩이 시작점 기준으로 정렬
// 시작점이 같은 경우 => 더 큰 웅덩이 순으로 정렬
// 인덱스를 더 빠르게 확인하기 위해.
data.sort((a, b) => {
  if (a[0] === b[0]) return b[1] - a[1];
  else return a[0] - b[0];
});

// 확인한 지점을 파악할 인덱스 변수
let idx = 0;
let answer = 0;

data.forEach((pos) => {
  const [S, E] = pos;

  // 1. 현재까지 확인한 위치가 웅덩이 시작점보다 작은 경우
  if (idx < S) {
    // 웅덩이 크기만큼 필요한 널판지 구하고
    // 확인 위치(idx)를 웅덩이 끝 + 1로 이동
    const width = E - S;
    const needs = Math.ceil(width / L);
    answer += needs;

    idx = S;
    idx += needs * L;
  }
  // 2. ... 웅덩이 시작점보다는 크지만 끝보다 작은 경우
  else if (idx < E) {
    // 현재 위치에서 웅덩이 끝까지 필요한 만큼 널판지 구하고
    // 확인 위치(idx)를 웅덩이 끝 + 1로 이동
    const width = E - idx;
    const needs = Math.ceil(width / L);
    answer += needs;
    idx += needs * L;
  }
});

console.log(answer);
