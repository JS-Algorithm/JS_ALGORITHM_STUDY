class Queue {
	//생성자
	constructor () {
		this.items = {}; //사전 자료형
		this.headIndex = 0;
		this.tailIndex = 0;
	}
	//새로운 원소 추가
	enqueue(item) {
		this.items[this.tailIndex] = item; //꼬리 위치에 아이템 추가
		this.tailIndex++; //꼬리 인덱스 하나 증가
	}
	//현재 큐에서 원소 하나 제거
	dequeue() {
		const item = this.items[this.headIndex]; //현재 헤드가 가리키는 아이템
		delete this.items[this.headIndex]; //해당 아이템이 있던 곳 할당 해제
		this.headIndex++; //헤드가 다음 원소 가리키도록 함
		return item; //현재 헤드가 가리키는 아이템 리턴
	}
	peek() {
		return this.items[this.headIndex]; //현재 헤드 인덱스의 아이템 리턴
	}
	getLength() {
		return this.tailIndex - this.headIndex; //현재 큐에 포함된 원소 개수
	}
}


let fs = require('fs').readFileSync('/dev/stdin');
let input = fs.toString().split('\n');

let [s,t] = input[0].split(' ').map(Number);

let queue = new Queue();
queue.enqueue([s, '']);
let visited = new Set([s]);
let found = false;

if(s == t) { //시작값과 목표값 동일
	console.log(0);
	process.exit();
}

while (queue.getLength() != 0) {
	let [value, opers] = queue.dequeue();
	if (value > 1e9) continue; //값 범위 넘어감
	if (value == t) { //목표값 도달
		console.log(opers);
		found = true;
		break;
	}
	for (let oper of ['*', '+', '-', '/']) {
		let nextValue = value;
		if (oper == "*") nextValue *= value;
		if (oper == "+") nextValue += value;
		if (oper == "-") nextValue -= value;
		if (oper == "/" && value != 0) nextValue = 1;
		if (!visited.has(nextValue)) {
			queue.enqueue([nextValue, opers + oper]);
			visited.add(nextValue);
		}
	}
}
//바꿀수 없음
if(!found) console.log(-1);