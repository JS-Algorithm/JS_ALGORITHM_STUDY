// 스택의 탑에 있는 수 보다 큰 수 a가 들어오면, a보다 큰 수가 탑에 올 때까지 스택을 pop 해준다.

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

  //[4,3,2,1]같이 스택에 내림차순으로 들어가있는 경우에 removeCnt가 k보다 작을 수 있음
  //k가 될때까지 스택을 pop해주면 된다
  while (removeCnt < k) {
    stack.pop();
    removeCnt++;
  }

  return stack.join('');
}
