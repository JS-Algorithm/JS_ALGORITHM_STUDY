// 규칙 : (3, 27): 27 => 3 * 3 * 3 , (3, 11): 11 => 3 * 4 * 4 처럼
// s를 n으로 나눴을 때 나온 값과 나머지를 조합하여
// 위의 식처럼 몫 + 나머지 값만큼 + 1한 값들의 조합이
// 항상 최고의 곱셈이 나올 수 있는 경우
function solution(n, s) {
  // 1. 불가능한 경우 : n이 s보다 크면 1로 조합해도 불가
  if (n > s) return [-1];

  // 2. n / s의 나머지가 없는 경우
  // div (몫)값 만큼 반복한 배열 리턴
  if (s % n === 0) {
    const div = s / n;
    return new Array(n).fill(div);
  }
  // 3. n / s의 나머지가 있는 경우
  else {
    const div = Math.floor(s / n);
    const rest = s % n;

    const arr = [];

    // 나머지의 수만큼 div(몫)값에 + 1한 값들을 채우고
    // 이후 div(몫)을 채우고 리버스 정렬
    for (let i = 0; i < n; i++) {
      if (i < rest) arr.push(div + 1);
      else arr.push(div);
    }

    return arr.reverse();
  }
}

const n = 3;
const s = 11;

console.log(solution(n, s)); // [3, 4, 4]
