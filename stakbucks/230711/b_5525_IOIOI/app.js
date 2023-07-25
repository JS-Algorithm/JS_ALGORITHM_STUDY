const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const N = Number(input[0]);
  const S = input[2];

  let answer = 0;

  const count = (temp) => {
    // temp로 PN을 몇 개 만들 수 있는지 세는 함수
    if (temp.at(-1) === 'O') {
      temp = temp.slice(0, -1);
    }
    const tempN = (temp.length - 1) / 2;
    if (tempN < N) {
      return 0;
    }
    return tempN - N + 1;
  };

  let i = 0;
  let temp = '';
  while (1) {
    if (i >= S.length) {
      if (temp.length) {
        answer += count(temp);
        break;
      }
      break;
    }
    if (!temp.length && S[i] === 'I') {
      temp = 'I';
    } else if (temp.length && S[i] !== S[i - 1]) {
      temp += S[i];
    } else if (temp.length && S[i] === S[i - 1]) {
      answer += count(temp);
      temp = '';
      i--;
    }
    i++;
  }

  console.log(answer);
}

solution(input);

// 50점 풀이...

// function solution(input) {
//   const N = Number(input[0]);
//   const S = input[2];
//   const PN = 'IO'.repeat(N) + 'I';

//   let count = 0;

//   const DFS = (i, current) => {
//     if (current === PN) {
//       return count++;
//     }
//     if (S[i] !== S[i + 1]) {
//       return DFS(i + 1, current + S[i + 1]);
//     }
//   };

//   for (let i = 0; i < S.length; i++) {
//     if (S[i] === 'I') {
//       DFS(i, 'I');
//     }
//   }

//   console.log(count);
// }
