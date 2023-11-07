// 각 자릿수의 합을 구해서, 가장 큰 값을 가지는 알파벳 순대로 정렬해야 한다.
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const alphabets = input.slice(1).map((word) => word.trimEnd());

const alphabetMap = new Map();

alphabets.map((word) => {
  const wordLength = word.length;
  for (let i = wordLength - 1; i >= 0; i--) {
    const char = word[i];
    alphabetMap.set(char, 10 ** (wordLength - i - 1) + (alphabetMap.get(char) || 0));
  }
});

// 값이 큰 순으로 Map 을 정렬한 후 다시 재구성한다.
const sorted = [...alphabetMap.entries()].sort((a, b) => b[1] - a[1]);

let answer = 0;
let currentNum = 9;

sorted.map(([, amount]) => (answer += amount * currentNum--));

console.log(answer);
