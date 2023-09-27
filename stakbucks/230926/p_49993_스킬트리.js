function solution(skill, skill_trees) {
  const map = new Map();
  [...skill].forEach((v, i) => map.set(v, i)); // 인덱스를 value로 Map에 저장
  let count = 0;
  for (const skillTree of skill_trees) {
    let expectedVal = 0; // 스킬 순서상 필요한 값
    let flag = true;
    for (const skill of skillTree) {
      if (map.has(skill)) {
        if (map.get(skill) !== expectedVal) {
          flag = false;
          break;
        } else {
          expectedVal++;
        }
      }
    }
    if (flag) {
      count++;
    }
  }
  return count;
}
