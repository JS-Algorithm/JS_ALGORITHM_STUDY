function solution(topping) {
  let answer = 0;

  // 앞쪽 케익의 토핑의 종류를 기록할 Set
  // 뒤쪽 케익의 토핑의 종류와 개수를 기록할 Map 선언
  const prevSet = new Set();
  const nextMap = new Map();

  // 뒤쪽 케익의 토핑의 종류와 개수 기록를 Map에 기록
  for (let curTopping of topping) {
    nextMap.set(
      curTopping,
      nextMap.has(curTopping) ? nextMap.get(curTopping) + 1 : 1
    );
  }

  // 뒤쪽 케익의 토핑을 하나씩 앞쪽 케익으로 이동
  // 앞과 뒤 케익의 토핑 개수가 같으면 카운트 증가
  for (let curTopping of topping) {
    const nextHasTopping = nextMap.get(curTopping);

    if (nextHasTopping === 1) nextMap.delete(curTopping);
    else nextMap.set(curTopping, nextHasTopping - 1);

    prevSet.add(curTopping);

    if (prevSet.size === nextMap.size) answer++;
  }

  return answer;
}

const topping = [1, 2, 1, 3, 1, 4, 1, 2];
console.log(solution(topping));
