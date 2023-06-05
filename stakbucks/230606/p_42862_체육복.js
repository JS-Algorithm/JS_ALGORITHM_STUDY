function solution(n, lost, reserve) {
  let count = 0; //빌리는 데 성공한 학생 수
  lost.sort((a, b) => a - b);

  // 여벌이 있으면서 도난당한 학생을 먼저 찾는다
  for (let i = 0; i < lost.length; i++) {
    const self = reserve.findIndex((e) => e === lost[i]);
    if (self !== -1) {
      reserve[self] = -1;
      lost[i] = -1; //해당 값을 -1로 바꿔서 아래 반복문에서 또 찾는 걸 방지
      count++;
    }
  }

  for (let i = 0; i < lost.length; i++) {
    if (lost[i] !== -1) {
      const front = reserve.findIndex((e) => e === lost[i] - 1);
      const back = reserve.findIndex((e) => e === lost[i] + 1);
      if (front !== -1) {
        //앞번호가 여벌이 있는 경우
        reserve[front] = -1;
        count++;
      } else if (back !== -1) {
        //뒷번호가 여벌이 있는 경우
        reserve[back] = -1;
        count++;
      }
    }
  }
  return n - lost.length + count;
}
