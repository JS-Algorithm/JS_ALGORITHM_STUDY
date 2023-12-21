// 통과 x

function solution(n, build_frame) {
  let answer = [];

  function isIncludes(target) {
    return answer.some((arr) => JSON.stringify(arr) === JSON.stringify(target));
  }

  build_frame.forEach(([x, y, type, action]) => {
    let isValid = false;
    if (type === 0) {
      // 1. 바닥 위
      if (y === 0) isValid = true;
      // 2. 보의 한쪽 끝 위
      if (isIncludes([x - 1, y, 1]) || isIncludes([x + 1, y, 1])) isValid = true;
      // 3. 다른 기둥 위
      if (isIncludes([x, y - 1, 0])) isValid = true;
    }
    if (type === 1) {
      // 1. 한 쪽 기둥 위
      if (isIncludes([x, y - 1, 0]) || isIncludes([x + 1, y - 1, 0])) isValid = true;
      // 2. 두 쪽 모두 다른 보와 연결
      if (isIncludes([x - 1, y, 1]) && isIncludes([x + 1, y, 1])) isValid = true;
    }

    if (isValid) {
      if (action === 0) {
        if (isIncludes([x - 1, y, type]) && isIncludes([x + 1, y, type])) {
          return;
        }
        const idx = answer.findIndex(([i, j, t]) => i === x && j === y && t === type);
        if (idx > -1) answer.splice(idx, 1);
      }
      if (action === 1) {
        answer.push([x, y, type]);
      }
    }
  });

  return answer.sort((a, b) => {
    if (a[0] === b[0]) {
      if (a[1] === b[1]) {
        return a[2] - b[2];
      }
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });
}
// x, y, 구조물 종류(0 기둥, 1 보), 설치/삭제(0 삭제, 1 설치)
// 기둥 설치 : 바닥, 보의 한쪽 끝 위, 다른 기둥 위
// 보 설치 : 한 쪽 기둥 위, 두 쪽 다른 보와 연결
