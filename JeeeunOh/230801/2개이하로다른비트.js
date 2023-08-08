function solution(numbers) {
  return numbers.map((number) => {
    let bi = number.toString(2);
    // 1. 0으로 끝나면 0 -> 1
    if (bi.at(-1) === '0') {
      bi = bi.slice(0, bi.length - 1) + '1';
      return parseInt(bi, 2);
    } else {
      // 2. 1이 아닐 때 01이 존재하면, 10으로 바꿔주기
      bi = '0' + bi; // 11111 .. 인 경우 위해 제일 앞에 0 추가
      for (let i = bi.length; i > 0; i--) {
        if (bi.slice(i - 1, i + 1) === '01') {
          return parseInt(bi.slice(0, i - 1) + '10' + bi.slice(i + 1), 2);
        }
      }
    }
  });
}
