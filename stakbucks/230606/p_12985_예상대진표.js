function solution(n, a, b) {
  let count = 0; //라운드 진행 횟수
  while (1) {
    count++;
    a = Math.ceil(a / 2); //다음 라운드 a의 번호
    b = Math.ceil(b / 2); // 다음 라운드에서 b의 번호
    if (a === b) {
      // 두 번호가 겹치면 만났다는 뜻
      break;
    }
  }
  return count;
}
