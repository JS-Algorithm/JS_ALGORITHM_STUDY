function solution(str1, str2) {
  const multiplyNum = 65536;
  const regex = /^[a-zA-Z]+$/;
  const str1Arr = split(str1.toLowerCase());
  const str2Arr = split(str2.toLowerCase());
  function split(str) {
    const splited = [];
    for (let i = 0; i < str.length - 1; i++) {
      const sliced = str.slice(i, i + 2);
      if (regex.test(sliced)) {
        splited.push(sliced);
      }
    }
    return splited;
  }
  const union = []; // 합집합
  const intersection = []; // 교집합
  for (const pair of str1Arr) {
    const index = str2Arr.indexOf(pair);
    union.push(pair);
    if (index !== -1) {
      intersection.push(pair);
      delete str2Arr[index];
    }
  }
  for (const pair of str2Arr) {
    if (pair) union.push(pair);
  }

  if (!intersection.length && !union.length) return multiplyNum;
  return Math.floor((intersection.length / union.length) * multiplyNum.toFixed(0));
}
