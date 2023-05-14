function solution(n, left, right) {
  const answer = [];

  for (let i = left; i <= right; i++) {
    // 몫과 나머지
    const quotient = Math.floor(i / n);
    const reminder = i % n;

    // 4 * 4
    // [ 1, 2, 3, 4]
    // [ 2, 2, 3, 4]
    // [ 3, 3, 3, 4]
    // [ 4, 4, 4, 4]
    // 규칙 : 나머지 + 1 <= 몫 보다 작은 경우는 몫 + 1.
    // 그렇지 않은 경우는 나머지 + 1
    if (reminder + 1 <= quotient) {
      answer.push(1 + quotient);
    } else {
      answer.push(reminder + 1);
    }
  }

  return answer;
}

const [n, left, right] = [4, 0, 15];
// answer : [ 1, 2, 3, 4, 2, 2, 3, 4, 3, 3, 3, 4, 4, 4, 4, 4 ]

console.log(solution(n, left, right));
