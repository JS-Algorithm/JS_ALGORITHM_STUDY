// 3으로 나눈거를 다시 3으로 나눈 나머지에 해당하는 값을 계속 앞에 붙이기
function solution(n) {
  let answer = '';
  let arr = [4, 1, 2];
  while (n >= 1) {
    answer = arr[n % 3].toString() + answer;
    if (Math.ceil(n / 3) - 1 < 1) break;
    n = Math.ceil(n / 3) - 1;
  }
  return answer;
}
