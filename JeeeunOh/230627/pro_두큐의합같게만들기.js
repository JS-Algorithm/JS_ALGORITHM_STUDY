function solution(q1, q2) {
  let q = q1.concat(q2);
  let total = q.reduce((acc, cur) => acc + cur, 0);

  // 합이 홀수면 return -1
  if (total % 2 != 0) return -1;

  let target = total / 2;
  let [start, end] = [0, q1.length];

  let temp = q1.reduce((acc, cur) => acc + cur, 0);

  while (start != end && end <= q.length) {
    if (temp === target) {
      return start + (end - q1.length);
    }
    if (temp < target) {
      temp += q[end];
      end++;
    } else if (temp > target) {
      temp -= q[start];
      start++;
    }
  }

  return -1;
}
