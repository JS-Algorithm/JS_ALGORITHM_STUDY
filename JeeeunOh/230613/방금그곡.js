const duration = (a, b) => {
  let timeA = Number(a.substring(0, 2)) * 60 + Number(a.substring(3));
  let timeB = Number(b.substring(0, 2)) * 60 + Number(b.substring(3));
  // +1을 안해주면 테케 오류남... 왤까
  return timeB - timeA + 1;
};

function solution(m, musicinfos) {
  let answer = ['', -1];

  musicinfos
    .map((item) => item.split(','))
    .forEach((music) => {
      let [timeA, timeB, name, code] = music;

      let fullTime = duration(timeA, timeB);
      let fullCode = '';
      let idx = 0;

      let cnt = fullTime;

      while (cnt--) {
        fullCode += code[idx];
        idx++;
        if (idx != code.length && code[idx] === '#') {
          fullCode += code[idx];
          idx++;
        }
        if (idx === code.length) idx = 0;
      }

      for (let i = 0; i < fullCode.length - m.length; i++) {
        let subCode = fullCode.substring(i, i + m.length);
        if (i + m.length < fullCode.length && fullCode[i + m.length] === '#') continue;
        if (subCode === m && answer[1] < fullTime) {
          answer = [name, fullTime];
          break;
        }
      }
    });

  return answer[1] === -1 ? '(None)' : answer[0];
}
