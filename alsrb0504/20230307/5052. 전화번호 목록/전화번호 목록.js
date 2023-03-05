const readFileSyncAddress = '/dev/stdin';
const input = require('fs')
  .readFileSync(readFileSyncAddress)
  .toString()
  .trimEnd()
  .split('\n');

class Node {
  constructor(value = '') {
    this.value = value; //현재 경로까지의 누적값
    this.end = false; //해당 노드에서 끝나는 문자열이 있는지 여부
    this.child = {}; //자식
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(string) {
    let currentNode = this.root; //루트노드를 시작으로 탐색하면서 삽입한다

    for (let i = 0; i < string.length; i++) {
      const currentChar = string[i];

      // 종료 조건 : 해당 단어로 끝나는 번호가 있다면 종료
      if (currentNode.end) return false;

      //만일, 해당 키를 가진 자식이 없다면 새 노드를 만들어준다.
      if (!!!currentNode.child[currentChar]) {
        currentNode.child[currentChar] = new Node(currentChar);
      }

      currentNode = currentNode.child[currentChar]; // 자식 노드로 이동한다.
    }

    currentNode.end = true; //해당 노드에서 끝나는 단어가 있음을 알린다

    return true;
  }
}

const TC = Number(input[0]);
const answer = [];
let line = 1;

for (let i = 0; i < TC; i++) {
  const N = Number(input[line]);

  answer.push(solution(line, N));

  line += N + 1;
}

console.log(answer.join('\n'));

function solution(line, N) {
  const nums = input.slice(line + 1, line + 1 + N).map((el) => el.trimEnd());

  // 문자열 정렬 => ascii 순으로 정렬
  nums.sort();

  // 트라이 생성
  const trie = new Trie();

  // 조건에 맞지 않는 경우 리턴
  for (let i = 0; i < N; i++) {
    if (!trie.insert(nums[i])) return 'NO';
  }

  return 'YES';
}
