function solution(word) {
  let answer = 0;
  let alpha = {A: 0, E: 1, I: 2, O: 3, U: 4};
  // 1, 5, 25, 125, 625
  let prevNum = [781, 156, 31, 6, 1];

  // 스트링에서 i 번째 알파벳 순서대로 탐색
  for (let i = 0; i < word.length; i++) {
    // alpha 중 몇번째 알파벳인가?
    let cnt = alpha[word[i]];
    answer += prevNum[i] * cnt + 1;
  }
  return answer;
}
