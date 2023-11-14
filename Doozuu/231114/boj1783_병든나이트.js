const input = require('fs').readFileSync('ex.txt').toString();
const [n, m] = input.split(' ').map(Number);

if (n === 1) {
  console.log(1);
} else if (n === 2) {
  console.log(Math.min(4, Math.floor((m + 1) / 2)));
} else if (m < 7) {
  console.log(Math.min(4, m));
} else {
  console.log(5 + m - 7);
}
