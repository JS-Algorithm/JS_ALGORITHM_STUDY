const queue1 = [3, 2, 7, 2];
const queue2 = [4, 6, 5, 1];

console.log(solution(queue1, queue2));

function solution(queue1, queue2) {
  const SIZE_DOUBLE = 2 * queue1.length;

  // 각 큐의 초기 합을 저장
  let sum1 = queue1.reduce((acc, cur) => acc + cur, 0);
  let sum2 = queue2.reduce((acc, cur) => acc + cur, 0);
  // q1, q2의 인덱스 관리를 위한 변수 선언
  let [idx1, idx2] = [0, 0];

  // 합이 같거나 || 불가능 할 때까지 반복
  // 두 큐 중 큰 큐의 첫 번째 원소를 작은 큐의 뒤에 삽입하고
  // 큰 큐의 인덱스를 증가
  while (sum1 !== sum2 && idx1 < SIZE_DOUBLE && idx2 < SIZE_DOUBLE) {
    if (sum1 < sum2) {
      const tmp = queue2[idx2++];
      sum1 += tmp;
      sum2 -= tmp;
      queue1.push(tmp);
    } else {
      const tmp = queue1[idx1++];
      sum2 += tmp;
      sum1 -= tmp;
      queue2.push(tmp);
    }
  }

  // 만약 idx가 큐의 사이즈가 2배가 되었다면 불가능
  if (idx1 === SIZE_DOUBLE || idx2 === SIZE_DOUBLE) return -1;

  // 그렇지 않다면 가능 => 인덱스 합 만큼 조작
  return idx1 + idx2;
}
