const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

//입력 처리
const N = parseInt(input[0]);
const SIZE = 1000001;

const player = input[1].split(' ').map(Number);
const card = new Array(SIZE).fill(false);
const score = new Array(SIZE).fill(0);

for (const num of player) {
    card[num] = true;
}

//카드의 배수에 해당하는 카드가 있는지 확인
for (const i of player) {
    for (let j = i * 2; j < SIZE; j += i) {
        if (card[j]) {
            score[i]++;
            score[j]--;
        }
    }
}

const result = player.map(num => score[num]).join(' ');

console.log(result);