function solution(skill, skill_trees) {
  let answer = 0;

  for (let i = 0; i < skill_trees.length; i++) {
    if (checkSkills(skill_trees[i])) answer++;
  }

  return answer;

  function checkSkills(str) {
    let cnt = 0;

    // cnt는 skill 트리의 cnt번째 스킬을 의미
    // 문자열 str의 원소를 하나씩 확인하며
    // 만약, str[j]가 스킬에 포함되어 있을 때,
    // 1. skill[cnt] (= 현재 찍어야 하는 스킬)이 str[j]와 같다면
    //      다음 스킬 순서로 cnt 증가
    // 2. 그렇지 않다면 순서가 틀린 경우 => 실패
    for (let j = 0; j < str.length; j++) {
      if (skill.includes(str[j])) {
        if (str[j] === skill[cnt]) {
          cnt++;
        } else {
          return false;
        }
      }
    }

    return true;
  }
}
