function solution(survey, choices) {
  const map = new Map();
  let curKey, score;
  choices.map((choice, idx) => {
    if (choice < 4) {
      curKey = survey[idx][0];
    } else if (choice > 4) {
      curKey = survey[idx][1];
    } else return;

    score = Math.abs(choice - 4);
    if (map.has(curKey)) {
      map.set(curKey, map.get(curKey) + score);
    } else {
      map.set(curKey, score); // score로 초기화
    }
  });

  function getBiggerIdx(pair) {
    // 둘다 없거나 값 같은 경우 사전순으로 큰 알파벳 리턴
    if (
      map.get(pair[0]) == map.get(pair[1]) ||
      (!map.get(pair[0]) && !map.get(pair[1]))
    )
      // 사전순으로 정렬했을 때 첫번째 값 리턴
      return pair.split('').sort().join('')[0];

    if (!map.get(pair[0])) return pair[1];
    if (!map.get(pair[1])) return pair[0];
    return map.get(pair[0]) > map.get(pair[1]) ? pair[0] : pair[1];
  }
  // RT , CF, JM, AN
  const mbti = ['RT', 'CF', 'JM', 'AN'];

  return mbti.map((pair) => getBiggerIdx(pair)).join('');
}

// survey = ['AN', 'CF', 'MJ', 'RT', 'NA'];
// choices = [5, 3, 2, 7, 5];
// solution(survey, choices);
