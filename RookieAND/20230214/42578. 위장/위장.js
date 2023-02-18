function solution(clothes) {
  const closet = new Map();
  // 인자로 전달 받은 배열을 순회하여 closet Map에 추가하되, value는 옷의 수량으로만 추가
  clothes.forEach(([, key]) => closet.set(key, !closet.get(key) ? 1 : closet.get(key) + 1));
  return Array.from(closet.values()).reduce((acc, cur) => acc * (cur + 1), 1) - 1;
}
