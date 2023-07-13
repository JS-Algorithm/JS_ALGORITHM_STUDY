const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let [N, M, S] = input;
let answer = 0;
let pattern = 0;
let i = 0;

while (i < M - 2) {
  if (S.slice(i, i + 3) === 'IOI') {
    pattern++;
    if (pattern == N) {
      answer++;
      pattern--;
    }
    i += 2;
  } else {
    pattern = 0;
    i++;
  }
}

console.log(answer);

// IOI 패턴이 나타날 경우 패턴 갯수를 증가시켜준다.
// 패턴 갯수가 N과 일치할 경우 answer를 증가시키고 패턴 갯수를 감소시킨다.(이미 센 패턴이므로 제거)
// 패턴 갯수가 N과 일치하지 않을 경우 i를 2만큼 증가시켜 이어나오는 문자열에 IOI 패턴이 또 존재하는지 확인한다.
// 패턴이 또 존재하는 경우 다시 패턴 갯수를 증가시키고, 다시 패턴 갯수가 N과 일치하는지 확인해준다.
// IOI 패턴이 없는 경우 패턴 갯수를 0으로 초기화시키고 i를 1만큼 증가시킨다.
