function solution(priorities, location) {
  let count = 0;
  let arr = Array.from({length: priorities.length}, (_, i) => [i, priorities[i]]);
  let idx = 0;
  function Pass(idx, arr) {
    for (let i = idx + 1; i < arr.length; i++) {
      if (arr[idx][1] < arr[i][1]) return arr[idx];
    }
    return ['pass', arr[idx]];
  }
  while (true) {
    let result = Pass(idx, arr);
    if (result[0] === 'pass') {
      count++;
      if (result[1][0] === location) return count;
    } else {
      arr.push(result);
    }
    idx++;
  }
}

// 0. 실행 순서를 기록할 변수 : count
// 1. index랑 priority 같이 담아두기 : [ idx, priority ]
// 2. i = 0 부터 뒤로 탐색
// 3. 우선 순위가 낮으면 push
// 4. 뒤에 더 큰 값이 없을 때, count++
//   4-1. [0]번째 값(idx)가 location과 일치하면 return count
//   4-2. 일치하지 않으면 그냥 continue
