// 1. 멈춰둔 과제가 여러 개일 경우, 가장 "최근" 에 멈춘 과제부터 시작한다. 스택을 사용
// 2. 새로운 과제를 시작할 시간과 현재 과제를 시작한 시간을 대조하여, 그 시간 안에 과제를 끝낼 수 있는지 체크

function solution(plans) {
  // 아직 끝마치지 못한 과제를 보관하는 stack needFinished
  const needFinished = [];
  // 다 끝난 과제를 넣는 배열 result
  let result = [];

  // 일찍 시작하는 순서대로 플랜을 정렬해야 한다.
  plans.sort(([, aStartTime], [, bStartTime]) => {
    const [aHour, aMin] = aStartTime.split(':').map(Number);
    const [bHour, bMin] = bStartTime.split(':').map(Number);
    return aHour * 60 + aMin - (bHour * 60 + bMin);
  });

  const planAmount = plans.length;
  for (let i = 0; i < planAmount - 1; i++) {
    const [lecture, startTime, playTime] = plans[i];
    const [, nextStartTime, _] = plans[i + 1];

    let usableTime = checkBetweenMinute(startTime, nextStartTime);

    // 과제 해결에 필요한 시간이 더 넉넉한 경우
    if (usableTime >= playTime) {
      result.push(lecture);
      usableTime -= playTime;

      // 미처 끝내지 못한 과제가 있다면 이를 마저 마무리 해야 한다.
      while (usableTime > 0 && needFinished.length) {
        const [unfinishedLecture, needTime] = needFinished.pop();
        if (usableTime >= needTime) {
          usableTime -= needTime;
          result.push(unfinishedLecture);
        } else {
          needFinished.push([unfinishedLecture, needTime - usableTime]);
          break;
        }
      }
    }
    // 현재 과제를 해결하지 못한 경우, 이전시켜야 한다.
    else {
      needFinished.push([lecture, playTime - usableTime]);
    }
  }

  // 맨 마지막 강좌의 경우 "무조건" 끝나기 때문에 추가해줘야 한다.
  result.push(plans.at(-1)[0]);
  result = [...result, ...needFinished.map(([lecture]) => lecture).reverse()];

  function checkBetweenMinute(prev, current) {
    const [prevHour, prevMin] = prev.split(':').map(Number);
    const [curHour, curMin] = current.split(':').map(Number);
    return curHour * 60 + curMin - (prevHour * 60 + prevMin);
  }

  return result;
}
