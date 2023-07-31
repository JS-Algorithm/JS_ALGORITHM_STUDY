// 1. 주어진 수가 짝수면 이진수로 변환했을 때 일의 자리수가 무조건 0이므로 마지막 0을 1로 바꾼 수가 가장 작은 수이다.(즉, 주어진 수 + 1이 답이다.)
// 2. 주어진 수가 홀수면 이진수로 변환했을 때 가장 마지막으로 나오는 0을 찾아 1로 바꾸고, 바로 뒤에 나오는 1을 0으로 바꾸어 준다.(만약 0이 나오지 않을 경우 맨 앞에 0을 붙여서 구해준다.)
// ex. 3 -> "11" -> "011" -> "101"
function solution(numbers) {
  function f(x) {
    if (x % 2 === 0) return x + 1;
    let bit = '0' + x.toString(2);
    let idx = bit.lastIndexOf('0');
    return parseInt(`${bit.slice(0, idx)}10${bit.slice(idx + 2)}`, 2);
  }
  const answer = [];
  for (let number of numbers) answer.push(f(number));
  return answer;
}

// 테스트 케이스 2개에서 시간 초과 발생한 풀이
// function solution(numbers) {
//   let answer = [];
//   for (let i = 0; i < numbers.length; i++) {
//     let bit = numbers[i].toString(2); // 이진수 변환
//     let num = numbers[i] + 1; // x보다 큰 수
//     while (true) {
//       let f = 0; // 자릿수 다른 갯수
//       let bit_num = num.toString(2); // x보다 큰 수를 이진수 변환
//       // 길이 다를 수 있으므로 맞춰주기
//       if (bit.length > bit_num.length) {
//         bit_num = '0'.repeat(bit.length - bit_num.length) + bit_num;
//       } else if (bit.length < bit_num.length) {
//         bit = '0'.repeat(bit_num.length - bit.length) + bit;
//       }
//       for (let j = 0; j < bit.length; j++) {
//         if (bit[j] !== bit_num[j]) f++; // 자릿수 다르면 카운트 증가
//         if (f > 2) {
//           num++;
//           continue; // 다른 자릿수가 2보다 크면 num증가시켜서 진행
//         }
//       }
//       if (f <= 2) {
//         answer.push(num);
//         break; // 2보다 같거나 작으면 answer에 담기
//       }
//     }
//   }
//   return answer;
// }
