function solution(key, lock) {
  const KEY_SIZE = key.length;
  const LOCK_SIZE = lock.length;
  const MAX_SIZE = 20; // 자물쇠의 제대 크기 : 20

  // 시계방향으로 90, 180, 270도 돌린 키 생성
  const key2 = rotateKey(key);
  const key3 = rotateKey(key2);
  const key4 = rotateKey(key3);

  // 자물쇠가 들어가는지 확인하기 위한 60 * 60의 2차원 배열
  const lockMap = Array.from({ length: MAX_SIZE * 3 }, () =>
    new Array(MAX_SIZE * 3).fill(0)
  );

  // 자물쇠를 확인 배열(lockMap)의 정중앙에 위치
  // (20, 20) ~ (20 + LOCK_SIZE, 20 + LOCK_SIZE)
  for (let i = 0; i < LOCK_SIZE; i++) {
    for (let j = 0; j < LOCK_SIZE; j++) {
      lockMap[i + MAX_SIZE][j + MAX_SIZE] = lock[i][j];
    }
  }

  // 각 키로 자물쇠를 열 수 있다면 return true
  // 열 수 없다면 return false
  if (checkKey(key)) return true;
  if (checkKey(key2)) return true;
  if (checkKey(key3)) return true;
  if (checkKey(key4)) return true;
  return false;

  /** 인자로 전달 받은 키를 90도 회전시켜 새로운 키를 반환하는 함수 */
  function rotateKey(prevKey) {
    const copyKey = Array.from({ length: KEY_SIZE }, () =>
      new Array(KEY_SIZE).fill(0)
    );

    for (let i = 0; i < KEY_SIZE; i++) {
      for (let j = 0; j < KEY_SIZE; j++) {
        copyKey[j][KEY_SIZE - i - 1] = prevKey[i][j];
      }
    }

    return copyKey;
  }

  /** 현재 키로 자물쇠를 열 수 있는지 확인하는 함수 */
  // 60 * 60 크기의 2차원 배열에서 (i, j)를 (1, 1) ~ (40, 40)까지 반복하며 키를 넣어보는 과정을 진행
  // (i, j)의 위치에서 key의 크기 만큼 lockMap(확인 배열)에 값을 업데이트하고
  // 자물쇠의 위치(20, 20) ~ (20 + LOCK_SIZE, 20 + LOCK_SIZE)를 확인하며
  // 자물쇠를 열 수 있는지 파악
  // 40 * 40 * 20 * 20의 연산 => 대략 O(10 ^ 5)의 연산으로 통과
  function checkKey(currKey) {
    for (let i = 1; i < 2 * MAX_SIZE; i++) {
      for (let j = 1; j < 2 * MAX_SIZE; j++) {
        let isFit = true;

        for (let y = 0; y < KEY_SIZE; y++) {
          for (let x = 0; x < KEY_SIZE; x++) {
            lockMap[i + y][j + x] += currKey[y][x];
          }
        }

        for (let y = 0; y < LOCK_SIZE; y++) {
          for (let x = 0; x < LOCK_SIZE; x++) {
            if (lockMap[MAX_SIZE + y][MAX_SIZE + x] !== 1) {
              isFit = false;
              break;
            }
          }
        }

        // 자물쇠를 해결할 수 있다면 true 리턴
        if (isFit) return true;

        for (let y = 0; y < KEY_SIZE; y++) {
          for (let x = 0; x < KEY_SIZE; x++) {
            lockMap[i + y][j + x] -= currKey[y][x];
          }
        }
      }
    }

    return false;
  }
}
