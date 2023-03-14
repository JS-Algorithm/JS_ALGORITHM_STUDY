// https://school.programmers.co.kr/learn/courses/30/lessons/155651

function solution(book_time) {
  // 최대 필요한 방의 수
  const MAX_SIZE = 1000;

  // 시간 정보를 숫자로 변경 ("14:10" => 1410)
  const timeInfo = book_time.map((el) =>
    el.map((time) => Number(time.split(":").join("")))
  );

  // 예약 시작 순으로 오름차순 정렬
  timeInfo.sort((a, b) => a[0] - b[0]);

  timeInfo.forEach((el, idx) => {
    let [_, bookEnd] = el;

    // 끝나는 시간 + 10 처리
    // 50분 이상이면 시간 추가, 아니면 10분 추가
    const updated = bookEnd % 100 >= 50 ? bookEnd + 50 : bookEnd + 10;
    timeInfo[idx][1] = updated;
  });

  // 예약 룸의 정보를 저장할 배열 선언
  const rooms = Array.from({ length: MAX_SIZE }, () => []);

  for (let [bookStart, bookEnd] of timeInfo) {
    for (let i = 0; i < MAX_SIZE; i++) {
      // 현재 방에 예약 가능한지를 확인하는 변수
      let isPossible = true;

      for (let [roomStart, roomEnd] of rooms[i]) {
        // 현재 방에 예약이 불가능한 경우 => 체크
        if (!(roomStart >= bookEnd || roomEnd <= bookStart)) {
          isPossible = false;
          break;
        }
      }

      // 현재 방에 예약이 가능하다면 예약 정보 추가
      if (isPossible) {
        rooms[i].push([bookStart, bookEnd]);
        break;
      }
    }
  }

  // 리턴 : 예약 정보가 있는 방의 수만큼 카운트
  return rooms.reduce((acc, room) => acc + (room.length ? 1 : 0), 0);
}

const book_time = [
  ["15:00", "17:00"],
  ["16:40", "18:20"],
  ["14:20", "15:20"],
  ["14:10", "19:50"],
  ["18:20", "21:20"],
];

console.log(solution(book_time));
