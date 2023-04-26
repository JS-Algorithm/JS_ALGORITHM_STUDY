function solution(begin, end) {
  const MAX_NUM = 1e7;
  const SIZE = end - begin + 1;
  const answer = new Array(SIZE).fill(1);

  // begin ~ end까지의 수에 대해서 최대 약수를 구함
  for (let i = 0; i < SIZE; i++) {
    answer[i] = getMaxDivider(begin + i);
  }

  // 예외처리 : begin === 1인 경우 첫 값을 0으로 할당
  if (begin === 1) answer[0] = 0;

  return answer;

  function getMaxDivider(num) {
    let max = 1;
    const sqrt = Math.sqrt(num);

    // 2 ~ 제곱근까지 나눠보며
    // 1과 자기 자신을 제외한 최대 약수 찾음
    for (let i = 2; i <= sqrt; i++) {
      // 2부터 시작해서 가장 먼저 나눠지는 수의 짝(i * (num / i)에서 (num / i)이 부분)
      // 이 나눠지는 수의 짝이 가장 최대로 구할 수 있는 약수 (바로 리턴!)
      //
      // 단, 숫자 블록의 최대 크기가 10*7이기 때문에
      // 이 짝이 10^7보다 크다면 i를 최대값으로 저장하고 탐색을 마저 진행
      if (num % i === 0) {
        if (num / i <= MAX_NUM) return num / i;
        else {
          max = Math.max(max, i);
        }
      }
    }

    return max;
  }
}

const [begin, end] = [100000014, 100000016]; // [6, 5, 6250001]

console.log(solution(begin, end));
