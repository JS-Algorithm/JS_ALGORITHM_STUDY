function solution(N, left, right) {
  let answer = [];

  // x번째 숫자는 x / N 열 x % N 행에 위치한다.
  // k열에 위치한 숫자들은 최소 k보다는 커야 하며
  // l행에 위치한 숫자들은 k, l 둘 중 큰 숫자가 올 수 있다.
  for (let num = left; num <= right; num++) {
    answer.push(Math.max(Math.floor(num / N), num % N) + 1)
  }
  return answer;
}
