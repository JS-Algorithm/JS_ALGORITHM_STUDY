// 2개를 1->3으로 옮기기
// 1개를 1->2로 옮기기 + 1개를 1->3으로 옮기기
// 1개를 2->3으로 옮기기

function solution(n) {
  let result = [];
  const arr = [1, 2, 3];
  const go = (n, from, to) => {
    const newTo = arr.filter((v) => v !== from && v !== to)[0];
    if (n === 1) {
      result.push([from, to]);
      return;
    }

    go(n - 1, from, newTo);
    go(1, from, to);
    go(n - 1, newTo, to);
  };

  go(n, 1, 3);
  return result;
}
