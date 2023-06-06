function solution(k, d) {
  let answer = 0;
  let arr = [];
  for (let i = 0; i <= d; i += k) {
    arr.push(i);
  }

  for (const x of arr) {
    let y = Math.sqrt(d ** 2 - x ** 2); // y^2 = d^2 -  x^2

    // Math.floor(y/k)은 y까지 찍을 수 있는 점의 개수. 이 때 0도 포함해야하므로 1 더해줌.
    answer += Math.floor(y / k) + 1;
  }

  return answer;
}
