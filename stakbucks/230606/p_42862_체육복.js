// 최대한 많은 학생이 빌려 입어야 하기 때문에 맨 앞 번호 부터 차례대로 진행. 그렇기 때문에 lost를 정렬하고 시작
// 여벌이 있는데 도난당한 학생 부터 찾아서 해당학생이 다른 학생에게 빌려주는 걸 방지
// 나머지 도난당한 학생들의 앞자리, 뒷자리 번호 학생을 차례대로 여벌이 있는지 확인한다
// 여벌이 더 이상 없는 경우 reserve의 값을 -1 로 바꿔줌

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
      const front = reserve.indexOf(lost[i] - 1);
      const back = reserve.indexOf(lost[i] + 1);
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
