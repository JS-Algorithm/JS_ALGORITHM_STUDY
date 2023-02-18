const readFileSyncAddress = "/dev/stdin";
const input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trimEnd()
  .split("\n");

const N = Number(input[0]);

// 건물의 높이 정보 : [ ..., Infinity ]
// 마지막 건물의 처리를 위해 Infinity 추가.
const nums = input.slice(1, 1 + N).map(Number);
nums.push(Infinity);

// 높이와 건물 번호를 저장하는 스택.
// 항상 높이가 오름차순으로 큰 상태를 유지해야 함.!
// stack: [ [height, idx], [height, idx], ...]
const stack = [];

let answer = 0;

nums.forEach((height, idx) => {
  // 1. 스택이 비었을 경우 : 건물 추가.
  if (stack.length === 0) {
    stack.push([height, idx]);
  }
  // 2. 스택에 건물이 존재할 경우.
  else {
    let top = stack.at(-1)[0];

    // 2-1. 현재 스택의 top의 건물 높이보다 현재 건물의 높이 가 작으면
    // 스택에 건물 추가.
    if (top > height) {
      stack.push([height, idx]);
    }
    // 2-2. 현재 스택의 top의 건물 높이보다 현재 건물의 높이가 크거나 같다면
    // 2-1번 상황이 될 때까지 stack의 원소를 pop().
    else {
      while (top <= height) {
        const [_, top_idx] = stack.pop();

        // 현재 idx - 스택 top_idx - 1 한 값이 내려다 볼 수 있는 건물의 수.
        answer += idx - top_idx - 1;

        // 단, 스택에 더이상 건물이 존재하지 않는다면 break.
        if (stack.length) top = stack.at(-1)[0];
        else break;
      }

      // 현재 건물을 스택에 push 함으로서 스택의 탑이 최대값 유지.
      stack.push([height, idx]);
    }
  }
});

console.log(answer);
