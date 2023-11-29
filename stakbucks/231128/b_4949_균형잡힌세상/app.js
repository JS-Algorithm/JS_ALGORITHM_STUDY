const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const answer = [];
  input.forEach((line) => {
    if (line === '.') return; // 입력 종료 조건

    const stack = [];

    let result = 'yes';

    for (const letter of line) {
      // 여는 괄호는 스택에 넣어준다
      if (letter === '[' || letter === '(') {
        stack.push(letter);
      }

      // 닫는 괄호는 스택의 top과 비교하여 쌍을 이루는지 체크
      if (letter === ')') {
        if (stack.at(-1) !== '(') {
          result = 'no';
          break;
        }
        stack.pop();
      }
      if (letter === ']') {
        if (stack.at(-1) !== '[') {
          result = 'no';
          break;
        }
        stack.pop();
      }
    }

    if (stack.length) result = 'no'; // 괄호가 안닫힌 채로 문자열이 끝나는 경우!

    answer.push(result);
  });

  console.log(answer.join('\n'));
}

solution(input);
