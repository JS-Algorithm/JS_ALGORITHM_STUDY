/*
생각한 규칙
가장 맨 밑에 있는 원반을 3까지 옮기고
그 다음 맨 밑에 있는 원반을 3까지 옮기고... 반복
그 과정에서 기둥에 n개의 원반이 있을 때 n-1개의 원반은 3이 아닌 다른 기둥으로 옮겨놔야함.
*/

function solution(n) {
  const answer = [];

  const hanoi = (n, start, end, mid) => {
    // 1. 이동해야 하는 원반이 1개면 중간 거칠 필요 x -> 바로 answer에 push
    if (n === 1) answer.push([start, end]);
    else {
      // 2. start => end로 이동해야 하는 원반이 2개 이상이면
      // 2-1. start -> mid로 n-1개를 이동시키고
      hanoi(n - 1, start, mid, end);
      // 2-2. start -> end로 1개를 이동시키고
      answer.push([start, end]);
      // 2-3. mid로 옮긴 n-1개를 start를 거쳐 end로 이동시켜야 함.
      hanoi(n - 1, mid, end, start);
    }
  };

  // n개의 원반을 2를 거쳐서 1->3 으로 옮겨야 함.
  hanoi(n, 1, 3, 2);

  return answer;
}
