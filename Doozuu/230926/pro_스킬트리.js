function solution(skill, skill_trees) {
  let skill_list = []; // 가능한 스킬 순서 담기
  let skill_alphabet = skill.split('');
  for (let i = 1; i <= skill.length; i++) {
    skill_list.push(skill.slice(0, i));
  }
  // skil에 포함되는 문자들만 모아 스킬트리 여부 확인
  let filtered_trees = skill_trees.filter((el) => {
    let extract = '';
    for (let str of el) {
      if (skill_alphabet.includes(str)) extract += str;
    }
    return extract === '' || skill_list.includes(extract);
  });
  return filtered_trees.length;
}

// 깔끔한 풀이
// startWith과 정규표현식 활용
function solution(skill, skill_trees) {
  const restRemoveRegex = new RegExp('[^' + skill + ']', 'gi');
  return skill_trees.filter((v) => {
    const tempSkill = v.replace(restRemoveRegex, '');
    return skill.startsWith(tempSkill);
  }).length;
}
