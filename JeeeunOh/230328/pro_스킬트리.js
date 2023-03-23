function solution(skill, skill_trees) {
    let answer = 0;
    let skillMap = skill.split('');
    
    skill_trees.forEach((item)=>{
        // 0번째 스킬부터 들어올 수 있게 -1 세팅
        let lastSkill = -1;
        
        for(const idx in item){
            // 해당 스킬이 스킬트리 내에 있는지 확인
            const alpha = item[idx];
            let alphaIdx = skillMap.findIndex(skill => skill===alpha);
            // 스킬 트리 내에 존재한다면
            if(alphaIdx!=-1){
                // 선행스킬이 arr의 가장 마지막에 들어있는지 확인
                if(lastSkill+1===alphaIdx){
                    lastSkill = alphaIdx;
                } else {
                    break;
                }
            }
            if(alpha===item[item.length-1]) answer++;
        }
    })
    
    return answer;
}