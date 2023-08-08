function solution(clothes) {
  let obj = {};
  clothes.map(([clothe, type]) => (obj[type] = (obj[type] || 0) + 1));
  let types = Object.values(obj);
  return types.reduce((acc, cur) => acc * (cur + 1), 1) - 1;
}
