function solution(data, col, row_begin, row_end) {
  data.sort((a, b) => {
    if (a[col - 1] === b[col - 1]) {
      return b[0] - a[0];
    }
    return a[col - 1] - b[col - 1];
  });

  let S_i = 0;
  for (let i = row_begin; i <= row_end; i++) {
    S_i ^= data[i - 1].reduce((acc, cur) => acc + (cur % i), 0);
  }

  return S_i;
}
