function solution(numbers, target) {
  let count = 0;
  const DFS = (idx, sum) => {
    if (idx === numbers.length - 1) {
      if (target === sum + numbers[idx]) {
        count++;
      }
      if (target === sum - numbers[idx]) {
        count++;
      }
      return;
    }
    DFS(idx + 1, sum + numbers[idx]);
    DFS(idx + 1, sum - numbers[idx]);
    return;
  };

  DFS(1, numbers[0]);
  DFS(1, -numbers[0]);
  return count;
}
