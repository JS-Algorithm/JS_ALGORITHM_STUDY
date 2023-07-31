function solution(record) {
  let answer = []; // 결과
  let list = {}; // {아이디: 닉네임}

  // 닉네임 최신사항으로 업데이트
  for (let i = 0; i < record.length; i++) {
    const [option, uid, nickname] = record[i].split(' ');
    if (option === 'Enter' || option === 'Change') {
      list[uid] = nickname;
    }
  }

  // 메시지 출력
  for (let i = 0; i < record.length; i++) {
    const [option, uid, nickname] = record[i].split(' ');
    if (option === 'Enter') {
      answer.push(`${list[uid]}님이 들어왔습니다.`);
    } else if (option === 'Leave') {
      answer.push(`${list[uid]}님이 나갔습니다.`);
    }
  }
  return answer;
}

// 1. record를 먼저 순회하며 닉네임을 가장 최신사항으로 반영시킨다.
//    - Enter나 Change인 경우에는 키,값을 업데이트 해준다. ex. {uid1234: Muzi}
// 2. 닉네임 업데이트가 모두 끝나면 메세지 출력을 시작한다.
//    - Enter면 ${list.uid1234}님이 들어왔습니다. 를 answer에 push.
//    - Leave면 ${list.uid1234}님이 나갔습니다. 를 answer에 push.
// 3. 다 끝나면 answer를 출력한다.
