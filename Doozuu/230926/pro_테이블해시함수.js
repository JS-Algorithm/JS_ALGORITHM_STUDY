function solution(data, col, row_begin, row_end) {
  let sum_list = [];
  // 1. col번째 컬럼값을 기준으로 오름차순 정렬, 값이 동일하면 첫 번째 컬럼값 기준으로 내림차순
  data.sort((a, b) => (a[col - 1] === b[col - 1] ? b[0] - a[0] : a[col - 1] - b[col - 1]));
  // 2. row_begin부터 row-end까지 i번째 행을 i로 나눈 나머지의 합 구하기
  for (let i = row_begin - 1; i < row_end; i++) {
    sum_list.push(data[i].reduce((acc, cur) => acc + (cur % (i + 1)), 0));
  }
  // 3. XOR 계산
  return sum_list.reduce((acc, cur) => acc ^ cur, 0);
}
