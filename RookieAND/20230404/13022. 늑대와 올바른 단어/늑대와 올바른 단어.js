// 문자열 길이가 50을 안 넘기 때문에, 만약 최대 길이라면 n이 12인 케이스까지 충족한다.
let input = require("fs").readFileSync("/dev/stdin").toString().trimEnd();
const possibleCase = [];

for (let i = 1; i < 13; i++) {
  const wolfWord =
    "w".repeat(i) + "o".repeat(i) + "l".repeat(i) + "f".repeat(i);
  possibleCase.push(wolfWord);
}

while (true) {
  let isRemoved = false;
  for (const word of possibleCase) {
    if (input.startsWith(word)) {
      input = input.slice(word.length);
      isRemoved = true;
      break;
    }
  }
  // 문자가 제거되지 않았거나, 길이가 0이라면 반복을 종료해야 함.
  if (!isRemoved || input.length === 0) break;
}

// 반복 종료 후 남은 문자가 없다면 규칙에 맞게 온전히 소거된 것이다.
console.log(input.length === 0 ? 1 : 0);
