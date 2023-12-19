function solution(picks, minerals) {
  var answer = 0;
  let len = Math.ceil(minerals.length / 5);
  let maxLen = picks.reduce((a, b) => a + b);
  let arr = [];
  if (maxLen === 0) return 0; // 곡괭이가 하나도 없는 경우
  minerals = minerals.splice(0, maxLen * 5); // 더이상 사용할 곡괭이가 없을 경우를 위해

  for (let a = 0; a < len; a++) {
    let obj = {d: 0, i: 0, s: 0};
    minerals.splice(0, 5).map((v) => obj[v[0]]++); // 광물 개수 카운트
    arr.push([
      obj.d * 1 + obj.i * 1 + obj.s * 1, // 곡괭이별 피로도 계산
      obj.d * 5 + obj.i * 1 + obj.s * 1,
      obj.d * 25 + obj.i * 5 + obj.s * 1,
    ]);
  }
  // 피로도가 큰 순서로 내림차순 정렬하여 다이아 -> 철 -> 돌 순서대로 곡괭이 사용
  arr
    .sort((a, b) => b[2] - a[2])
    .map((v) => {
      if (picks[0] > 0) return picks[0]--, (answer += v[0]);
      if (picks[1] > 0) return picks[1]--, (answer += v[1]);
      if (picks[2] > 0) return picks[2]--, (answer += v[2]);
    });

  return answer;
}
