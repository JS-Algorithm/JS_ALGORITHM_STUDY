function solution(word) {
  const vowels = ['', 'A', 'E', 'I', 'O', 'U'];

  let count = 0;

  const stack = [1];

  const convertToString = (arr) => {
    return arr.map((v) => vowels[v]).join('');
  };

  while (stack.length) {
    count++;
    const string = convertToString(stack);
    if (string === word) {
      // 정답을 찾은 경우
      return count;
    }

    if (stack.length < 5) {
      // 단어 총 길이가 5가 안되면 맨 뒤에 'A' 추가
      stack.push(1);
    } else {
      // 총 길이가 5인 경우,
      while (stack.length) {
        const top = stack.pop();
        if (top === 5) {
          continue;
        } else {
          stack.push(top + 1);
          break;
        }
      }
    }
  }
  return count;
}
