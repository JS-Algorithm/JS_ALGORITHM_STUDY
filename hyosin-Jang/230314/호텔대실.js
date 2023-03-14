// 시간을 분으로 바꾸는 함수
const timeToMin = (t) => {
  // :으로 문자열 split
  const tmp = t.split(':');
  // 문자를 숫자로 변환한 다음, 분으로 바꾸는 연산
  return parseInt(tmp[0]) * 60 + parseInt(tmp[1]);
};

function solution(book_time) {
  // 종료 시간이 들어갈 배열
  var room = [];

  // 시작 시간순 정렬
  book_time.sort();

  for (let i = 0; i < book_time.length; i++) {
    // 시작 시간 분으로 변환
    const startTime = timeToMin(book_time[i][0]);
    // 종료 시간 분으로 변환
    const endTime = timeToMin(book_time[i][1]);
    // 시작 시간과 같거나 시작 시간보다 작은 수 인덱스 찾기
    const idx = room.findIndex((r) => r <= startTime);
    // 만약 존재하지 않는 경우, 종료시간 push
    if (idx === -1) room.push(endTime);
    // 존재하는 경우, 새로운 종료시간으로 갱신
    else room[idx] = endTime;
  }

  // 사용된 방의 개수 반환
  return room.length;
}
