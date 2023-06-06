function solution(players, callings) {
  let order = new Map();
  let name = new Map();

  players.forEach((item, idx) => {
    order.set(idx, item);
    name.set(item, idx);
  });

  callings.forEach((call) => {
    let number = name.get(call); // 얘가 몇등이었지?
    let preName = order.get(number - 1); // 얘 앞에있던 애 이름이 뭐지?

    order.set(number - 1, call);
    order.set(number, preName);

    name.set(call, number - 1);
    name.set(preName, number);
  });

  let answer = [...order].sort((a, b) => a[0] - b[0]); // 등수대로 sort해서
  answer = answer.map((item) => item[1]); // 이름만 뽑기

  return answer;
}
