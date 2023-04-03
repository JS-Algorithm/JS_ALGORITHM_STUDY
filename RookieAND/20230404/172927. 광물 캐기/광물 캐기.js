// 각 광물의 구간을 5개씩 쪼개고, 다이아몬드와 철, 그리고 돌의 갯수를 구한다.
// 각 구간 별로 각각의 곡괭이를 사용했을 때 피로도가 얼만큼 드는지를 계산하고, 피로도가 가장 높은 파트부터 정렬하여 다이아로 파괴한다.
// 피로도 산정의 기준은 "돌 곡괭이" 로 한다.
function solution(picks, minerals) {
  function count(arr, mineral) {
    return arr.filter((elm) => elm === mineral).length;
  }

  let answer = 0;
  let picksAmount = picks.reduce((acc, cur) => acc + cur, 0);
  const partOfFatigues = [];
  for (let i = 0; i < minerals.length; i += 5) {
    // 히든 케이스 8 : 곡괭이의 수량이 부족한 경우도 고려하여 체크해주어야 함.
    if (picksAmount === 0) break;
    let mineralSection = minerals.slice(i, i + 5);
    const mineralAmounts = {
      diamond: count(mineralSection, "diamond"),
      iron: count(mineralSection, "iron"),
      stone: count(mineralSection, "stone"),
    };
    const { diamond, iron, stone } = mineralAmounts;
    // 해당 구간을 캘 경우 쌓이는 피로도를 [다이아 곡괭이, 철 곡괭이, 돌 곡괭이] 로 나누어 저장한다.
    partOfFatigues.push([
      diamond + iron + stone,
      diamond * 5 + iron + stone,
      diamond * 25 + iron * 5 + stone,
    ]);
    picksAmount -= 1;
  }

  // 돌 곡괭이 기준으로 가장 피로도가 높은 구간부터 다이아 곡괭이를 사용해야 한다.
  partOfFatigues.sort((a, b) => b[2] - a[2]);
  partOfFatigues.forEach((fatigues) => {
    if (picks[0] > 0) {
      picks[0] -= 1;
      answer += fatigues[0];
      return;
    }
    if (picks[1] > 0) {
      picks[1] -= 1;
      answer += fatigues[1];
      return;
    }
    if (picks[2] > 0) {
      picks[2] -= 1;
      answer += fatigues[2];
      return;
    }
  });
  return answer;
}
