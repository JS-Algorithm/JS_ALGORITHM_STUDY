// 1. 철수가 가진 카드와 영희가 가진 카드의 최대공약수를 구한다.
// 2. 철수의 최대 공약수로 영희가 가진 카드를 전부 0으로 나눌 수 없다면, 둘 중 더 큰 최대 공약수 return

function solution(arrayA, arrayB) {

  const gcd = (a, b) => {
    return a % b === 0 ? b : gcd(b, a % b);
  }
  
  const answer = [];

  // 철수가 가진 카드를 모두 대조하여 최대 공약수를 구한다.
  const gcdA = arrayA.slice(1).reduce((acc, cur) => gcd(acc, cur), arrayA[0]);
  // 최대 공약수가 1이라면 철수가 가진 패에서 유효한 카드 값이 존재하지 않았다는 의미다.
  if (gcdA > 1) {
      const isAnswered = arrayB.every((num) => num % gcdA !== 0);
      if (isAnswered) answer.push(gcdA);
  }
   
  // 영희의 경우에도 마찬가지로 가진 카드를 모두 대조하여 최대 공약수를 구한다.
  const gcdB = arrayB.slice(1).reduce((acc, cur) => gcd(acc, cur), arrayB[0]);
  if (gcdB > 1) {
      const isAnswered = arrayA.every((num) => num % gcdB !== 0);
      if (isAnswered) answer.push(gcdB);
  }

  // 두 케이스 모두 값이 없다면 0을, 그렇지 않다면 더 큰 값을 return 한다.
  return answer.length ? Math.max(...answer) : 0;
}