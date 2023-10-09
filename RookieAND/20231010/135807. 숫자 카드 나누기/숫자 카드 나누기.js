// 1. 철수가 가진 카드와 영희가 가진 카드의 최대공약수를 구한다.
// 2. 철수의 최대 공약수로 영희가 가진 카드를 전부 0으로 나눌 수 없다면, 둘 중 더 큰 최대 공약수 return

function solution(arrayA, arrayB) {

  const gcd = (a, b) => {
    return a % b === 0 ? b : gcd(b, a % b);
  }
  
  const answer = [];

  const gcdA = arrayA.slice(1).reduce((acc, cur) => gcd(acc, cur), arrayA[0]);
  if (gcdA > 1) {
      const isAnswered = arrayB.every((num) => num % gcdA !== 0);
      if (isAnswered) answer.push(gcdA);
  }
    
  const gcdB = arrayB.slice(1).reduce((acc, cur) => gcd(acc, cur), arrayB[0]);
  if (gcdB > 1) {
      const isAnswered = arrayA.every((num) => num % gcdB !== 0);
      if (isAnswered) answer.push(gcdB);
  }

  return answer.length ? Math.max(...answer) : 0;
}