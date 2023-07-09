const readFileSyncAddress = process.platform === 'linux' ? '/dev/stdin' : '/Users/jieun/Documents/GitHub/JS_ALGORITHM_STUDY/JeeeunOh/230703/input.txt';

const input = require('fs').readFileSync(readFileSyncAddress).toString().trimEnd().split('\n').map(Number);

input.shift();

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= num / 2; i++) {
    if (num % i == 0) return false;
  }
  return true;
};

input.forEach((num) => {
  let temp = Math.floor(num / 2);
  while (true) {
    if (isPrime(temp) && isPrime(num - temp)) {
      console.log(temp, num - temp);
      break;
    }
    temp--;
  }
});
