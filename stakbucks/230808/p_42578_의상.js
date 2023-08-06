function solution(clothes) {
  const map = new Map();
  for (const [name, type] of clothes) {
    if (map.has(type)) {
      const value = map.get(type);
      value.push(name);
      map.set(type, value);
    } else {
      map.set(type, [name]);
    }
  }
  let sum = 0;
  for (const type of map.keys()) {
    const value = map.get(type);
    if (!sum) {
      sum = value.length + 1;
    } else {
      sum *= value.length + 1;
    }
  }
  // 최소 하나는 입어야 되기 때문에 하나도 안 입는 경우 -1
  return sum - 1;
}
