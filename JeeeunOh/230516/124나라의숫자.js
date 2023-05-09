function solution(n) {
  let arr = ['1', '2', '4'];
  let answer = [];
  let num = 1;

  while (n > 3 ** num) {
    // num 개의 자릿수를 가지는 수 중 n번째 ( n은 1부터 시작 )
    n -= 3 ** num;
    num++;
  }

  while (num) {
    answer.push(arr[(n - 1) % 3]);
    n = Math.ceil(n / 3);
    num--;
  }

  return answer.reverse().join('');
}
