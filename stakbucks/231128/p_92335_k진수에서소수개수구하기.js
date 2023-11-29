function solution(n, k) {
  let answer = 0;
  const convertedN = n.toString(k);

  let temp = ''; // 0이 나올 때까지 저장

  for (let i = 0; i < convertedN.length; i++) {
    if (convertedN[i] === '0') {
      if (temp.length && isPrime(+temp, k)) {
        answer++;
      }
      temp = '';
    } else {
      temp += convertedN[i];
    }
  }

  // 마지막 남은 temp 처리
  if (temp.length && isPrime(+temp, k)) {
    answer++;
  }

  // 소수 여부 판별
  function isPrime(n) {
    if (n === 1) return false;
    for (let i = 2; i <= ~~Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  return answer;
}
