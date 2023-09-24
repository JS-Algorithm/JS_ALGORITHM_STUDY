// 스킬을 하나하나 뜯어보면서, 현재 선행한 스킬보다 앞서거나 이전의 스킬을 배운 경우는 패싱
function solution(baseSkill, skillTrees) {
    let answer = 0;
    for (const skillTree of skillTrees) {
        let currentLearned = [];
        let canLearn = true;
        for (const skill of skillTree) {
            // 스킬 트리에 있으며, 이전에 선행한 스킬 이후에 배워야 하는 스킬인지 체크 
            if (baseSkill.indexOf(skill) > -1) {
                const curLearnedSkill = baseSkill.indexOf(skill);
                const prevLearnedSkill = currentLearned.length - 1;
                if (curLearnedSkill === prevLearnedSkill + 1) {
                    currentLearned.push(skill);
                } else {
                    canLearn = false;
                }
            }
        }
        if (canLearn) answer++;
    }
    return answer;
}