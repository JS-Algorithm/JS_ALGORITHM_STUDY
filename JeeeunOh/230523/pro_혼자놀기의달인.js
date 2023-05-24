function solution(cards) {
  var answer = 0;
  cards.unshift(0);
  let arr = new Array(cards.length).fill(1); // 상자 묶음끼리는 뭘 먼저 열던 상관없음.
  let cnt = [0];

  const calc = (curArr) => {
    // 연 상자들
    let last = curArr.length - 1;
    if (curArr.includes(cards[curArr[last]])) {
      // 열려고 했는데 이미 열려있을 때
      cnt.push(last + 1);
      for (let i = 0; i < curArr.length; i++) arr[curArr[i]] = 0;
      return;
    } else {
      // 아닐 때
      calc([...curArr, cards[curArr[last]]]);
    }
  };

  for (let i = 1; i <= cards.length; i++) {
    if (arr[i]) calc([i]);
  }
  cnt.sort((a, b) => b - a);
  return cnt[0] * cnt[1];
}
