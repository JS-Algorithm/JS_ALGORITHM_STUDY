function solution(survey, choices) {
  const map = new Map();
  ['R', 'T', 'C', 'F', 'J', 'M', 'A', 'N'].forEach((item) => {
    map.set(item, 0);
  });

  for (let i = 0; i < survey.length; i++) {
    setScore(survey[i], choices[i]);
  }

  let answer = '';

  ['RT', 'CF', 'JM', 'AN'].forEach((pair) => {
    const [item1, item2] = pair.split('');
    if (map.get(item1) >= map.get(item2)) {
      answer += item1;
    } else answer += item2;
  });

  return answer;

  function setScore(question, choice) {
    const [disagree, agree] = question.split('');
    switch (choice) {
      case 1:
        map.set(disagree, map.get(disagree) + 3);
        break;
      case 2:
        map.set(disagree, map.get(disagree) + 2);
        break;
      case 3:
        map.set(disagree, map.get(disagree) + 1);
        break;
      case 5:
        map.set(agree, map.get(agree) + 1);
        break;
      case 6:
        map.set(agree, map.get(agree) + 2);
        break;
      case 7:
        map.set(agree, map.get(agree) + 3);
        break;
      default:
        break;
    }
  }
}
