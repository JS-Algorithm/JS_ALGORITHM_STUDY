function solution(arr) {
  let ans = [0, 0];
  // (x, y) 을 왼쪽 대각선 끝점으로 해서 size의 크기를 가지는 정사각형 내 숫자 개수
  const isSame = (x, y, size) => {
    let nextSize = size / 2;
    let standard = arr[x][y]; // 상자 내 원소들이 기준 숫자와 모두 같은지 판별 필요

    for (let i = x; i < x + size; i++) {
      for (let j = y; j < y + size; j++) {
        if (standard != arr[i][j]) {
          // 모두 같지 않다면 각각 판별
          isSame(x, y, nextSize);
          isSame(x + nextSize, y, nextSize);
          isSame(x, y + nextSize, nextSize);
          isSame(x + nextSize, y + nextSize, nextSize);
          return;
        }
      }
    }

    // 위 과정 통과했다면, 상자 내 모든 원소들이 같은 수임 -> 압축
    if (standard === 0) ans = [ans[0] + 1, ans[1]];
    else ans = [ans[0], ans[1] + 1];

    return;
  };

  isSame(0, 0, arr.length);

  return ans;
}
