/** 
 * 문제 해결 실패 : DFS 원리 및 점수 집계와 관련된 해답을 보고 풀이 작성
*/
function solution(n, info) {
  let answer = Array(11).fill(0);
  let maxCount = 0;

  function findMaxPoint(apeachCount, ryanCount, usedShots, point, arr) {
    
    // 주어진 화살의 갯수보다 많이 발사했을 경우 케이스 실패. return  
    if (n < usedShots) return; 

    // 10점까지 모든 과녁을 전부 다 처리했을 경우, 최종 점수를 집계한다.
    if (point > 10) {
      let diffCount = ryanCount - apeachCount;
      if (maxCount < diffCount) {
        // 화살이 남았을 경우 전부 0점에 발사하여 "가장 낮은 점수" 를 맞춘 경우로 처리하게끔 한다.
        arr[10] = n - usedShots;
        maxCount = diffCount; 
        answer = arr;
      }
      return;
    }

    // 아직 화살을 더 발사할 수 있다면 이를 처리한다.
    if (n > usedShots) {
      let current = [...arr];
      current[10 - point] = info[10 - point] + 1;
      findMaxPoint(
        apeachCount,
        ryanCount + point,
        usedShots + info[10 - point] + 1,
        point + 1,
        current
      );
    }

    // 어피치가 승리하는 조건, 어피치와 비기는 조건을 모두 체크하여 재귀 실행한다.
    if (info[10 - point] > 0) {
      findMaxPoint(apeachCount + point, ryanCount, usedShots, point + 1, arr);
    } else {
      findMaxPoint(apeachCount, ryanCount, usedShots, point + 1, arr);
    }
  }
 
  findMaxPoint(0, 0, 0, 0, answer);

  return maxCount <= 0 ? [-1] : answer;
}