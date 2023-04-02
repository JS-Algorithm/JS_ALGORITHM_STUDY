function solution(picks, minerals) {
  let answer = 0;

  const PICKS_SIZE = picks.reduce((acc, cur) => acc + cur, 0);
  const MINERAL_SIZE = minerals.length;
  const NEED_MINE = Math.ceil(MINERAL_SIZE / 5);
  // 5개의 광물 캘 때, 곡괭이에 따라 비용을 저장할 costs 배열 선언
  // [[5, 25, 125], ...] : 각 원소는 [다이아 곡괭이 비용, 철괭이.. , 돌괭이..]
  let costs = Array.from({ length: NEED_MINE }, () => new Array(3).fill(0));

  // 광물 캐는 비용 구하는 로직
  // idx를 5씩 증가시키며 광물 종류에 따라 비용 계산
  let idx = 0;
  while (idx < MINERAL_SIZE) {
    const stack = [];

    for (let i = idx; i < idx + 5 && i < MINERAL_SIZE; i++) {
      stack.push(minerals[i]);
    }

    const costs_idx = Math.floor(idx / 5);

    stack.forEach((el) => {
      if (el === "diamond") {
        costs[costs_idx][1] += 5;
        costs[costs_idx][2] += 25;
      } else if (el === "iron") {
        costs[costs_idx][1] += 1;
        costs[costs_idx][2] += 5;
      } else {
        costs[costs_idx][1] += 1;
        costs[costs_idx][2] += 1;
      }

      // 다이아는 모든 광물 비용 1
      costs[costs_idx][0] += 1;
    });

    idx += 5;
  }

  // 곡괭이로 캘 수 있는 광물 수보다 많은 광물이 추어졌을 때,
  // 못 캐는 부분은 제거
  while (PICKS_SIZE < costs.length) {
    costs.pop();
  }

  // 다이아 => 철 => 돌괭이 순으로 곡괭이 사용
  for (let i = 0; i < NEED_MINE; i++) {
    if (picks[0] > 0) {
      picks[0]--;
      findMaxCost(0);
    } else if (picks[1] > 0) {
      picks[1]--;
      findMaxCost(1);
    } else {
      findMaxCost(2);
    }
  }

  return answer;

  /** 사용할 곡괭이를 전달하고 현재 가장 큰 비용의 원소를 제거하는 함수 */
  // 현재 캐야하는 비용들 중 돌괭이로 캘 때 비용이 가장 큰 것을 제거
  // 이유 : 돌괭이로 광물을 캘 때의 비용이 가장 큰 것이 상위 광물이 많이 포함되어 있음.
  function findMaxCost(pick) {
    let max_cost = [0, 0, 0];
    let max_idx = -1;

    for (let j = 0; j < costs.length; j++) {
      const curr = costs[j];

      if (max_cost[2] < curr[2]) {
        max_cost = curr;
        max_idx = j;
      }
    }

    costs.splice(max_idx, 1);
    answer += max_cost[pick];
  }
}
