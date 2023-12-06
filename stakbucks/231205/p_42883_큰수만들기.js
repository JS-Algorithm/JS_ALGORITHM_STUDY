function solution(number, k) {
  const stack = [];
  const removedCnt = 0; // 제거한 숫자 개수

  number.split('').forEach((num) => {
    while (stack.at(-1) < num && removedCnt < k) {
      stack.pop();
      removedCnt++;
    }
    stack.push(num);
  });

  while (removedCnt < k) {
    stack.pop();
    removedCnt++;
  }

  return stack.join('');
}
