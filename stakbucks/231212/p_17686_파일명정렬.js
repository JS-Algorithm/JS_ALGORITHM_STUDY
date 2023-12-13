function solution(files) {
  const strRegex = /\D+/;
  const numRegex = /\d+/;

  return files.sort((a, b) => {
    const [aHead, aNumber] = [a.match(strRegex)[0].toLowerCase(), +a.match(numRegex)[0].replace(/^0+/, '')];
    const [bHead, bNumber] = [b.match(strRegex)[0].toLowerCase(), +b.match(numRegex)[0].replace(/^0+/, '')];

    if (aHead === bHead) {
      if (aNumber === bNumber) return 1;

      return aNumber - bNumber;
    }

    if (aHead > bHead) return 1;
    return -1;
  });
}
