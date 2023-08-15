function solution(prices) {
  const stack = [];
  const answer = Array(prices.length).fill(-1);

  // prices 순회
  for (let i = 0; i < prices.length; i++) {
    while (stack.length && stack.at(-1)[0] > prices[i]) {
      const [value, index] = stack.pop();
      answer[index] = i - index;
    }
    stack.push([prices[i], i]);
  }

  // prices 순회 후 스택에 남아있는 원소 처리
  while (stack.length) {
    const [value, index] = stack.pop();
    answer[index] = prices.length - index - 1;
  }
  return answer;
}
