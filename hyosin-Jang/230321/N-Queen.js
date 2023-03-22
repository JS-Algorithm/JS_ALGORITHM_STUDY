function solution(n) {
  let answer = 0;

  const check = Array(n).fill(0);

  const promising = (check, num) => {
    let idx = 0;
    while (idx < num) {
      //이미 놓여있는 모든 퀸에 대해
      // abs(check[num] - check[idx]) : 두 퀸의 행 차이
      // num - idx : 두 퀸의 열 차이 (idx < num이므로  항상 양수)
      // 따라서 두 퀸의 행 차이와 열 차이가 같으면 두 퀸을 잇는 선의 기울기의 절댓값이 1이 되므로, 같은 대각선에 위치한다는 뜻
      if (
        check[num] == check[idx] ||
        Math.abs(check[num] - check[idx]) == num - idx
      ) {
        //같은 행, 같은 대각선 체크
        return false;
      }
      idx++;
    }
    return true;
  };

  const backtracking = (check, cnt, n) => {
    if (cnt == n) {
      // n개의 퀸이 모두 놓인 경우 (기저 조건)
      answer++;
      return;
    }

    for (let i = 0; i < n; i++) {
      check[cnt] = i; // i행 cnt 열에 퀸 배치
      if (promising(check, cnt)) {
        backtracking(check, cnt + 1, n);
      }
    }
  };

  backtracking(check, 0, n);

  // console.log('answer', answer);

  return answer;
}
