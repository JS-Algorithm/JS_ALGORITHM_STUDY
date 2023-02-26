const readFileSyncAddress = "/dev/stdin";
const input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trimEnd()
  .split("\n");

const [N, _] = input[0].split(" ").map(Number);

// 필요한 line의 수 만큼 스택 생성
const stacks = Array.from({ length: N + 1 }, () => []);

// 기본적으로 주어진 입력 만큼 한 번씩 눌러야 한다 가정.
let answer = N;

for (let i = 1; i <= N; i++) {
  const [line, fret] = input[i].split(" ").map(Number);

  // 현재 line의 스택에 있는 값보다 더 작은 값을 입력해야 하는 경우.
  // pop()하고 카운트 증가.
  if (stacks[line].length) {
    while (stacks[line].length && stacks[line].at(-1) > fret) {
      stacks[line].pop();
      answer++;
    }
  }

  // 현재 line의 스택의 top과 동일한 값을 입력해야 하는 경우.
  // 누르고 있는 상태를 유지하면 되므로 카운트 감소.
  if (stacks[line].length && stacks[line].at(-1) === fret) {
    answer--;
  }
  // 그렇지 않은 경우
  // stack에 값 추가.
  else {
    stacks[line].push(fret);
  }
}

console.log(answer);
