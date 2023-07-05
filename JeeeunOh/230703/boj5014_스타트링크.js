const readFileSyncAddress = process.platform === 'linux' ? '/dev/stdin' : '/Users/jieun/Documents/GitHub/JS_ALGORITHM_STUDY/JeeeunOh/230703/input.txt';

const input = require('fs').readFileSync(readFileSyncAddress).toString().trimEnd().split('\n');

const [F, S, G, U, D] = input[0].split(' ').map(Number); // 총, 시작, 목표, 위 , 아래

let cnt = Array(F + 1).fill(0);
cnt[S] = 1; // S층은 0번만에 갈 수 있지만 플래그 처리 위해 1부터 시작 -> 후에 1 뺀 값 반환
let move = [+U, -D];
let queue = [S];

if (S === G) {
  console.log(0);
  return;
}

while (queue.length) {
  let cur = queue.shift();
  for (const el of move) {
    if (cur + el <= F && cur + el >= 1 && !cnt[cur + el]) {
      // U 눌렀을 때 도달가능하고 & 가본 적 없는 층이면
      if (cur + el === G) {
        // 목표층 도달했다면 값 반환
        console.log(cnt[cur]);
        return;
      }
      queue.push(cur + el); // 목표층 아니라면 다음 층 탐색을 위해 queue에 넣어 줌.
      cnt[cur + el] = cnt[cur] + 1;
    }
  }
}
console.log('use the stairs');
