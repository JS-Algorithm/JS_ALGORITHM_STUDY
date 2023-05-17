// 규칙
// n을 소인수 분해 할 때,
// 나머지가 0이면 => 몫의 값을 -1 하고 '4'를 정답 배열에 push
// 그렇지 않은 경우 => 정답 배열에 나머지 push
function solution(n) {
  const answer = [];

  while (n > 0) {
    const rest = n % 3;
    n = Math.floor(n / 3);

    if (rest === 0) {
      answer.push(4);
      n--;
    } else {
      answer.push(rest);
    }
  }

  return answer.reverse().join("");
}

const n = 39;

console.log(solution(n));
