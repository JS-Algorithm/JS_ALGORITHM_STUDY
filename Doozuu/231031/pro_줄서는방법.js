function solution(n, k) {
  const answer = [];
  const people = Array.from({length: n}, (_, i) => i + 1);
  let caseNum = people.reduce((acc, cur) => acc * cur, 1);

  while (answer.length < n) {
    caseNum /= people.length;
    answer.push(...people.splice(Math.floor((k - 1) / caseNum), 1));
    k %= caseNum;
  }

  return answer;
}
