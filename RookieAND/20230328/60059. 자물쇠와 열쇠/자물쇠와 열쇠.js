// 1. 키로 주어진 M X M 배열을 회전시켜서 자물쇠 영역 일부와 겹쳐야 함.
// 2. 그렇다면 열쇠를 자물쇠와 겹치게 하여 네 차례에 걸쳐 90도 씩 회전시켜 맞는지를 체크
// 3. 열쇠가 맞는지를 체크하려면 자물쇠 영역 N X N 이 모두 1로 채워져야 함.

// 전체 영역을 {N + (M - 1) * 2} X {N + (M - 1) * 2} 로 놓고 탐색을 진행한다.
// 1을 제외하는 이유는 적어도 1줄의 영역은 자물쇠와 열쇠가 겹쳐야 하기 때문이다.

function solution(key, lock) {
  const [M, N] = [key.length, lock.length];
  const matrixSize = N + (M - 1) * 2;

  const matrix = Array.from({length: matrixSize}, () =>
    new Array(matrixSize).fill(0),
  );

  // 전체 영역 중에서, 정 가운데에 자물쇠를 그대로 놓아야 한다.
  for (let i = M - 1; i <= matrixSize - M; i++) {
    for (let j = M - 1; j <= matrixSize - M; j++) {
      matrix[i][j] = lock[i - M + 1][j - M + 1];
    }
  }

  // (0, 0) 부터 (matrixSize - M, matrixSize - M) 까지 탐색을 진행한다.
  // 해당 지점을 기점으로 열쇠를 놓은 뒤에, 네 차례 회전을 통해 자물쇠의 영역이 모두 꽉 차는지를 체크한다.
  for (let rotated = 0; rotated < 4; rotated++) {
    const rotatedKey = rotate(key, M);
    for (let i = 0; i <= matrixSize - M; i++) {
      for (let j = 0; j <= matrixSize - M; j++) {
        if (checkIsVaild(i, j, rotatedKey)) return true;
      }
    }
    key = rotatedKey;
  }
  return false;

  function checkIsVaild(y, x, key) {
    const newMatrix = matrix.map((row) => [...row]);
    // 현재 열쇠를 자물쇠의 영역과 겹칠 수 있는 만큼 겹친다.
    for (let i = 0; i < M; i++) {
      for (let j = 0; j < M; j++) {
        // 열쇠가 돌기 모양이라면 해당 영역을 채운다.
        // 단, 열쇠의 돌기와 자물쇠의 돌기가 만나면 안되므로 0으로 처리한다.
        if (key[i][j]) {
          newMatrix[i + y][j + x] = !newMatrix[i + y][j + x];
        }
      }
    }
    // 자물쇠 내부를 순회하면서 모든 빈 곳이 전부 채워졌는지를 조사한다.
    let isVaild = true;
    for (let i = M - 1; i <= matrixSize - M; i++) {
      if (!isVaild) break;
      for (let j = M - 1; j <= matrixSize - M; j++) {
        if (!newMatrix[i][j]) {
          isVaild = false;
          break;
        }
      }
    }
    return isVaild;
  }

  function rotate(key) {
    const rotatedKey = Array.from({length: M}, () => new Array(M).fill(0));
    for (let i = 0; i < M; i++) {
      for (let j = 0; j < M; j++) {
        rotatedKey[i][j] = key[M - j - 1][i];
      }
    }
    return rotatedKey;
  }
}
