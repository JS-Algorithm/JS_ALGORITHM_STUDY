const readFileSyncAddress = "/dev/stdin";
const input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trimEnd()
  .split("\n");

const [N, length, max_weight] = input[0].split(" ").map(Number);
const trucks = input[1].split(" ").map(Number);

// 다리 상태를 나타내는 큐 : [0, 0, 0, ...]
const q = new Array(length).fill(0);

let answer = 0;
// 현재 다리에 있는 트럭들의 무게 합 : curr_w
let curr_w = 0;

for (let i = 0; i < N; i++) {
  const truck = trucks[i];

  // 다리(큐)의 맨 앞 원소 shift()
  curr_w -= q.shift();

  // 현재 다리의 무게 + 현재 다리에 오를 트럭의 무게가
  // 다리가 버틸 수 있는 무게보다 작거나 같다면 다리(큐)에 push()
  if (curr_w + truck <= max_weight) {
    q.push(truck);
    curr_w += truck;
  }
  // 그렇지 않다면, 다리(큐)에 '0' push() 후
  else {
    i--;
    q.push(0);
  }

  answer++;
}

// 마지막으로 진입한 트럭이 빠져나가는 시간 추가.
answer += length;

console.log(answer);
