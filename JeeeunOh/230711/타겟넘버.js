function solution(numbers, target) {
  let answer = 0;

  const dfs = (curIdx, sum) => {
    if (curIdx === numbers.length) {
      if (sum === target) answer++;
      return;
    }
    dfs(curIdx + 1, sum - numbers[curIdx]);
    dfs(curIdx + 1, sum + numbers[curIdx]);
  };

  dfs(0, 0);

  return answer;
}
