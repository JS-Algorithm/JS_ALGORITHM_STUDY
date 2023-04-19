function solution(order) {
  let answer = 0;
  const stack = [];
  let idx = 0;

  for (let i = 1; i <= order.length; i++) {
    // 반복문: 컨베이어 벨트(1~5까지)
    // 앞에 지나간 거는 스택에 있으니까, while문 돌아서, 조건 만족하면 계속 pop해주고
    // 컨베이어 벨트에서는 앞에 지나간거는 볼 필요 없으니까 for문 돌 때 자기 차례에 한번만 검사하기

    if (order[idx] !== i) {
      // 컨베이어 벨트에서 order[idx]를 찾고 싶은데 없다면
      stack.push(i); // 스택에 상자 넣기
    } else {
      idx++; // 찾았다면 idx, 정답 증가
      answer++;
    }

    while (stack.length !== 0 && stack.at(-1) === order[idx]) {
      stack.pop();
      idx++;
      answer++;
    }
  }
  return answer;
}
