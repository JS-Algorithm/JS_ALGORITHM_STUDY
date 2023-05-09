function solution(data, col, row_begin, row_end) {
  col--;
  row_begin--;
  row_end--;

  // 문제에서 주어진 조건으로 정렬
  data.sort((a, b) => {
    if (a[col] === b[col]) return b[0] - a[0];

    return a[col] - b[col];
  });

  // row_begin의 mod 누적합을 저장
  let answer = calcModRow(row_begin);

  // 이후, row_end까지의 mod 누적합과 XOR 연산
  for (let i = row_begin + 1; i <= row_end; i++) {
    const modResult = calcModRow(i);

    answer = answer ^ modResult;
  }

  return answer;

  /** 인자로 전해준 index번 Row의 mod 누적합을 반환하는 함수 */
  function calcModRow(index) {
    let acc = 0;

    for (let num of data[index]) {
      acc += num % (index + 1);
    }

    return acc;
  }
}

const data = [
  [2, 2, 6],
  [1, 5, 10],
  [4, 2, 9],
  [3, 8, 3],
];

const [col, row_begin, row_end] = [2, 2, 3];

console.log(solution(data, col, row_begin, row_end));
