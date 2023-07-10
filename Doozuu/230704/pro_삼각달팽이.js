function solution(n) {
  let [count, currentX, currentY] = [0, -1, 0];
  let arr = Array.from({length: n}, (_, index) => Array(index + 1).fill(0));
  while (n > 0) {
    for (let i = 0; i < n; i++) {
      // 위에서 아래로
      currentX++;
      count++;
      arr[currentX][currentY] = count;
    }
    for (let i = 0; i < n - 1; i++) {
      // 왼쪽에서 오른쪽으로
      currentY++;
      count++;
      arr[currentX][currentY] = count;
    }
    for (let i = 0; i < n - 2; i++) {
      // 아래에서 위로
      currentX--;
      currentY--;
      count++;
      arr[currentX][currentY] = count;
    }
    n -= 3;
  }

  return arr.flat();
}
