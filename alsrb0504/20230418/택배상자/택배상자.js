function solution(order) {
  const stack = [];
  let answer = 0;
  let curr = 1;

  // 택배를 담을 수 없다면 종료
  order.some((item) => {
    // 현재 담을 아이템보다 컨테이너 벨트 아이템이 작다면
    // stack에 push
    while (curr < item) {
      stack.push(curr++);
    }

    // 현재 담을 아이템과 컨테이너 벨트 아이템이 다르다면
    // 1. stack의 top에 다음 아이템이 있다면 그대로 진행.
    // 2. stack의 top이 현재 담을 아이템과 다르다면 종료
    if (curr !== item) {
      if (stack.at(-1) === item) stack.pop();
      else return true;
    } else {
      // 현재 다음 아이템과 컨테이너 벨트 아이템이 같다면
      // 컨테이너 벨트 아이템 번호 증가
      curr++;
    }

    answer++;
  });

  return answer;
}

const order = [3, 2, 1, 4, 5];

console.log(solution(order));
