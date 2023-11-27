function solution(numbers) {
  const stack = []; // [숫자, 인덱스]
  const answer = Array(numbers.length).fill(-1);

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    while (stack.length && stack.at(-1)[0] < number) {
      answer[stack.pop()[1]] = number;
    }
    stack.push([number, i]);
  }

  return answer;
}

//
