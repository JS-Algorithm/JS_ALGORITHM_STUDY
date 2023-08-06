function solution(orders, course) {
  const getCombinations = (order, size, temp) => {
    // DFS 방식으로 모든 조합 구하기
    // order 문자열의 가장 앞 문자부터 하나씩 선택한 경우/선택안한 경우 나눠서 재귀
    const result = [];
    if (size > order.length) return result;
    if (size === 0) {
      // "XW"와 "WX"는 같은 주문이므로 중복방지하기 위해 정렬하고 저장한다
      return [...temp].sort().join('');
    }
    // 선택한 경우
    result.push(getCombinations(order.slice(1), size - 1, temp + order[0]));
    // 선택하지 않은 경우
    result.push(getCombinations(order.slice(1), size, temp));

    return result.flat();
  };

  const answer = [];

  for (const size of course) {
    // [조합, 주문 횟수]
    const map = new Map();
    for (const order of orders) {
      const combinations = getCombinations(order, size, '');
      for (const combination of combinations) {
        if (map.has(combination)) {
          const value = map.get(combination);
          map.set(combination, value + 1);
        } else {
          map.set(combination, 1);
        }
      }
    }
    // 내림차순 정렬
    const sorted = [...map].sort((a, b) => b[1] - a[1]);
    if (sorted.length && sorted[0][1] > 1) {
      const maxValue = sorted[0][1];
      for (let i = 0; i < sorted.length; i++) {
        if (sorted[i][1] === maxValue) {
          answer.push(sorted[i][0]);
        } else {
          break;
        }
      }
    }
  }

  return answer.sort();
}
