function solution(numbers) {
  const answer = numbers.map((num) => {
    const numToBinary = num.toString(2).split('');
    const binaryLength = numToBinary.length;
    // 모든 수가 전부 1로 이루어져 있다면, 가장 앞에 '10' 을 추가하고 뒤는 1로 채운다.
    if (!new Set(numToBinary).has('0')) {
      const result = ['1', ...numToBinary];
      result[1] = '0';
      return parseInt(result.join(''), 2);
    }
    // 그 외의 경우에는 가장 뒤에 있는 0을 1로 변환해주고, 다시 십진수로 변환해준다.
    // 단, 1 앞에 0이 있는 경우 (01) 인 경우에는 (10) 으로 변환해줘야 한다.
    let endIsOne = false;
    for (let i = binaryLength - 1; i >= 0; i--) {
      if (numToBinary[i] === '0') {
        numToBinary[i] = '1';
        // 직전에 1로 끝났다면 이전의 숫자는 0으로 변환해주어야 한다 (10을 만들기 위해)
        if (endIsOne) {
          numToBinary[i + 1] = '0';
        }
        return parseInt(numToBinary.join(''), 2);
      } else {
        endIsOne = true;
      }
    }
  });
  return answer;
}