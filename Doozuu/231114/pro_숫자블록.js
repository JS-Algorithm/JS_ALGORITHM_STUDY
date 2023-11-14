function findMaxDivisor(num) {
  if (num === 1) {
    return 0;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0 && num / i <= 1e7) {
      return num / i;
    }
  }
  return 1;
}

function solution(begin, end) {
  let answer = [];

  for (let i = begin; i <= end; i++) {
    answer.push(findMaxDivisor(i));
  }

  return answer;
}
