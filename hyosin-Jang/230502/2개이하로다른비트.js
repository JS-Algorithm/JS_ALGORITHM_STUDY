const getMinDifferentBit = (number) => {
  if (number % 2) {
    // 홀수인 경우 맨 뒤에서부터 처음으로 나오는 0을 1로 바꾸고, 그 다음 비트를 0으로 바꿔준다.
    let bit = '0' + number.toString(2);

    // 뒤에서부터 처음으로 등장하는 0의 인덱스를 구한다.
    let idx = bit.lastIndexOf('0');

    return parseInt(`${bit.slice(0, idx)}10${bit.slice(idx + 2)}`, 2);
  }
  // 짝수인 경우 0으로 끝나므로 맨 마지막 0을 1로 바꿔준다 => number + 1 반환한다.
  return number + 1;
};

function solution(numbers) {
  let answer = [];

  answer = numbers.map((number) => getMinDifferentBit(number));

  return answer;
}

const numbers = [5, 6, 7, 8, 9];
solution(numbers);
