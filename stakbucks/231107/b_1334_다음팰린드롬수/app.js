const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const N = BigInt(input);

  // 기준이 되는 N 보다 큰 가장 작은 수
  let current = BigInt(N + BigInt(1));

  // 자릿수
  const length = current.toString().length;

  // 한 자리 수인 경우 그대로 출력
  if (length === 1) {
    console.log(current.toString());
    return;
  }

  // [왼쪽 절반, 오른쪽 절반]
  let [leftHalf, rightHalf] = [current.toString().slice(0, Math.floor(length / 2)), current.toString().slice(Math.ceil(length / 2))].map((v) => BigInt(v));
  // 자릿수가 홀수인 경우 가운데에 있는 숫자, 짝수인 경우 null
  let middle = length % 2 ? BigInt(current.toString().slice(Math.floor(length / 2), Math.ceil(length / 2))) : null;

  // current가 팰린드롬수인 경우 그대로 출력
  if (BigInt(reverseNumToString(leftHalf)) === rightHalf) {
    console.log(current.toString());
    return;
  }

  // 왼쪽 절반을 뒤집은 수가 오른쪽 절반보다 큰 경우
  // (ex. 94534 -> 정답: 94549)
  if (BigInt(reverseNumToString(leftHalf)) > rightHalf) {
    if (middle !== null) {
      console.log(combineNums(leftHalf, middle, reverseNumToString(leftHalf)).toString());
    } else {
      console.log(combineNums(leftHalf, reverseNumToString(leftHalf)).toString());
    }
    return;
  }

  // 왼쪽 절반을 뒤집은 수가 오른쪽 절반보다 작은 경우
  if (BigInt(reverseNumToString(leftHalf)) < rightHalf) {
    if (middle !== null) {
      // 가운데 수 +1 해주고 왼쪽 절반을 뒤집어서 오른쪽에 넣어준다
      // (ex. 12345 -> 12421)
      middle += BigInt(1);
      if (middle === BigInt(10)) {
        middle = BigInt(0);
        leftHalf += BigInt(1);
      }
      console.log(combineNums(leftHalf, middle, reverseNumToString(leftHalf)).toString());
    } else {
      // 왼쪽 절반을 +1 해주고 뒤집은 값을 오른쪽에 넣어준다
      // (ex. 1234 -> 1331)
      console.log(combineNums(leftHalf + BigInt(1), reverseNumToString(leftHalf + BigInt(1))).toString());
    }
    return;
  }

  // 숫자 뒤집기
  function reverseNumToString(num) {
    return num.toString().split('').reverse().join('');
  }

  // 숫자 합치기
  function combineNums(...nums) {
    return BigInt(nums.reduce((acc, cur) => acc + cur.toString()));
  }
}

solution(input);
