function solution(plans) {
  const unfinishedPlans = []; // 완료하지 못한 과제들 스택

  const finished = []; // 정답

  // 시작 시간 빠른 순서로 정렬
  const sortedPlans = plans.sort((a, b) => convertToMin(a[1]) - convertToMin(b[1]));

  // 현재 시간
  let currentTime = convertToMin(sortedPlans[0][1]);

  sortedPlans.forEach(([name, start, playtime], idx) => {
    currentTime = convertToMin(start);
    unfinishedPlans.push([idx, Number(playtime)]);

    while (unfinishedPlans.length) {
      const [i, leftMinutes] = unfinishedPlans.pop();
      const finishTime = currentTime + leftMinutes;
      if (idx < sortedPlans.length - 1 && finishTime > convertToMin(sortedPlans[idx + 1][1])) {
        // 끝나는 시간이 다음 과제 시작시간을 넘어가는 경우

        // 다시 unfinishedPlans에 진행한 시간을 빼서 넣어주고
        unfinishedPlans.push([i, finishTime - convertToMin(sortedPlans[idx + 1][1])]);

        // 다음 과제로 넘어간다
        break;
      } else {
        // 다음 과제 시간을 안넘어가는 경우
        currentTime = finishTime;
        finished.push(sortedPlans[i][0]);
      }
    }
  });

  return finished;

  // 24시간 형식을 분으로 변환
  function convertToMin(time) {
    const [hour, min] = time.split(':').map(Number);
    return hour * 60 + min;
  }
}
