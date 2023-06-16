function solution(n, k, enemy) {
  let answer = 0;
  let start = 0,
    end = enemy.length;

  while (start <= end) {
    // mid 라운드까지 진행했을 때 가능한지
    let mid = Math.floor((start + end) / 2);
    let temp = enemy.slice(0, mid).sort((a, b) => a - b);

    // 가장 적이 많은 k개의 라운드 제외하고 cnt 에 추가
    let cnt = 0;
    for (let i = 0; i < temp.length - k; i++) {
      cnt += temp[i];
    }

    // n 명의 아군으로 cnt 명의 적을 막을 수 있다면 answer 재설정
    if (cnt <= n) {
      answer = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return answer;
}
