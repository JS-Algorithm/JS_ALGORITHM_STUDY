function solution(plans) {
  const SIZE = plans.length;
  const answer = [];

  // 현재 멈춘 작업을 보관할 스택
  // [ [이름, 남은시간], ["korean", 13 ], ...]
  const stopStack = [];

  // 기존 plans에서 시간 정보를 숫자로 변환한 새로운 배열(infos)생성
  const infos = plans.map((el) => {
    const [name, time, palyTime] = el;
    const [hh, mm] = time.split(":").map(Number);
    const startTime = hh * 60 + mm;
    return [name, startTime, Number(palyTime)];
  });

  // 시작 시간 순으로 정렬
  infos.sort((a, b) => a[1] - b[1]);

  // 0 ~ SIZE - 1까지 반복
  for (let i = 0; i < SIZE - 1; i++) {
    const [name, startTime, playTime] = infos[i];
    const nextStartTime = infos[i + 1][1];

    const needTime = startTime + playTime;

    // 1. 현재 과제를 마무리 한 시간보다 다음 과제의 시작이 작거나 같은 경우
    // 현재 과제를 완료.
    if (needTime <= nextStartTime) {
      answer.push(name);

      // 1-1. 시간이 남는 경우
      // 남은 시간 동안 할 수 있는 멈춘 작업을 진행
      if (needTime < nextStartTime) {
        let availableTime = nextStartTime - needTime;

        while (availableTime > 0 && stopStack.length) {
          const [topName, topRestTime] = stopStack.pop();

          if (topRestTime <= availableTime) {
            availableTime -= topRestTime;
            answer.push(topName);
          } else {
            stopStack.push([topName, topRestTime - availableTime]);
            break;
          }
        }
      }
    }
    // 2. 현재 과제를 마무리 하기 전에 새로운 과제를 시작해야 하는 경우
    // 작업 중지 스택에 현재 작업과 남은 시간 저장
    else {
      const restTime = needTime - nextStartTime;

      stopStack.push([name, restTime]);
    }
  }

  answer.push(infos.at(-1)[0]);

  while (stopStack.length) {
    const [topName, _] = stopStack.pop();
    answer.push(topName);
  }

  return answer;
}

const plans = [
  ["korean", "11:40", "30"],
  ["english", "12:10", "20"],
  ["math", "12:30", "40"],
];

console.log(solution(plans));
