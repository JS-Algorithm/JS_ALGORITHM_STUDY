//시간 제한 1초.
//reverse 활용해서 for문 돌리는 방식 시간초과예상
//trim...
//=> 투포인터 문제 + 재귀함수 https://breathtaking-life.tistory.com/167 참고.

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

// T:7 strArray:[abba,summus,....]

const testCase = {
  T: +input[0],
  arr: input.slice(1),
};

function isSimmilar(word, left, right) {
  while (left < right) {
    if (word[left] === word[right]) {
      left += 1;
      right -= 1;
    } else return false;
  }
  return true;
}

const result = [];
function solution(testCase) {
  const {T, arr} = testCase;

  for (const word of arr) {
    let left = 0;
    let right = word.length - 1;
    let palindrome = 0;

    while (left < right) {
      if (word[left] === word[right]) {
        left++;
        right--;
      } else {
        if (isSimmilar(word, left + 1, right) || isSimmilar(word, left, right - 1)) {
          palindrome = 1;
          break;
        } else {
          palindrome = 2;
          break;
        }
      }
    }
    result.push(palindrome);
  }
  console.log(result.join('\n'));
}

solution(testCase);
