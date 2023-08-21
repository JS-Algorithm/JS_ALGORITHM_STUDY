function solution(msg) {
  const msgArr = [...msg];
  const dictionary = new Map();
  for (let i = 1; i <= 26; i++) {
    dictionary.set(String.fromCharCode(i + 64), i);
  }

  let temp = ''; // 사전등록 여부 검사할 문자열
  const answer = [];
  while (msgArr.length) {
    temp += msgArr[0];
    if (!dictionary.has(temp)) {
      const currentSize = dictionary.size;
      // 사전 추가
      dictionary.set(temp, currentSize + 1);
      // 정답 추가
      answer.push(dictionary.get(temp.slice(0, -1)));
      // temp 초기화
      temp = '';
    } else {
      msgArr.shift();
    }
  }
  answer.push(dictionary.get(temp));
  return answer;
}
