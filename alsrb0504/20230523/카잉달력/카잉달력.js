const readFileSyncAddress =
  process.platform === "linux" ? "/dev/stdin" : "text.txt";

const input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trimEnd()
  .split("\n");

const answer = [];
const N = Number(input[0]);

for (let i = 1; i <= N; i++) {
  answer.push(solution(i));
}

console.log(answer.join("\n"));

function solution(line) {
  const [M, N, X, Y] = input[line].split(" ").map(Number);

  // 예외 : X와 Y가 같으면 바로 리턴 가능
  if (X === Y) return X;

  // 풀이 방법
  // X를 고정해두고 Y의 값을 M씩 증가시키며 가능한 최소값 찾기.
  // Y를 고정해두고 X의 값을 N씩 증가시키며 앞서 구한 최소값과
  // 이번에 구한 최소값 중 더 작은 값 리턴.

  //  min: X 고정시의 최소값을 저장할 변수
  let min = Infinity;
  let cnt = X;

  while (cnt <= N * M) {
    cnt += M;
    const rest = cnt % N === 0 ? N : cnt % N;

    if (rest === Y) {
      min = cnt;
      break;
    }
  }

  cnt = Y;

  while (cnt <= N * M) {
    cnt += N;
    const rest = cnt % M === 0 ? M : cnt % M;

    if (rest === X) {
      return Math.min(cnt, min);
    }
  }

  return -1;
}
