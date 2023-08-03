// 짝수는 바로 다음 수가 정답
// 홀수는 최하위 비트에서, 가장 가까운 0을 1로 바꾸고 그 다음 비트의 1을 0으로 바꾼 수가 정답
function solution(numbers) {
  const answer = [];

  const getOddNumberResult = (number) => {
    let binaryNum = number.toString(2);
    let binaryNumArr = [...binaryNum.padStart(binaryNum.length + 1, '0')];
    for (let i = binaryNumArr.length - 1; i >= 0; i--) {
      if (binaryNumArr[i] === '0') {
        binaryNumArr[i + 1] = '0';
        binaryNumArr[i] = '1';
        break;
      }
    }
    return parseInt(binaryNumArr.join(''), 2);
  };

  for (const number of numbers) {
    if (number % 2 === 0) {
      // 짝수인 경우
      answer.push(number + 1);
    } else {
      // 홀수인 경우
      answer.push(getOddNumberResult(number));
    }
  }
  return answer;
}

// 111

// 시간 초과
// function solution(numbers) {
//   const compare = (n1, n2) => {
//     n1 = n1.padStart(n2.length, '0');
//     let count = 0;
//     for (let i = 0; i < n2.length; i++) {
//       if (n1[i] !== n2[i]) {
//         count++;
//       }
//       if (count > 2) return false;
//     }
//     return true;
//   };

//   const answer = [];

//   for (const number of numbers) {
//     const binaryNum = number.toString(2);
//     let cmp = number + 1;
//     while (1) {
//       const binaryCmp = cmp.toString(2);
//       if (compare(binaryNum, binaryCmp)) {
//         answer.push(cmp);
//         break;
//       }
//       cmp++;
//     }
//   }
//   return answer;
// }
