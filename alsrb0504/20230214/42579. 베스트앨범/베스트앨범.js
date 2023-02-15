function solution(genres, plays) {
  const answer = [];

  // map
  // key : 장르
  // value : [ 누적 play 횟수, Array:[ [index, play 횟수], ... ] ]
  const genres_map = new Map();

  for (let i = 0; i < genres.length; i++) {
    const gen = genres[i];
    const cnt = plays[i];

    if (genres_map.has(gen)) {
      const info = genres_map.get(gen);

      info[0] += cnt;
      info[1].push([i, cnt]);
    } else {
      genres_map.set(gen, [cnt, [[i, cnt]]]);
    }
  }

  // map의 값인, 장르별 play 횟수와 기록 배열 추출.
  const result = [...genres_map.values()];

  // 장르를 누적 play 횟수 순으로 정렬.
  result.sort((a, b) => b[0] - a[0]);

  // 장르별 배열에서 해당 음악들을 play 횟수 순으로 정렬.
  result.forEach((el) => {
    const records = el[1];

    records.sort((a, b) => b[1] - a[1]);

    // 최대 2개까지 answer에 push.
    for (let i = 0; i < 2 && i < records.length; i++) {
      answer.push(records[i][0]);
    }
  });

  return answer;
}
