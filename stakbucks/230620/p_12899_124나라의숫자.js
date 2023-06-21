function solution(n) {
  // 자연수를 124나라 방식으로 변환하는 함수
  const convert = (num) => {
    if (num === 0) return '';
    if (num === 1) return '1';
    if (num === 2) return '2';
    if (num === 3) return '4';
  };

  const go = (num) => {
    let quot = Math.floor(num / 3);
    let mod = num % 3;
    if (mod === 0) {
      quot--;
      mod = 3;
    }

    if (quot > 3) {
      //몫이 3보다 작아질 때까지 계속 3으로 나눠준다
      return go(quot) + convert(mod);
    }

    return convert(quot) + convert(mod);
  };

  return go(n);
}
