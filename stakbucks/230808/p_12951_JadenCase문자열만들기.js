function solution(s) {
  const answer = [];
  for (const word of s.split(' ')) {
    if (!word.length) {
      // 만약에 공백문자가 3개 연속으로 나오면 그대로 3개로 출력해야 하는지??
      // 공백 문자 그대로 출력하면 오답이던데 문제 요구사항이 명확하지 않은 거 같음
      answer.push('');
      continue;
    }
    const newWord = [...word];
    newWord[0] = word[0].toUpperCase();
    for (let i = 1; i < newWord.length; i++) {
      newWord[i] = word[i].toLowerCase();
    }
    answer.push(newWord.join(''));
  }
  return answer.join(' ');
}
