function solution(clothes) {
  const map = new Map();

  clothes.forEach((el) => {
    if (map.has(el[1])) {
      map.set(el[1], map.get(el[1]) + 1);
    } else {
      map.set(el[1], 1);
    }
  });

  let answer = 1;

  map.forEach((val) => {
    answer *= val + 1;
  });

  return answer - 1;
}
