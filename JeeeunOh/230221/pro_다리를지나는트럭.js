function solution(len, limit, wArr) {
  // 다리 길이, 버티는 무게, 트럭 무게 배열
  let time = 0;
  let bridge = Array(len).fill(0);
  let weight = 0;

  while (true) {
    time++;
    // 다리 맨 앞의 트럭 한대 빼기
    weight -= bridge[0];
    bridge.shift();
    // 다리 위 트럭과 대기 중인 트럭이 한대도 없을 때 return
    if (wArr.length == 0 && weight == 0) {
      return time;
    }
    // 대기중인 트럭이 올라갈 수 있을 때
    if (wArr[0] + weight <= limit) {
      weight += wArr[0];
      bridge.push(wArr[0]);
      wArr.shift();
    }
    // 없을 때
    else {
      bridge.push(0);
    }
  }
}
