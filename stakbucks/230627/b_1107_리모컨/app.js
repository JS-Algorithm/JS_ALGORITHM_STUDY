const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }
  enqueue(value) {
    this.queue[this.rear++] = value;
  }
  dequeue() {
    const returnValue = this.queue[this.front];
    delete this.queue[this.front++];
    return returnValue;
  }
  size() {
    return this.rear - this.front;
  }
}

// 가고 싶은 채널에 숫자버튼만 눌러서 갈 수 있는 지 체크 ex)5457->7을 누를 수 없다
// 5457에 -1, +1 한 값을 큐에 넣고
// 큐에서 값을 하나씩 꺼내서 갈 수 있는지 체크
// 못가면 다시 -1, +1 한 값 큐에 추가
// 갈 수 있는 채널 나오면 N과의 차이 구하고
// 그 차이와, 100과 N의 차이 중 작은 값이 정답
function solution(input) {
  const [N, M] = input.slice(0, 2).map(Number);
  //고장난 버튼 배열
  let brokenArr = [];
  if (M) {
    brokenArr = input[2].split(' ').map(Number);
  }

  let count = 0;

  // 100과 N의 차이 계산
  const diff = Math.abs(N - 100);

  const queue = new Queue();
  queue.enqueue(N);
  const set = new Set(); // 방문 여부 확인용. 큐에 같은 값 또 들어가는 거 방지
  set.add(N);
  while (queue.size()) {
    const channel = queue.dequeue();
    const channelArr = String(channel).split('').map(Number);

    // channel와 N의 차이가 diff보다 커지면 더 이상 진행할 필요 없이 diff가 정답
    if (Math.abs(channel - N) > diff) {
      return console.log(diff);
    }

    if (channel > 0 && !set.has(channel - 1)) {
      set.add(channel - 1);
      queue.enqueue(channel - 1);
    }
    if (!set.has(channel + 1)) {
      set.add(channel + 1);
      queue.enqueue(channel + 1);
    }
    if (channelArr.filter((v) => !brokenArr.includes(v)).length === channelArr.length) {
      // channelArr가 모두 누를 수 있는 숫자인 경우
      count += channelArr.length; // 숫자 버튼을 누르는 횟수
      count += Math.abs(N - channel); // + 또는 - 버튼 누르는 횟수
      break;
    }
  }
  console.log(Math.min(diff, count));
}

solution(input);
