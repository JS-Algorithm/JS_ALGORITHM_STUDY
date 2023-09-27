function solution(m, musicinfos) {
  m = m.replace(/(C#)/g, 'c').replace(/(D#)/g, 'd').replace(/(F#)/g, 'f').replace(/(G#)/g, 'g').replace(/(A#)/g, 'a');
  // [제목, 재생된 악보]
  musicinfos = musicinfos.map((el) => {
    let [start, end, title, info] = el.split(',');
    let [t1, m1] = start.split(':');
    let [t2, m2] = end.split(':');
    let minutes = (t2 - t1) * 60 + (m2 - m1);
    let new_info = '';
    let i = 0;
    info = info.replace(/(C#)/g, 'c').replace(/(D#)/g, 'd').replace(/(F#)/g, 'f').replace(/(G#)/g, 'g').replace(/(A#)/g, 'a');
    while (i < minutes) {
      new_info += info[i % info.length];
      i++;
    }
    return [title, minutes, new_info];
  });

  let filtered_info = musicinfos.filter((el) => el[2].includes(m));

  if (filtered_info.length === 0) {
    return '(None)';
  } else if (filtered_info.length === 1) {
    return filtered_info[0][0];
  } else {
    let idx = [0, 0];
    filtered_info.map((el, i) => {
      if (el[1] > idx[1]) idx = [i, el[1]];
    });
    return filtered_info[idx[0]][0];
  }
}
