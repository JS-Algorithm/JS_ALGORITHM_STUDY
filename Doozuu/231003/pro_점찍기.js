function solution(k, d) {
  let answer = 0;
  for (let i = 0; i <= d / k; i++) {
    let y_max = Math.floor(Math.sqrt(d ** 2 - (k * i) ** 2));
    answer += Math.floor(y_max / k) + 1;
  }
  return answer;
}
