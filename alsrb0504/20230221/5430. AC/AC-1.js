// Deque를 이용한 풀이.

// const readFileSyncAddress = "/dev/stdin";
const readFileSyncAddress = "text.txt";

const input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trimEnd()
  .split("\n");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class Deque {
  head = null;
  tail = null;
  size = 0;

  print() {
    const tmp = [];

    let node = this.head;

    for (let i = 0; i < this.size; i++) {
      tmp.push(node.data);
      node = node.next;
    }

    return tmp;
  }

  getSize() {
    return this.size;
  }

  unshift(value) {
    const new_node = new Node(value);

    if (this.size === 0) {
      head = new_node;
      tail = new_node;
    } else {
      new_node.next = this.head;
      this.head.prev = new_node;
      this.head = new_node;
    }

    this.size++;
  }

  shift() {
    if (this.size === 0) return new Error("Deque is Empty!!");

    const tmp = this.head;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }

    this.size--;

    return tmp.data;
  }

  push(value) {
    const new_node = new Node(value);

    if (this.size === 0) {
      this.head = new_node;
      this.tail = new_node;
    } else {
      new_node.prev = this.tail;
      this.tail.next = new_node;
      this.tail = new_node;
    }

    this.size++;
  }

  pop() {
    if (this.size === 0) return new Error("Deque is Empty!!");

    const tmp = this.tail;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    this.size--;

    return tmp.data;
  }
}

const tc = Number(input[0]);
const answer = [];

for (let i = 0; i < tc; i++) {
  answer.push(solution(i * 3 + 1));
}

console.log(answer.join("\n"));

function solution(l) {
  const commands = input[l].trimEnd().split("");
  const N = Number(input[l + 1]);
  const str = input[l + 2].trimEnd();
  const arr = str
    .slice(1, str.length - 1)
    .split(",")
    .map(Number);

  // 예외처리 : 원소가 없는 경우
  if (N === 0) {
    arr.pop();

    // 원소가 없는데 삭제 명령이 있다면 에러 발생.
    if (commands.includes("D")) return "error";
  }

  // Deque 생성
  const deque = new Deque();

  for (let i = 0; i < arr.length; i++) {
    deque.push(arr[i]);
  }

  // 삭제 방향을 정할 flag 변수 (뒤집혔는지)
  let isReverse = false;

  for (let i = 0; i < commands.length; i++) {
    const comd = commands[i];

    if (comd === "R") {
      isReverse = !isReverse;
    }
    // 2. 삭제 명령
    else {
      // 2-1. 삭제 불가능 => 에러 발생
      if (deque.getSize() === 0) return "error";

      // 2-2. 현재 뒤집혔는지 여부에 따라
      // 배열의 앞 또는 뒤의 원소 삭제
      if (isReverse) {
        deque.pop();
      } else {
        deque.shift();
      }
    }
  }

  // 결과 출력
  const result = deque.print();

  return `[${isReverse ? result.reverse().join(",") : result.join(",")}]`;
}
