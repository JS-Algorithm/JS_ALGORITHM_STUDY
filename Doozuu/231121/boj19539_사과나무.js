const input = require('fs').readFileSync('ex.txt').toString().split('\n');
let [N, trees] = input;
N = +N;
trees = trees.split(' ').map(Number);

let one = 0;
let two = 0;
let answer = '';

for (let i = 0; i < N; i++) {
  if (trees[i] % 2) {
    one++;
  }
  two += Math.floor(trees[i] / 2);
}

while (true) {
  if (one === two) {
    answer = 'YES';
    break;
  }
  two--;
  one += 2;
  if (one > two) {
    answer = 'NO';
    break;
  }
}

console.log(answer);
