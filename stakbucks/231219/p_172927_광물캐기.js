// DFS 완전탐색 풀이
function solution(picks, minerals) {
  const [maxDia, maxIron, maxStone] = picks;

  const diamondPick = new Map().set('diamond', 1).set('iron', 1).set('stone', 1);
  const ironPick = new Map().set('diamond', 5).set('iron', 1).set('stone', 1);
  const stonePick = new Map().set('diamond', 25).set('iron', 5).set('stone', 1);

  let minFatigue = Infinity;

  DFS(0, 0, 0, 0, 0);

  function DFS(index, dia, iron, stone, fatigue) {
    // (minerals배열에서 캐기 시작 할 광물의 인덱스, 사용한 다이아, 철, 돌 곡괭이, 누적 피로)

    // 더 이상 사용가능한 곡괭이가 없거나, 캘 광물이 없으면 종료
    if (dia + iron + stone === maxDia + maxIron + maxStone || index === minerals.length) {
      minFatigue = Math.min(minFatigue, fatigue);
      return;
    }

    // 기본적으로 5개씩 캐지만, 캘 광물이 더 이상 없는 경우 캘 수 있는 데 까지만 캔다
    let nextIndex = index + 5 > minerals.length - 1 ? minerals.length : index + 5;

    // 캘 광물들 slice
    const slicedMinerals = minerals.slice(index, nextIndex);

    if (dia < maxDia) {
      const nextFatigue = slicedMinerals.reduce((acc, cur) => acc + diamondPick.get(cur), fatigue);
      DFS(nextIndex, dia + 1, iron, stone, nextFatigue);
    }
    if (iron < maxIron) {
      const nextFatigue = slicedMinerals.reduce((acc, cur) => acc + ironPick.get(cur), fatigue);
      DFS(nextIndex, dia, iron + 1, stone, nextFatigue);
    }
    if (stone < maxStone) {
      const nextFatigue = slicedMinerals.reduce((acc, cur) => acc + stonePick.get(cur), fatigue);
      DFS(nextIndex, dia, iron, stone + 1, nextFatigue);
    }
  }

  return minFatigue;
}

// 그리디 풀이
function solution(picks, minerals) {
  let [diaPicks, ironPicks, stonePicks] = picks;
  const diamondPick = new Map().set('diamond', 1).set('iron', 1).set('stone', 1);
  const ironPick = new Map().set('diamond', 5).set('iron', 1).set('stone', 1);
  const stonePick = new Map().set('diamond', 25).set('iron', 5).set('stone', 1);

  // minerals를 다 섯개씩 쪼개서 diamond가 많은 순으로 정렬 => diamond 곡괭이 먼저 사용!

  const splitMinerals = [];
  let i = 0;

  while (i < minerals.length) {
    const j = i + 5 > minerals.length - 1 ? minerals.length : i + 5;

    const mineralsCnt = countMineralCategories(minerals.slice(i, j));
    splitMinerals.push(mineralsCnt);

    i = j;
  }

  while (diaPicks + ironPicks + stonePicks < splitMinerals.length) {
    splitMinerals.pop();
  }

  let fatigue = 0;

  splitMinerals
    .sort((a, b) => {
      const [aDia, aIron, aStone] = a;
      const [bDia, bIron, bStone] = b;

      if (a.length !== b.length) {
        return b.length - a.length;
      }

      if (aDia === bDia) {
        if (aIron === bIron) {
          return bStone - aStone;
        }
        return bIron - aIron;
      }
      return bDia - aDia;
    })
    .forEach(([dia, iron, stone]) => {
      if (diaPicks) {
        fatigue += diamondPick.get('diamond') * dia + diamondPick.get('iron') * iron + diamondPick.get('stone') * stone;
        diaPicks--;
      } else if (ironPicks) {
        fatigue += ironPick.get('diamond') * dia + ironPick.get('iron') * iron + ironPick.get('stone') * stone;
        ironPicks--;
      } else if (stonePicks) {
        fatigue += stonePick.get('diamond') * dia + stonePick.get('iron') * iron + stonePick.get('stone') * stone;
        stonePicks--;
      }
    });
  return fatigue;

  function countMineralCategories(minerals) {
    let [dia, iron, stone] = [0, 0, 0];

    minerals.forEach((mineral) => {
      switch (mineral) {
        case 'diamond':
          dia++;
          break;
        case 'iron':
          iron++;
          break;
        case 'stone':
          stone++;
          break;
      }
    });

    return [dia, iron, stone];
  }
}
