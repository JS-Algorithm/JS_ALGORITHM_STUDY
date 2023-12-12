function solution(users, emoticons) {
  const discountRate = [10, 20, 30, 40];
  const rates = [];
  let result = [0, 0];

  function DFS(depth, arr) {
    if (depth === emoticons.length) return rates.push(arr);
    for (let i = 0; i < discountRate.length; i++) {
      DFS(depth + 1, arr.concat(discountRate[i]));
    }
  }
  DFS(0, []);

  for (const rate of rates) {
    let [subscribers, sumPrice] = [0, 0];

    for (const user of users) {
      const [userRate, price] = user;
      const ratedPrices = emoticons.reduce((acc, cur, idx) => {
        if (rate[idx] >= userRate) return acc + cur * (1 - rate[idx] * 0.01);
        return acc;
      }, 0);

      if (ratedPrices >= price) subscribers++;
      else sumPrice += ratedPrices;
    }

    if (subscribers > result[0] || (subscribers === result[0] && sumPrice >= result[1])) result = [subscribers, sumPrice];
  }

  return result;
}
