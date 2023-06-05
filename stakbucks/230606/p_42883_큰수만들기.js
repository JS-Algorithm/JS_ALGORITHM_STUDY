function solution(number, k) {
  let removeCnt = 0; // 제거한 횟수
  const stack = [];

  stack.push(number[0]);
  for (let i = 1; i < number.length; i++) {
    while (stack[stack.length - 1] < number[i] && removeCnt < k) {
      stack.pop();
      removeCnt++;
    }
    stack.push(number[i]);
  }

  //[4,3,2,1]같이 스택에 내림차순으로 들어가게 된 경우
  while (removeCnt < k) {
    stack.pop();
    removeCnt++;
  }

  return stack.join('');
}
