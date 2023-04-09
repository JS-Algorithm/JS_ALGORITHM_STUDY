const calcFatigue = (pick, mineral) => {
  // 철로 다이아 캔 경우 5
  if (pick === 'iron' && mineral === 'diamond') return 5;

  // 돌로 철 캔 경우 5
  if (pick === 'stone' && mineral === 'iron') return 5;

  // 돌로 다이아 캔 경우 25
  if (pick === 'stone' && mineral === 'diamond') return 25;

  // 나머지는 모두 1
  return 1;
};

// dfs + 백트래킹으로 광물캐고 되돌려놓기
function solution(picks, minerals) {
  let picksObj = {diamond: picks[0], iron: picks[1], stone: picks[2]}; // 남은 곡갱이 갯수
  let answer = Infinity;

  const dfs = (pickType, durability, fatigue) => {
    if (fatigue >= answer) return;

    // 종료조건 1) 광물 다 캔 경우
    if (!minerals.length) {
      if (answer > fatigue) answer = fatigue;
      return;
    }

    // 다섯 개 다 캔 경우
    if (!durability) {
      // 종료조건 2) 곡괭이 다 쓴 경우
      // picks에 있는 값들을 다 쓴 경우 = picks에서 제일 큰 값이 0인 경우
      if (!Math.max(...Object.values(picksObj))) {
        //console.log('곡괭이', Math.max(...Object.values(picksObj)));
        if (answer > fatigue) answer = fatigue;
        return;
      }
      for (const [type, cnt] of Object.entries(picksObj)) {
        if (!cnt) continue; // 곡갱이 다썼으면 넘어가기
        picksObj[type] -= 1;
        dfs(type, 5, fatigue);
        picksObj[type] += 1; // 되돌려놓기
      }
      return;
    }

    const mineral = minerals.shift(); // 광물 캐기
    dfs(pickType, durability - 1, fatigue + calcFatigue(pickType, mineral));
    minerals.unshift(mineral); // 되돌려놓기
  };

  dfs('diamond', 0, 0);

  return answer;
}

let picks = [1, 3, 2];
let minerals = [
  'diamond',
  'diamond',
  'diamond',
  'iron',
  'iron',
  'diamond',
  'iron',
  'stone',
];
solution(picks, minerals);
