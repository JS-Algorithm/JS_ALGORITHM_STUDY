// https://school.programmers.co.kr/learn/courses/30/lessons/84512

function solution(word) {
  const chars = ["A", "E", "I", "O", "U"];
  const arr = [];
  const stack = [];

  // 문자 조합 생성 및 정렬
  for (let i = 1; i <= 5; i++) dfs(0, i);
  arr.sort();

  // Array.indexOf 사용하여 몇 번째 문자인지 찾음
  return arr.indexOf(word) + 1;
  // return arr.findIndex((val) => val === word) + 1;

  // 모든 문자를 조합을 만들기 위한 DFS
  function dfs(cnt, end) {
    if (cnt === end) {
      arr.push(stack.join(""));
      return;
    }

    chars.forEach((ch) => {
      stack.push(ch);
      dfs(cnt + 1, end);
      stack.pop();
    });
  }
}

const word = "AAAE";

console.log(solution(word));
