function solution(numbers, target) {
  let answer = 0;

  getAnswer(0, 0);

  function getAnswer(x, value) {
    if (x < numbers.length) {
      getAnswer(x + 1, value + numbers[x]);
      getAnswer(x + 1, value - numbers[x]);
    } else {
      if (value === target) {
        answer++;
      }
    }
  }

  return answer;
}

// 재귀를 이용해 그래프를 채워나간다.
// 마지막 줄에 도달했을 때 target과 일치하는 값이 있는지 찾는다.
// 0 		      1
// 1        -1       2
// 2     -2   0    1   3
// 3   -3-1 -1 1  0 2 2 4
