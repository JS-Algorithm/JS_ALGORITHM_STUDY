function solution(book_time) {
  const rooms = [];
  let answer = 1;

  const parseTimeStr = (timeStr) => timeStr.split(':').map(Number);
  const hourToMinute = (hour, minute) => hour * 60 + minute;

  // 시작 시간이 빠른 순대로, 만약 동일하다면 먼저 끝나는 순서대로 나열.
  book_time.sort(([aStart, aEnd], [bStart, bEnd]) => {
    const [aStartHour, aStartMinute] = parseTimeStr(aStart);
    const [aEndHour, aEndMinute] = parseTimeStr(aEnd);
    const [bStartHour, bStartMinute] = parseTimeStr(bStart);
    const [bEndHour, bEndMinute] = parseTimeStr(bEnd);

    return hourToMinute(aStartHour, aStartMinute) ===
      hourToMinute(bStartHour, bStartMinute)
      ? hourToMinute(aEndHour, aEndMinute) - hourToMinute(bEndHour, bEndMinute)
      : hourToMinute(aStartHour, aStartMinute) -
          hourToMinute(bStartHour, bStartMinute);
  });

  rooms[0] = book_time[0];

  book_time.slice(1).forEach(([nextStart, nextEnd]) => {
    const [nextStartHour, nextStartMinute] = parseTimeStr(nextStart);

    let shouldOpenNewRoom = true;

    for (let roomIdx = 0; roomIdx < rooms.length; roomIdx++) {
      // 현재 입실 중인 손님의 퇴실 시간 정보를 파싱한다.
      const [curEndHour, curEndMinute] = parseTimeStr(rooms[roomIdx][1]);

      // 현재 방에 들어온 손님의 퇴실 시간 + 10분 < 현재 손님의 입실 시간인지 체크한다.
      // 만약 맞다면 기존의 손님을 퇴실시키고, 새로운 손님을 현재 방에 맞이해야 한다.
      if (
        curEndHour * 60 + curEndMinute + 10 <=
        nextStartHour * 60 + nextStartMinute
      ) {
        rooms[roomIdx] = [nextStart, nextEnd];
        shouldOpenNewRoom = false;
        break;
      }
    }

    // 만약 빈 방이 없다면 새로운 방에 손님을 모셔야 함
    if (shouldOpenNewRoom) {
      rooms.push([nextStart, nextEnd]);
      answer = rooms.length;
    }
  });

  return answer;
}