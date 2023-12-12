function solution(survey, choices) {
  const map = new Map();
  const types = ['RT', 'CF', 'JM', 'AN'].map((t) => t.split(''));

  function SetScore(t1, t2, score) {
    map.set(t1, (map.get(t1) || 0) + Math.abs(score - 4));
    map.set(t2, map.get(t2) || 0);
  }

  survey.forEach(([t1, t2], i) => {
    const score = choices[i];
    score < 4 ? SetScore(t1, t2, score) : SetScore(t2, t1, score);
  });

  return types.map(([t1, t2]) => (map.get(t1) < map.get(t2) ? t2 : t1)).join('');
}
