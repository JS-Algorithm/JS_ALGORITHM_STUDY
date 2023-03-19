function solution(n, m, section) {
  let answer = 0;
  // 현재 롤러의 위치
  let curIdx = 0;

  section.forEach((pos) => {
    // 현재 롤러의 위치보다 칠해야 할 위치가 더 크다면
    // 카운트하고 롤러 위치 이동
    if (curIdx < pos) {
      answer++;
      curIdx = pos + m - 1;
    }
  });

  return answer;
}

const n = 4;
const m = 1;
const section = [1, 2, 3, 4];

console.log(solution(n, m, section));
