function solution(plans) {
  waiting = [];
  finish = [];

  // 시간 => 분으로 통일
  plans = plans.map((plan) => getMinute(plan));

  plans.sort((a, b) => a[1] - b[1]); // 오름차순 정렬
  let curSubject = plans.shift();

  while (1) {
    if (plans.length === 0) break;

    if (curSubject[1] + curSubject[2] < plans[0][1]) {
      finish.push(curSubject[0]);
      if (waiting.length > 0) {
        let curFinishTime = curSubject[1] + curSubject[2];
        curSubject = waiting.shift(); // 끝내고 시간 남은 경우 제일 앞에서 하나 꺼내기
        curSubject[1] = curFinishTime; // 시작시간을 현재시간으로 갱신 (현재 과목 끝나는 시간)
      } else {
        curSubject = plans.shift();
      }

      // 현재 과목 시작 시간 + 소요시간 > 다음 과목 시작 시간 => 대기
    } else if (curSubject[1] + curSubject[2] > plans[0][1]) {
      waiting.unshift([
        curSubject[0],
        plans[0][1],
        curSubject[2] - (plans[0][1] - curSubject[1]),
      ]);
      curSubject = plans.shift();
    } else {
      finish.push(curSubject[0]);
      curSubject = plans.shift();
    }
  }
  finish.push(curSubject[0]);

  // 대기 과제에 남아있다면 차례대로 넣어주기
  waiting = waiting.map((f) => f[0]);

  finish = [...finish, ...waiting];

  return finish;
}

const plans = [
  ['aaa', '12:00', '20'],
  ['bbb', '12:10', '30'],
  ['ccc', '12:40', '10'],
];
solution(plans);

function getMinute(plan) {
  let [subject, time, duration] = plan;
  let [hour, min] = time.split(':').map(Number);

  time = hour * 60 + min;
  return [subject, time, Number(duration)];
}
