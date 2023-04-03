function solution(k, tangerine) {
  var answer = 0;
  const map = new Map();
  tangerine.forEach((item) => {
    map.set(item, map.has(item) ? map.get(item) + 1 : 1);
  });

  // 귤 개수에 따라 내림차순 정렬
  const sortedTangerine = [...map].sort((a, b) => b[1] - a[1]);

  sortedTangerine.forEach((tangerine) => {
    // 담을 개수가 0보다 클 때만 담는다
    if (k > 0) {
      k -= tangerine[1];
      answer++;
    }
  });

  return answer;
}

// k = 6;
// tangerine = [1, 3, 2, 5, 4, 5, 2, 3];
// console.log(solution(k, tangerine));
