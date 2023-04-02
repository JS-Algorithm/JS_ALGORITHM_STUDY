// 아이디어

// 자물쇠가 가운데에 위치해 있고, 상하좌우로 자물쇠 크기만큼 늘린 배열을 만들고
// 완전 탐색으로 키 회전 & 키 이동해가면서 맞는지 탐색하는 문제
// 참고한 블로그: https://kyun2da.github.io/2020/07/16/lockandKey/

// 키를 회전하는 함수
const rotationKey = (key) => {
  const len = key.length;

  // len x len 2차원 배열 생성
  const ret = Array.from(Array(len), () => Array(len).fill(null));

  for (let i = 0; i < len; ++i) {
    for (let j = 0; j < len; ++j) {
      ret[i][j] = key[len - j - 1][i];
    }
  }
  return ret;
};

// 답인지 검사하는 함수
const isAnswer = (newLock, len) => {
  for (let i = len; i < len * 2; i++) {
    for (let j = len; j < len * 2; j++) {
      // 자물쇠가 모두 1로 채워져야하므로 1이 아닌 경우 리턴
      if (newLock[i][j] !== 1) return false;
    }
  }
  return true;
};

const solution = (key, lock) => {
  let answer = true;
  const len = lock.length;
  const arr = Array.from(Array(len * 3), () => Array(len * 3).fill(null));

  for (let i = len; i < len * 2; i++) {
    for (let j = len; j < len * 2; j++) {
      arr[i][j] = lock[i - len][j - len];
    }
  }

  //키를 회전 시키면서 탐색
  for (let i = 0; i < 4; i++) {
    key = rotationKey(key, i);

    //키를 이동시키면서 탐색
    for (let j = 0; j <= arr.length - key.length; j++) {
      for (let k = 0; k <= arr[0].length - key[0].length; k++) {
        const newLock = arr.map(function (arr) {
          return arr.slice();
        });

        for (let m = 0; m < key.length; m++) {
          for (let n = 0; n < key.length; n++) {
            if (newLock[j + m][k + n] === 1 && key[m][n] === 1) {
              //키가 둘다 1이면 2로바꿈 -> 답이 될수 없음
              newLock[j + m][k + n] = 2;
            } else if (newLock[j + m][k + n] === 1 && key[m][n] === 0) {
              newLock[j + m][k + n] = 1;
            } else {
              newLock[j + m][k + n] = key[m][n];
            }
          }
        }
        if (isAnswer(newLock, len)) {
          return true;
        }
      }
    }
  }
  return false;
};
