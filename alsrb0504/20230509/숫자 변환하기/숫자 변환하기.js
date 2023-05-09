class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.rear = null;
    this.length = 0;
  }

  enqueue(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      this.rear.next = node;
    }

    this.rear = node;
    this.length++;
  }

  dequeue() {
    if (!this.head) {
      return false;
    }
    const data = this.head.data;
    this.head = this.head.next;
    this.length--;

    return data;
  }
}

// 초기 DP로 접근했다가 조금 생각해보니 BFS로 접근해보면
// x ~ y를 노드(정점)으로 생각했을 때, x에서 출발해서
// 가장 먼저 y에 방문하는 최소 횟수를 구하는 BFS 문제라 판단
function solution(x, y, n) {
  // 이름 알아보기 쉽게 변경
  const [start, end] = [x, y];

  // 예외 경우 : 이동 0!
  if (start === end) return 0;

  // 방문처리 배열과 큐를 생성 후, bfs 시작
  const visited = new Array(y + 1).fill(false);
  const q = new Queue();
  q.enqueue([start, 0]);
  visited[start] = 0;

  while (q.length) {
    const [curr, cnt] = q.dequeue();

    const nextPlusN = curr + n;
    const nextTwo = curr * 2;
    const nextThree = curr * 3;

    // 다음 노드가 end(=Y)에 도달했다면 리턴
    if (nextPlusN === end || nextTwo === end || nextThree === end)
      return cnt + 1;

    if (checkVisited(nextPlusN)) {
      visited[nextPlusN] = true;
      q.enqueue([nextPlusN, cnt + 1]);
    }

    if (checkVisited(nextTwo)) {
      visited[nextTwo] = true;
      q.enqueue([nextTwo, cnt + 1]);
    }

    if (checkVisited(nextThree)) {
      visited[nextThree] = true;
      q.enqueue([nextThree, cnt + 1]);
    }
  }

  // bfs를 끝냈음에도 리턴하지 못했다면 불가능한 경우라 판단
  return -1;

  /** 다음 노드(숫자)로 이동 가능한지 확인하는 함수 */
  function checkVisited(next) {
    if (next <= end && !visited[next]) return true;
    return false;
  }
}

const [x, y, n] = [10, 1000, 5];

console.log(solution(x, y, n));

//
// 실패 풀이(시간 초과)
// 원인: 큐 사용하지 않고 Array.shift()를 사용
function solution(x, y, n) {
  const [start, end] = [x, y];

  if (start === end) return 0;

  const visited = new Array(y + 1).fill(false);
  // 일반 배열을 큐로 사용
  const q = [[start, 0]];
  q.enqueue([start, 0]);
  visited[start] = 0;

  while (q.length) {
    const [curr, cnt] = q.shift(); // 시간 초과 원인.!!

    const nextPlusN = curr + n;
    const nextTwo = curr * 2;
    const nextThree = curr * 3;

    if (nextPlusN === end || nextTwo === end || nextThree === end)
      return cnt + 1;

    if (checkVisited(nextPlusN)) {
      visited[nextPlusN] = true;
      q.push([nextPlusN, cnt + 1]);
    }

    if (checkVisited(nextTwo)) {
      visited[nextTwo] = true;
      q.push([nextTwo, cnt + 1]);
    }

    if (checkVisited(nextThree)) {
      visited[nextThree] = true;
      q.push([nextThree, cnt + 1]);
    }
  }

  return -1;

  function checkVisited(next) {
    if (next <= end && !visited[next]) return true;
    return false;
  }
}
