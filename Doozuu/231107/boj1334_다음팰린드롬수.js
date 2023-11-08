// N보다 큰 팰린드롬 수 중에서 가장 작은 수 구하기
// 대칭, 대칭, 비교할 거 없으면 하나 큰 수
// 안되면 +1 하고 다시 시도
// 한 자리 수면 그냥 +1 한 값 출력
const N = require('fs').readFileSync('ex.txt').toString();

function check(input) {
  let input_str = input.toString();
  let Len = input_str.length;
  let isSymmestry = true;

  for (let i = 0; i <= Math.floor(Len / 2); i++) {
    if (input_str[i] !== input_str[Len - i - 1]) {
      isSymmestry = false;
      break;
    }
  }

  if (!isSymmestry) {
    return check(input + 1);
  } else {
    return input;
  }
}

function checkSymmetry(input) {
  let input_str = input.toString();
  let Len = input_str.length;
  let newStr = '';

  for (let i = 0; i <= Math.floor(Len / 2); i++) {
    if (Len % 2 === 0) {
      newStr += input_str[i];
    } else {
      if (i === Math.floor(Len / 2)) {
        if (input_str[i] !== '0') {
          newStr += (+input_str[i] + 1).toString();
        } else {
          newStr += input_str[i];
        }
      } else {
        newStr += input_str[i];
      }
    }
  }

  if (Len % 2 === 0) {
    newStr += [...newStr].reverse().join('');
  } else {
    newStr += [...newStr].reverse().slice(1, Len).join('');
  }

  return newStr;
}

let c1 = checkSymmetry(+N + 1);
let c2 = check(+N + 1);

if (N.toString().length === 1) {
  console.log(+N + 1);
} else {
  console.log(Math.min(+c1, +c2));
}
