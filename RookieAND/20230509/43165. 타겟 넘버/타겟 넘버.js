function solution(numbers, target) {
  let answer = 0;
  function dfs(currentIndex, sum) {
    if (currentIndex > numbers.length - 1) {
      if (sum === target) answer += 1;
      return;
    }
    dfs(currentIndex + 1, sum + numbers[currentIndex]);
    dfs(currentIndex + 1, sum - numbers[currentIndex]);
  }

  const [startNum] = numbers;
  dfs(0, 0);

  return answer;
}
