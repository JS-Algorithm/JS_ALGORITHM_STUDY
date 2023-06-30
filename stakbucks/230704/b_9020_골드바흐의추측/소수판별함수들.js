// 1. 2부터 N-1까지 루프를 돌며 나눠보기
// O(N)
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// 2. 그 어떤 소수도 N의 제곱근보다 큰 수로 나눠지지 않는 다는 점을 이용
// O(sqrt(N))
function isPrime(num) {
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// 3. 에라토스테네스의 체(고대 그리스 수학자 에라토스테네스가 발견한 소수 찾는 방법)
// O(nlogn)
// 1부터 N까지 모든 소수를 구하는 경우 가장 효율적
function getPrimes(num) {
  const prime = [false, false, ...Array(num - 1).fill(true)];

  for (let i = 2; i * i <= num; i++) {
    if (prime[i]) {
      for (let j = i * 2; j <= num; j += i) {
        prime[j] = false;
      }
    }
  }
  return prime.filter(Boolean);
}
