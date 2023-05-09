function solution(n, left, right) {
  var answer = [];
  let [start, end] = [Math.floor(left / n), Math.ceil(right / n)];

  for (let i = start + 1; i <= end + 1; i++) {
    for (let j = 1; j <= n; j++) {
      if (j <= i) answer.push(i);
      else answer.push(j);
    }
  }

  return answer.slice(left - start * n, right - start * n + 1);
}
