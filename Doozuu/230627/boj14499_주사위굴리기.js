const input = require('fs').readFileSync('dev/stdin').toString().split('\n');

const [n, m, x, y, p] = input[0].split(' ').map((el) => +el); // 첫째 줄 : n,m,x,y

const Map = [];
for (let i = 1; i < input.length - 1; i++) {
  Map.push(input[i].split(' ')); // 둘째 줄부터 마지막 줄 전까지 : [[0,2],[3,4],[5,6]]
}

const orders = input[input.length - 1].split(' '); // 마지막 줄

const dice = {
  top: 0,
  bot: 0,
  right: 0,
  left: 0,
  front: 0,
  back: 0,
};

// 동서남북에 따라 이동
const move = (num) => {
  const {top, right, left, bot, front, back} = dice;
  let arr;
  switch (num) {
    case '1': {
      arr = [left, top, right, bot, front, back];
      break;
    }
    case '2': {
      arr = [right, bot, left, top, front, back];
      break;
    }
    case '3': {
      arr = [front, right, back, left, bot, top];
      break;
    }
    case '4': {
      arr = [back, right, front, left, top, bot];
      break;
    }
  }
  dice.top = arr[0];
  dice.right = arr[1];
  dice.bot = arr[2];
  dice.left = arr[3];
  dice.front = arr[4];
  dice.back = arr[5];
};

const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];
const solution = (x, y) => {
  for (const order of orders) {
    const nx = x + dx[Number(order) - 1];
    const ny = y + dy[Number(order) - 1];
    if (nx < 0 || ny < 0 || nx >= n || ny >= m) {
      continue;
    }
    move(order);
    if (Map[nx][ny] === '0') {
      Map[nx][ny] = `${dice.bot}`;
    } else {
      dice.bot = Number(Map[nx][ny]);
      Map[nx][ny] = '0';
    }
    console.log(dice.top);
    x = nx;
    y = ny;
  }
};

solution(x, y);
