// Enter : 유저아이디, 이름 매핑해서 push
// Change : 이미 있는 유저아이디를 새 이름으로 매핑

// Enter이면 [유저아이디]님이 들어왔습니다.
// Leave이면 [유저아이디]님이 나갔습니다.

function solution(record) {
    var answer = [];
    let map = new Map();
    
    record.map((s)=>{
        let list = s.split(" ");
        let [command, userId, userName] = [list[0], list[1], list[2]];
        
        if(command==='Enter' || command==='Change') map.set(userId, userName);
    })
    
     record.map((s)=>{
        let list = s.split(" ");
        let [command, userId, userName] = [list[0], list[1], list[2]];
         
        if(command==='Enter'){
            answer.push(`${map.get(userId)}님이 들어왔습니다.`);
        } else if (command==='Leave'){
            answer.push(`${map.get(userId)}님이 나갔습니다.`);
        }
    })
    
    return answer;
}