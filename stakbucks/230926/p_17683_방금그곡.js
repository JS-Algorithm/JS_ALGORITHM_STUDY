function solution(m, musicinfos) {
  // 각 음악정보에 대한 해시테이블 만들기
  const map = new Map();
  let index = 0;
  for (const musicinfo of musicinfos) {
    const musicinfoArr = musicinfo.split(',');
    const time = calcTime(musicinfoArr[0], musicinfoArr[1]);
    map.set(musicinfoArr[2], {
      index: index++,
      time,
      note: remakeNote([...musicinfoArr[3]], time),
    });
  }

  const candidates = [];
  m = remakeNote([...m], -1);
  for (const [title, {index, time, note}] of map) {
    if (m.length <= note.length) {
      if (note.includes(m)) {
        candidates.push(title);
      }
    }
  }
  candidates.sort((a, b) => {
    const musicA = map.get(a);
    const musicB = map.get(b);
    if (musicA.time === musicB.time) {
      return musicA.index - musicB.index;
    }
    return musicB.time - musicA.time;
  });

  return candidates.length ? candidates[0] : '(None)';

  //시간 계산하는 함수
  function calcTime(start, end) {
    const startArr = start.split(':').map(Number);
    const endArr = end.split(':').map(Number);
    if (startArr[1] > endArr[1]) {
      endArr[0]--;
      endArr[1] += 60;
    }
    return (endArr[0] - startArr[0]) * 60 + (endArr[1] - startArr[1]); // 몇 분 재생됐는지 리턴
  }
  // '#' 소문자로 변환해주고 전체 재생내용 악보 리턴해주는 함수
  function remakeNote(str, time) {
    str.forEach((v, i) => {
      if (v === '#') {
        str[i - 1] = str[i - 1].toLowerCase();
        str.splice(i, 1);
      }
    });
    // m 인 경우
    if (time === -1) return str.join('');

    let i = 0;
    while (str.length < time) {
      str.push(str[i++ % str.length]);
    }
    while (str.length > time) {
      str.pop();
    }

    return str.join('');
  }
}
