class Queue {
	//생성자
	constructor () {
		this.items = {};
		this.headIndex = 0;
		this.tailIndex = 0;
	}
	//새로운 원소 추가
	enqueue(item) {
		this.items[this.tailIndex] = item; 
		this.tailIndex++; 
	}
	//현재 큐에서 원소 하나 제거
	dequeue() {
		const item = this.items[this.headIndex]; 
		delete this.items[this.headIndex];
		this.headIndex++; 
		return item;
	}
}


let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

let n = Number(input[0]);
let k = Number(input[1]);
let data = [];
for (let i = 0 ; i < n ; i++) {
	data.push(new Array(n+1).fill(0));
}

for (let i = 2; i <= k ; i++) {
	let [a, b] = input[i].split(' ').map(Number);
	data[a][b] = 1; //사과가 있는 곳 = 1
}
let l = Number(input[k+2]); //뱀의 방향 변환 횟수
let info = [];
for (let i = k + 3 ; i < k + 3 + l ; i++) {
	let [x, c] = input[i].split(' ');
	info.push([Number(x), c]);
}

//처음에 오른 쪽 보고 있음 -> 동, 남, 서, 북
let dx = [0, 1, 0, -1];
let dy = [1, 0, -1, 0];

function turn(direction, c) {
	if (c == 'L') {
		direction = direction - 1;
		if (direction == -1) direction = 3;
	}
	else direction = (direction + 1) % 4;
	return direction;
	}

let [x, y] = [1, 1]; //뱀 머리 위치
data[x][y] = 2; //뱀 존재하는 위치
let direction = 0; //처음에 동쪽 보고 있음
let time = 0; //시작한 뒤에 몇 초 지났나?
let index = 0; //다음 회전 정보
let q = new Queue();
q.enqueue([x,y]); //뱀 차지하고 있는 위치 정보 (꼬리가 앞)
while (true) {
	let nx = x + dx[direction];
	let ny = y + dy[direction];
	//맵 범위 안에 있고, 뱀의 몸통이 없는 위치
	if (1 <= nx && nx <= n && 1 <= ny && ny <= n && data[nx][ny] != 2) {
		if (data[nx][ny] == 0) { //사과 없으면 이동 하고 꼬리 사망
			data[nx][ny] = 2;
			q.enqueue([nx, ny]);
			let [px, py] = q.dequeue();
			data[px][py] = 0;
		}
		if (data[nx][ny] == 1) { //사과 있으면 이동후에 꼬리 생존
			data[nx][ny] = 2;
			q.enqueue([nx, ny]);
		}
	}
	else { //벽, 뱀 몸통이랑 부딪힘
		time += 1;
		break;
	}

	[x, y] = [nx, ny]; //다음위치로 헤드 이동
	time += 1;
	if (index < 1 && time == info[index][0]) { //회전해야할때 회전
		direction = turn(direction, info[index][1]);
		index += 1;
	}
}
console.log(time);