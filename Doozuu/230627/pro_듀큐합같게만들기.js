function solution(queue1, queue2) {
  let answer = 0;
  let difference = queue1.reduce((acc, cur, idx) => acc + cur - queue2[idx], 0) / 2;
  let max = queue1.length * 3;
  let [idx1, idx2] = [0, 0];

  while (difference !== 0 && answer < max) {
    if (difference > 0) {
      let p = queue1[idx1];
      idx1++;
      difference -= p;
      queue2.push(p);
    } else {
      let p = queue2[idx2];
      idx2++;
      difference += p;
      queue1.push(p);
    }
    answer++;
  }
  return difference !== 0 ? -1 : answer;
}

// 두 배열의 차를 구한다.
// 두 배열에서 하나의 값을 제외하고 모든 값을 바꾸는 경우(최악의 경우)가 queue1길이의 3배이므로 이를 제한 조건으로 정한다. + 차가 0이면 두 배열 값이 같으므로 이 또한 제한 조건으로 설정.
// 차가 0보다 크다면 queue1의 값이 더 큰 것이므로 차에서 queue1 값을 뺀다. queue1의 index를 증가시킨다.(shift대신)
// 차가 0보다 작으면 queue2의 값이 더 큰 것이므로 차에서 queue2 값을 더한다. queue2의 index를 증가시킨다.(shift대신)
// 카운트를 증가시킨다.
// 차가 0이면 카운트를 return하고 0이 아니면 -1을 return한다.
