const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

// 회문 0
// 유회회문 1
// 그 외 2

function solution(input) {
  const T = Number(input.shift());
  const answer = [];
  for (const str of input) {
    if (isPalindrome(str)) {
      answer.push(0);
    } else if (isPseudo(str)) {
      answer.push(1);
    } else {
      answer.push(2);
    }
  }
  console.log(answer.join('\n'));

  function isPalindrome(str) {
    const halfLength = Math.floor(str.length / 2);
    for (let i = 0; i <= halfLength; i++) {
      if (str[i] !== str.at(-(i + 1))) {
        return false;
      }
    }
    return true;
  }
  function isPseudo(str) {
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
      if (str[i] !== str[j]) {
        if (isPalindrome([...str].filter((v, idx) => i !== idx).join('')) || isPalindrome([...str].filter((v, idx) => j !== idx).join(''))) {
          return true;
        } else {
          return false;
        }
      }
      i++;
      j--;
    }
    return false;
  }
}

solution(input);
