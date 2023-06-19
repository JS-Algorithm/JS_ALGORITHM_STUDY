// 이분 탐색
function solution(n, k, enemy) {
  let answer = 0;
  let start = 0;
  let end = enemy.length;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2); // 중간점
    let arr = enemy.slice(0, mid).sort((a, b) => b - a);

    let next = true;
    let temp = 0;
    // 무적권을 먼저 사용해버리고 남은 거 계산
    for (let i = k; i < arr.length; i++) {
      temp += arr[i];
      if (temp > n) next = false;
    }

    // 최적의 지점을 찾기 위해 중간 지점을 왼쪽이나 오른쪽으로 이동시킴
    if (next) {
      answer = mid;
      start = mid + 1;
    } else end = mid - 1;
  }

  return answer;
}
