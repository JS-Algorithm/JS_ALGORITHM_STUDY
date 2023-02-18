// 투 포인터를 이용한 풀이

// const readFileSyncAddress = "/dev/stdin";
const readFileSyncAddress = "text.txt";

const input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trimEnd()
  .split("\n");

const tc = Number(input[0]);
const answer = [];

for (let i = 0; i < tc; i++) {
  answer.push(solution(i * 3 + 1));
}

console.log(answer.join("\n"));

function solution(l) {
  const commands = input[l].trimEnd().split("");
  const N = Number(input[l + 1]);
  const str = input[l + 2].trimEnd();
  const arr = str
    .slice(1, str.length - 1)
    .split(",")
    .map(Number);

  // 예외처리 : 원소가 없는 경우
  if (N === 0) {
    arr.pop();

    // 원소가 없는데 삭제 명령이 있다면 에러 발생.
    if (commands.includes("D")) return "error";
  }

  // 투 포인터를 위한 left, right 변수 선언 (배열의 양 끝 가리킴).
  let left = 0;
  let right = N - 1;
  let isReverse = false;

  for (let i = 0; i < commands.length; i++) {
    const comd = commands[i];

    if (comd === "R") {
      isReverse = !isReverse;
    }
    // 2. 삭제 명령
    else {
      // 2-1. 더이상 삭제할 수 없을 경우 => error 발생.
      if (left > right) return "error";

      // 2-2. 배열이 뒤집혔다면 => 뒤의 원소 삭제.
      if (isReverse) {
        right--;
      }
      // 2-3. 그렇지 않다면 => 앞의 원소 삭제.
      else {
        left++;
      }
    }
  }

  const result = arr.slice(left, right + 1);

  return `[${isReverse ? result.reverse().join(",") : result.join(",")}]`;
}
