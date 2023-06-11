function solution(k, d) {
  let count = 0;

  for (let i = 0; i <= d; i = i + k) {
    // a^2=r^2-b^2 활용
    // 각 행에서 가능한 최대 정수 구하기
    // 0 부터 해당정수 사이에 가능한 k의 배수 + 1(0포함해야 돼서)
    count += Math.floor(Math.floor(Math.sqrt(d ** 2 - i ** 2)) / k) + 1;
  }
  return count;
}
