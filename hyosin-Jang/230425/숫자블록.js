// 길이가 10억이므로, 에라토스테네스의 체 => 시간초과, 개별판별

// 가장 마지막에 깔리는 숫자
// => 해당 숫자의 약수 중 Math.floor([해당 숫자/2]) 이하인 수 중 가장 큰 수 이면서 천만 이하인 숫자

// 각 숫자 하나하나의 약수를 구해야 하는데, 가장 큰 경우가 10억임. 루트 10억 => 약 10,000이므로
// 5,000 * 10,000 < 100,000,000  => 시간초과 안남

const findMaxDivisor = (num) => {
  if (!num % 2) return num / 2; // 짝수면 무조건 2로 나눈 몫 리턴
  const sqrt = Math.sqrt(num);

  let divisor = 0;

  for (let i = 1; i <= Math.floor(sqrt); i++) {
    if (num % i == 0 && i <= Math.floor(num / 2)) {
      if (num / i <= Math.floor(num / 2) && num / i <= 10000000) {
        return num / i;
      }
      divisor = i;
    }
  }
  return divisor;
};

function solution(begin, end) {
  var answer = Array.from({length: end - begin + 1}, () => 0);
  let idx = 0;

  for (let i = begin; i <= end; i++) {
    answer[idx++] = findMaxDivisor(i);
  }

  return answer;
}

solution(1, 10);
