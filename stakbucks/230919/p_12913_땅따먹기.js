function solution(land) {
  for (let i = 1; i < land.length; i++) {
    land[i][0] += Math.max(...land[i - 1].filter((_, i) => i !== 0));
    land[i][1] += Math.max(...land[i - 1].filter((_, i) => i !== 1));
    land[i][2] += Math.max(...land[i - 1].filter((_, i) => i !== 2));
    land[i][3] += Math.max(...land[i - 1].filter((_, i) => i !== 3));
  }
  return Math.max(...land.at(-1));
}
