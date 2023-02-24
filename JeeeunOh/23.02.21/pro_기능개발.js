// 1. 내 풀이

function solution(pro, speeds) {
  let answer = []; // 배포 순서 정수 배열, 작업 개발 속도
  let idx = 0; // 몇번째 pro가 배포되어야 하는지

  while (idx != pro.length) {
    if (pro[idx] == -1) {
      // 배포된 pro 면 패스
      idx++;
      continue;
    }
    // pro마다 작업량 추가
    for (let i = idx; i < pro.length; i++) {
      if (pro[i] != -1) pro[i] += speeds[i];
    }
    // 해당 pro가 작업량 100 넘었으면
    if (pro[idx] >= 100) {
      let temp = 1;
      // 뒤의 작업 중 배포 가능한 작업들 찾기
      for (let i = idx + 1; i < pro.length; i++) {
        if (pro[i] >= 100) {
          pro[i] = -1;
          temp++;
        } else break;
      }
      // 다음 idx 찾아 떠나기
      answer.push(temp);
      idx++;
    }
  }

  return answer;
}

// 2. 프로그래머스 다른 사람 풀이

function solution(pro, speeds) {
  let answer = [0];
  // 각각 며칠 걸리는지 days에 저장.
  let days = pro.map((item, index) => Math.ceil((100 - item) / speeds[index]));
  let maxDay = days[0];

  // days[i] 배열 돌면서 앞의 기능 배포때 같이 배포되면 answer[j]++ 해줌.
  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = days[i];
      answer[++j] = 1;
    }
  }

  return answer;
}
