function solution(arrayA, arrayB) {
  // 가장 작은 숫자의 약수들 중에서 하나씩 확인해 본다
  const sortedA = arrayA.sort((a, b) => a - b);
  const sortedB = arrayB.sort((a, b) => a - b);

  let result = [];

  check(sortedA, sortedB); // 1번 조건
  check(sortedB, sortedA); // 2번 조건

  return result.length ? result.sort((a, b) => b - a)[0] : 0;

  function check(dividable, undividable) {
    const divisors = getDivisors(dividable[0]);
    const candidates = [];

    // 모든 dividable의 원소에 나눠떨어지는 숫자들 구하기
    for (const divisor of divisors) {
      let flag = true;
      for (const num of dividable) {
        if (num % divisor) {
          // 나눠 떨어지지 않으면
          flag = false;
          break;
        }
      }
      if (flag) candidates.push(divisor);
    }

    // candiates의 원소들 중 모든 undividable의 원소들에 나눠떨어지지 않는 숫자들 구하기
    for (const candidate of candidates) {
      let flag = true;
      for (const num of undividable) {
        if (num % candidate === 0) {
          // 나눠 떨어지면
          flag = false;
          break;
        }
      }
      if (flag) result.push(candidate);
    }
  }

  // 약수들 구하기
  function getDivisors(num) {
    const divisors = [];
    for (let i = 2; i <= num; i++) {
      if (num % i === 0) divisors.push(i);
    }
    return divisors;
  }
}
