function solution(info, querys) {
  const hashData = new Map();
  info.forEach((value) => {
    const data = value.split(' ');
    const score = Number(data.pop());

    let key = data.join('');
    hashData.set(
      key,
      hashData.has(key) ? [...hashData.get(key), score] : [score],
    );
  });

  for (let [key, value] of hashData) {
    hashData.set(
      key,
      value.sort((a, b) => a - b),
    );
  }

  const search = (hashData, conditions) => {
    const score = conditions.pop();
    return Array.from(hashData.keys())
      .filter((key) => conditions.every((v) => key.includes(v)))
      .reduce(
        (a, c) =>
          a +
          hashData.get(c).slice(binarySearch(hashData.get(c), score)).length,
        0,
      );
  };

  const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);

      if (arr[mid] >= target) right = mid;
      else left = mid + 1;
    }

    return left;
  };

  return querys.map((e) => {
    const conditions = e.split(/ and | |-/i).filter((e) => e);
    return search(hashData, conditions);
  });
}