function solution(n, k) {
  let idx = 0;

  const numbers = new Set(Array.from({length: n + 1}, (_, i) => i + 1)); // [1,2,3,...,n]
  const factorials = Array.from({length: n}, (_, i) => factorial(n - i));
  const count = Array(n).fill(0);
  const answer = Array(n).fill(0);

  while (factorials[idx] > k) {
    idx++;
  }

  k--;
  while (idx < n && k) {
    count[idx] = Math.floor(k / factorials[idx]);
    k -= count[idx] * factorials[idx];
    idx++;
  }

  for (let i = 0; i < n - 1; i++) {
    const sorted = [...numbers].sort((a, b) => a - b);
    answer[i] = sorted[count[i + 1]];
    numbers.delete(answer[i]);
  }
  answer[n - 1] = [...numbers][0];
  return answer;

  // 팩토리얼 계산
  function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}

// 1 2 3
// 1 고정 시키고 나머지 2개 정렬 방법 => 2!=2
// 2 고정 시키고 나머지 2개 정렬 방법 => 2!=2
// 3 1 고정 시키고 나머지 1개 정렬 방법 => 1!=1 정답:312
