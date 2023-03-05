// // 1. 메모리 초과 풀이
// const fs = require('fs');
// const input = fs
//   .readFileSync(
//     '/dev/stdin',
//   )
//   .toString()
//   .split('\n');

// let cnt = Number(input[0]);

// // R은 뒤집기, D는 첫번째 수 버리기
// let i = 1;
// while (cnt--) {
//   const str = input[i];
//   let stkCnt = Number(input[i + 1]);
//   let stk = JSON.parse(input[i + 2]);

//   let flag = true;

//   str.split('').map((s) => {
//     if (s === 'R') {
//       let newStk = [];
//       for (let j = stk.length - 1; j >= 0; j--) {
//         newStk.push(stk[j]);
//       }
//       stk = newStk;
//     } else if (s === 'D') {
//       // 삭제할 요소가 없으면 에러처리
//       if (flag && stkCnt === 0) {
//         console.log('error');
//         flag = false;
//       } else {
//         // 삭제할 요소가 있으면 삭제
//         stk.shift();
//         stkCnt--;
//       }
//     }
//   });

//   if (flag) console.log(stk);
//   i += 3;
// }

// 2. 수정한 풀이

const main = () => {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().split('\n');

  let cnt = Number(input[0]);

  // R은 뒤집기, D는 첫번째 수 버리기
  let i = 1;
  while (cnt--) {
    const str = input[i].trim();
    let stk = JSON.parse(input[i + 2].trim());

    let reverse = false;
    let error = false;

    str.split('').map((s) => {
      if (s === 'R') {
        reverse = !reverse;
      } else if (s === 'D') {
        // 삭제할 요소가 없으면 에러처리
        if (stk.length === 0) {
          error = true;
        } else {
          // 삭제할 요소가 있으면 삭제
          if (reverse) stk.pop();
          else stk.shift();
        }
      }
    });

    if (reverse) stk = stk.reverse();

    if (error) {
      console.log('error');
    } else {
      console.log(JSON.stringify(stk));
    }
    i += 3;
  }
};

main();
