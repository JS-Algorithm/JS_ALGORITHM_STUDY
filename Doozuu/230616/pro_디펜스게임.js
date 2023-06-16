function solution(n, k, enemy) {
  let answer = 0;
  let start = 0;
  let end = enemy.length;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let arr = enemy.slice(0, mid).sort((a, b) => b - a);

    let next = true;
    let temp = 0;
    for (let i = k; i < arr.length; i++) {
      temp += arr[i];
      if (temp > n) next = false;
    }

    if (next) {
      answer = mid;
      start = mid + 1;
    } else end = mid - 1;
  }

  return answer;
}
