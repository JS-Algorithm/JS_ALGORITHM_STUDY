class Hotel {
  hotel = new Map();

  createRoom(endTime) {
    this.hotel.set(this.hotel.size, endTime); // (방 번호, 예약 끝나는 시간)
  }

  book(startTime, endTime) {
    // 예약 가능한 방 찾기
    for (const [number, bookedEndTime] of this.hotel) {
      if (addTenMinutes(bookedEndTime) > startTime) continue;
      else {
        // 예약 가능한 방인 경우
        this.hotel.set(number, endTime);
        return;
      }
    }
    // 예약 가능한 방이 없는 경우
    this.createRoom(endTime);
  }

  // 방 개수
  getRooms() {
    return this.hotel.size;
  }
}

function solution(book_time) {
  const hotel = new Hotel();
  book_time.sort().forEach((time) => {
    const [startTime, endTime] = time;
    hotel.book(startTime, endTime);
  });
  return hotel.getRooms();
}

// 10분 더해서 "HH:MM" 형식으로 리턴
function addTenMinutes(time) {
  let [hour, min] = time.split(':');
  min = (Number(min) + 10).toString();
  if (min >= 60) {
    hour++;
    min -= 60;
  }
  return `${`${hour}`.padStart(2, '0')}:${`${min}`.padStart(2, '0')}`;
}
