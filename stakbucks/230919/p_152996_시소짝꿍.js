function solution(weights) {
  const ratios = [1, 2 / 3, 2 / 4, 3 / 4];
  const map = new Map();
  let count = 0;

  weights = weights.sort((a, b) => a - b); // 가벼운 무게들 부터 기록해야

  for (const weight of weights) {
    for (const ratio of ratios) {
      if (map.has(weight * ratio)) {
        count += map.get(weight * ratio);
      }
    }
    map.set(weight, (map.get(weight) || 0) + 1);
  }
  return count;
}
