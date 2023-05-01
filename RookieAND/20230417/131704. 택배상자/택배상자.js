// 1. 물건을 놓지 못한 경우에는 스택에다가 이를 넣는다.
// 2. 현재 컨베이어에서 나온 상자보다 인덱스가 크다면 보조 컨베이어 벨트에 넣어야 한다.

function solution(order) {
  let currentBeltItem = 1;
  let additionalBelt = [];
  let answer = 0;

  order.every((item) => {
    // 현재 컨베이어 벨트에서 물건을 꺼내올 수 있는 경우 쭉 꺼내기.
    while (currentBeltItem < item) {
      additionalBelt.push(currentBeltItem++);
    }

    // 만약 꺼내고자 하는 물건이 현재 벨트 위에 있다면 꺼내기
    if (currentBeltItem === item) {
      currentBeltItem += 1;
    }
    // 만약 보조 컨베이어 벨트 맨 위에서 찾는 물건이 있다면 꺼내기
    else if (additionalBelt.length && item === additionalBelt.at(-1)) {
      additionalBelt.pop();
    }
    // 그것도 아닌 경우 더 이상 물건을 뺄 수 없으니 종료.
    else {
      return false;
    }

    answer += 1;
    return true;
  });

  return answer;
}
