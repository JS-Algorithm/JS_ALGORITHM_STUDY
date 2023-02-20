const progresses = [95, 90, 99, 99, 80, 99];
const speeds = [1, 1, 1, 1, 1, 1];

console.log(solution(progresses, speeds));

function solution(progresses, speeds) {
  const answer = [];
  const N = progresses.length;

  // 현재까지 완료한 작업의 개수
  let done_idx = 0;

  // 완료한 작업의 개수가 N보다 작을 떄까지
  while (done_idx < N) {
    // 값 업데이트
    for (let i = done_idx; i < N; i++) {
      progresses[i] += speeds[i];
    }

    let cnt = 0;

    // 현재 맨 앞의 작업이 완료되었다면
    // 다음 작업들도 한 번에 배포 가능한지 확인.
    if (progresses[done_idx] >= 100) {
      for (let i = done_idx; i < N; i++) {
        if (progresses[i] < 100) {
          break;
        }

        cnt++;
      }
    }

    // 배포 가능하다면
    // 배포 가능 개수만큼 완료한 작업 추가
    if (cnt > 0) {
      answer.push(cnt);
      done_idx += cnt;
    }
  }

  return answer;
}
