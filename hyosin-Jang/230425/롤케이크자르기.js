// 롤케이크를 공평하게 자르는 방법의 수 리턴
// 잘랐을 때 종류의 수가 동일해야 함

function solution(topping) {
  let [left, right] = [0, topping.length - 1];

  // map에 순회하면서 앞에서부터 센 종류 등장횟수와 뒤에서부터 센 종류 등장 횟수 미리 기록
  // => O(1) 만에 접근하기 위함
  let map1 = new Map();
  let map2 = new Map();
  let countFromFront = Array.from({length: topping.length}, () => 0);
  let countFromBack = Array.from({length: topping.length}, () => 0);

  // 앞에서부터 기록
  topping.forEach((t, idx) => {
    map1.set(t, (map1.get(t) || 0) + 1);
    countFromFront[idx] = map1.size;
  });

  // 뒤에서부터 기록
  topping.reverse().forEach((t, idx) => {
    map2.set(t, (map2.get(t) || 0) + 1);
    countFromBack[idx] = map2.size;
  });

  countFromBack = countFromBack.reverse();

  let count = 0;

  for (let i = 0; i < topping.length - 1; i++) {
    if (countFromFront[i] === countFromBack[i + 1]) count++;
  }

  return count;
}

const topping = [1, 2, 3, 1, 4];

solution(topping);
