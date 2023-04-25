function solution(topping) {
  const cakeSize = topping.length;
  const wholeTopping = new Set(topping).size;

  let answer = 0;
  const LeftSideTopping = new Map();
  const rightSideTopping = new Set();

  topping.forEach((top) =>
    LeftSideTopping.set(top, (LeftSideTopping.get(top) || 0) + 1)
  );

  topping.forEach((top) => {
    const currentToppingAmount = LeftSideTopping.get(top);
    // 남은 토핑이 한 개밖에 없는데 이것마저도 빼야 한다면 아예 Map에서 소거시킨다.
    currentToppingAmount == 1
      ? LeftSideTopping.delete(top)
      : LeftSideTopping.set(top, currentToppingAmount - 1);

    rightSideTopping.add(top);

    if (rightSideTopping.size === LeftSideTopping.size) answer++;
  });

  return answer;
}
