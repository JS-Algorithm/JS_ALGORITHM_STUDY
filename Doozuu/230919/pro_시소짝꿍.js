function solution(weights) {
  const dict = {};

  for (let weight of weights) {
    dict[weight] = (dict[weight] || 0) + 1;
  }

  weights.sort((a, b) => a - b);

  let answer = 0;

  for (let weight of weights) {
    // 1 : 1
    if (dict[weight] > 1) answer += dict[weight] - 1;
    // 3 : 2
    if (dict[weight * (3 / 2)] > 0) answer += dict[weight * (3 / 2)];
    // 4 : 2 -> 2 : 1
    if (dict[weight * 2] > 0) answer += dict[weight * 2];
    // 4 : 3
    if (dict[weight * (4 / 3)] > 0) answer += dict[weight * (4 / 3)];

    dict[weight] -= 1;
  }
  return answer;
}
