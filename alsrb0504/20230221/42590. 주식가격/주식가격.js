function solution(prices) {
  const N = prices.length;

  // 정답을 위한 배열 : 0으로 초기화.
  const answer = new Array(N).fill(0);

  // 스택 [ [ 가격, 시점 ], [ 가격, 시점 ], ... ]
  const stack = [];

  for (let i = 0; i < N; i++) {
    // 현재 가격
    const curr = prices[i];

    // 1. 스택에 값이 없는 경우
    if (stack.length === 0) {
      stack.push([curr, i]);
    }
    // 2. 스택에 값이 있는 경우
    else {
      // 2-1. 가격이 떨어졌다면
      // stack에서 현재 가격보다 높은 값들을 pop
      // 현재 시각에서 담겼던 시각을 뺌.
      while (stack.length && stack.at(-1)[0] > curr) {
        const [_, time] = stack.pop();
        answer[time] = i - time;
      }

      // 스택에 현재 값 삽입.
      stack.push([curr, i]);
    }
  }

  // 3. 스택에 값이 남아 있는 경우
  // 마지막 시점까지 값이 내리지 않은 것이므로
  // (N - 1)에서 스택에 담긴 시점의 값을 뺌.
  while (stack.length) {
    const [_, time] = stack.pop();
    answer[time] = N - 1 - time;
  }

  return answer;
}
