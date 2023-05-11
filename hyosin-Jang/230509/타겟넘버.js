function solution(numbers, target) {
  let cnt = 0;

  // idx: 현재 탐색 중인 idx, result: 계산 결과
  const dfs = (idx, result) => {
    if (idx === numbers.length) {
      // 만약 만들어진 단어가 target과 같다면 cnt를 증가시킨다.
      if (result === target) cnt++;
      return;
    }

    dfs(idx + 1, result + numbers[idx]);
    dfs(idx + 1, result - numbers[idx]);
  };

  dfs(0, 0);

  return cnt;
}

const numbers = [4, 1, 2, 1];
target = 4;
solution(numbers, target);
