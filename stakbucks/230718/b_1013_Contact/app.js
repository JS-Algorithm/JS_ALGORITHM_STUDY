const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const parse = (str) => {
    if (!str.length) return true;
    if (str[0] === '0' && str[1] === '1') {
      return parse(str.slice(2));
    }
    if (str[0] === '0' && str[1] === '0') {
      return false;
    }
    if (str[0] === '1') {
      if (str[1] === '1' || str[2] === '1') return false;
      for (let i = 3; i < str.length; i++) {
        // '1'이 나올 때까지 진행
        if (str[i] === '1') {
          for (let j = i + 1; j < str.length; j++) {
            // '0'이 나올 때까지 진행
            if (str[j] === '0') {
              if (str[j - 2] === '1' && str[j - 1] === '1') {
                // 100...110 인 경우
                // 100...1+10 와 100..11+0 로 자를 수 있는 방법이 두가지 존재
                // 두 가지 중 하나만 true면 된다
                if (parse(str.slice(j - 1)) || parse(str.slice(j))) return true;
                else return false;
              } else {
                return parse(str.slice(j));
              }
            }
          }
          // 100...1 로 끝난 경우
          return true;
        }
      }
      // 100.. 뒤에 1아 안나온 경우
      return false;
    }
  };
  const answer = [];
  for (const inputCase of input.slice(1)) {
    if (parse(inputCase)) answer.push('YES');
    else answer.push('NO');
  }
  console.log(answer.join('\n'));
}

solution(input);
