function solution(k, ranges) {
  const result = []; // 정답

  // 우박 수열 구하기
  const sequence = calc(k, []);

  for (const [a, b] of ranges) {
    const [x1, x2] = [a, sequence.length - 1 + b]; // n = 우박수열의 길이-1
    if (x1 > x2) {
      result.push(-1);
    } else {
      result.push(integral(x1, x2, sequence));
    }
  }
  return result;

  // 우박수열을 구하기 위한 계산
  function calc(num, result) {
    result.push(num);
    if (num === 1) {
      return;
    }
    if (num % 2) {
      // 홀수
      calc(num * 3 + 1, result);
    } else {
      // 짝수
      calc(num / 2, result);
    }
    return result;
  }

  function integral(x1, x2) {
    // 전체 정적분
    let sum = 0; // 넓이 총 합

    let left = x1;
    let right = x1 + 1;
    while (right <= x2) {
      sum += partialIntegral(left, right);
      left++;
      right++;
    }
    return sum;
  }

  function partialIntegral(x1, x2) {
    // 사다리꼴 하나 넓이 구하기 (높이는 항상 1)
    return (sequence[x1] + sequence[x2]) / 2;
  }
}
