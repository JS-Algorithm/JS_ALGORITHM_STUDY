// 1. 숫자 n을 기준으로 n * 2 부터 해당 숫자의 블럭이 깔리기 시작한다.
// 2. 그러면 현재 숫자를 기준으로, 자기 자신을 제외한 가장 큰 소수를 찾아보자. (N의 M배수인 경우 N을 찾아야 함)
// 3. 이후 해당 소수의 배수를 기반으로 답을 찾자, 근데 생각보다 범주가 너무 크기 때문에 에라토스테네스의 체를 쓰자.

// [정답 열람]
// 1-1. 블록이 최대 10,000,000 까지라는 걸 생각 못하고 풀었더니 해결이 안되었음.
// 1-2. 약수를 구하는 것까지는 좋았으나 최적화를 못한 이유는 1천만까지 블럭이 있다는 걸 못봐서..

const solution = (begin, end) => {
  // 특정 인덱스의 숫자를 구하는 함수 getCurrentBlockNumber
  const getCurrentBlockNumber = (index) => {
    // 현재 인덱스가 1이라면 당연히 0을 리턴해야 한다.
    if (index === 1) return 0;

    // 만약 index가 소수라면 가장 첫 블록은 index * 2에 설치되므로, 1을 놓아야 함.
    let currentBlockNum = 1;

    // 자기 자신의 제곱수까지만 소수를 구해도 된다. (에라토스테네스의 체)
    for (let i = 2; i <= Math.sqrt(index); i++) {
      // 만약 해당 수가 index의 약수라면, 해당 수를 기반으로한 배수는 모두 넣을 수 있다.
      if (index % i === 0) {
        currentBlockNum = i;

        // (놓친 점) number의 약수인 i를 나눈 값이 천만보다 작다면, 해당 수가 가장 큰 수다.
        // 이유는 현재 "작은 약수" 부터 순회를 돌고 있으므로, 가장 작은 수로 나눈 몫이 가장 큰 결과 값이다.
        if (index / i <= 10 ** 7) return index / i;
      }
    }

    return currentBlockNum;
  };

  let answer = [];

  for (let j = begin; j <= end; j++) {
    answer.push(getCurrentBlockNumber(j));
  }
  return answer;
};
