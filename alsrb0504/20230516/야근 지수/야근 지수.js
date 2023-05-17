function solution(n, works) {
  // 접근 방법
  // 0 ~ 50000까지의 배열을 미리 선언한 후, works의 개수를 카운트
  // 50000 => 1까지 줄일 수 있는 만큼(n > 0) works에 할당된 값을 줄이고
  // 마지막에 1~50000까지 중에 값이 있으면 피도로 계산에 추가

  const SIZE = 50001; // works의 최대 크기 = 50,000
  const nums = new Array(SIZE).fill(0);
  let answer = 0n;

  // works 카운트
  for (let t of works) nums[t]++;

  for (let i = SIZE - 1; i > 0; i--) {
    // nums[i] : i 시간 만큼 남은 works의 수
    // nums[i]의 값이 있을 경우
    if (nums[i] > 0) {
      // nums[i]보다 n이 더 크다면 nums[i]의 모든 works를 1씩 감소시킬 수 있음
      if (n >= nums[i]) {
        n -= nums[i];
        nums[i - 1] += nums[i];
        nums[i] = 0;
      }
      // 그렇지 않다면 nums[i]의 works를 줄일 수 있는 만큼 줄이고 break!
      // (break 이유 : n이 0이 되기 때문 => 더이상 줄일 수 없음)
      else {
        nums[i - 1] += n;
        nums[i] -= n;
        break;
      }
    }
  }

  // works에 값이 있다면 answer에 추가 (단, BigInt로 변환)
  for (let i = 0; i < SIZE; i++) {
    answer += BigInt(i ** 2 * nums[i]);
  }

  return answer;
}

const [works, n] = [[20000, 19999, 19998, 19997], 0];
// const [works, n] = [[2, 1, 2], 1];

console.log(solution(n, works));
