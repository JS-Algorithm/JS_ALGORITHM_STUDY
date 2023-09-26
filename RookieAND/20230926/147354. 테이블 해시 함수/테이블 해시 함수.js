function solution(data, col, row_begin, row_end) {
  data.sort((a, b) =>
    a[col - 1] === b[col - 1] ? b[0] - a[0] : a[col - 1] - b[col - 1],
  );
  const S = data
    .slice(row_begin - 1, row_end)
    .map((cols, idx) => cols.reduce((acc, cur) => acc + (cur % (idx + row_begin)), 0));
  const result = S.slice(1).reduce((acc, cur) => acc ^ cur, S[0]);
  return result;
}
