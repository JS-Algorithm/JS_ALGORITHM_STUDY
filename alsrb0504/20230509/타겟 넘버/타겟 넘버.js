function solution(numbers, target) {
  let answer = 0;
  const SIZE = numbers.length;

  dfs(0, 0);

  // 매 numbers[cnt]의 값을 +, - 하며 최종 결과가
  // target과 같을 때, answer값을 증가
  function dfs(cnt, sum) {
    if (cnt === SIZE) {
      if (sum === target) answer++;
      return;
    }

    dfs(cnt + 1, sum + numbers[cnt]);

    dfs(cnt + 1, sum - numbers[cnt]);
  }

  return answer;
}

const [numbers, target] = [[1, 1, 1, 1, 1], 3];

console.log(solution(numbers, target));
