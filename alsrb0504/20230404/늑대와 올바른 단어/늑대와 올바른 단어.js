const readFileSyncAddress = "/dev/stdin";
const input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trimEnd()
  .split("\n");

// 단어들의 누적 값을 저장할 배열
// [["w", 1], ["o", 1], ["l", 1], ["f", 1], ...]
const words = [];
let [prev, acc] = ["", 0];

// 입력값으로 주어진 문자열을 순회하며 단어가 바뀔 때마다
// words 배열에 ["w", 3] 같은 원소를 추가
for (let ch of input[0]) {
  if (prev !== ch) {
    words.push([prev, acc]);

    acc = 1;
    prev = ch;
  } else {
    acc++;
  }
}

words.push([prev, acc]);
words.shift(); // 가장 앞의 (초기 세팅을 위한) 더미 값 제거

// words의 사이즈가 4의 배수가 아니라면 => 종료
// 이유 : wolf를 만들 수 없음
if (words.length % 4 !== 0) {
  console.log(0);
  return;
}

// 인덱스를 4씩 옮겨가며 wolf가 유효한지 확인
// 만약 하나라도 유효하지 않다면 종료
for (let i = 0; i < Math.floor(words.length / 4); i++) {
  if (!checkInvalid(i * 4)) {
    console.log(0);
    return;
  }
}

// 위 반복문이 성공적으로 종료 => 올바른 단어
console.log(1);

// words 배열에서 연속된 4개의 인덱스가
// w, o, l, f 값을 가지며 동일한 개수만큼 반복되었는지 확인하는 함수
function checkInvalid(idx) {
  const [_, fir_acc] = words[idx];

  if (words[idx][0] !== "w") return false;
  if (words[idx + 1][0] !== "o" || words[idx + 1][1] !== fir_acc) return false;
  if (words[idx + 2][0] !== "l" || words[idx + 2][1] !== fir_acc) return false;
  if (words[idx + 3][0] !== "f" || words[idx + 3][1] !== fir_acc) return false;

  return true;
}
