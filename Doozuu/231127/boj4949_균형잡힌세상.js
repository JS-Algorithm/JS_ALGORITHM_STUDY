const input = require('fs').readFileSync('dev/stdin').toString().split('\n');
let answer = [];

for (let text of input) {
  let stack = [];
  let j = 0;
  let isValid = true;

  if (text === '.') break;

  while (true) {
    if (j === text.length) {
      break;
    }
    if (text[j] === '(' || text[j] === '[') {
      stack.push(text[j]);
    } else if (text[j] === ')') {
      if (stack.at(-1) === '(') {
        stack.pop();
      } else {
        isValid = false;
        break;
      }
    } else if (text[j] === ']') {
      if (stack.at(-1) === '[') {
        stack.pop();
      } else {
        isValid = false;
        break;
      }
    }
    j++;
  }

  if (isValid && stack.length === 0) {
    answer.push('yes');
  } else {
    answer.push('no');
  }
}

console.log(answer.join('\n'));
