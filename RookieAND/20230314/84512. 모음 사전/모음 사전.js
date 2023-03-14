/** 
 * 각 자리수에 해당되는 증가량을 더해준 수, 문자열의 길이만큼 수를 더한다.
 * 증가량은 단어의 자리별로 [781, 156, 31, 6, 1] 순이다.
*/
function solution(word) {
  const vowels = ['A', 'E', 'I', 'O', 'U'];
  const counts = [781, 156, 31, 6, 1];

  let result = word.length;
  Array.from(word).forEach((char, idx) => {
    result += counts[idx] * vowels.indexOf(char);
  });

  return result;
}