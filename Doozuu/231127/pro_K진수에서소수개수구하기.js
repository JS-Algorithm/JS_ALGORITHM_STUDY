function solution(n, k) {
  let answer = 0;
  let k_num = n.toString(k);
  let k_arr = k_num.split('0');

  function isPrimeNumber(number) {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 0; i < k_arr.length; i++) {
    if (isPrimeNumber(+k_arr[i])) {
      answer++;
    }
  }

  return answer;
}
