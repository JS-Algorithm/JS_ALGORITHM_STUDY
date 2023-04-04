let fs = require('fs');
let str = fs.readFileSync('/dev/stdin').toString().trim();

// 검색을 시작할 인덱스
let startSearchIdx = 0;

let temp = [];

// w로 시작하지 않는 단어면 종료
if (str[0] !== 'w') {
  console.log(0);
  return;
}

// w의 인덱스만 temp에 저장
while (1) {
  let firstIdx = str.indexOf('w', startSearchIdx); // w를 startIndex부터 찾기
  if (firstIdx == -1) break;
  temp.push(firstIdx);
  startSearchIdx = firstIdx + 1; // 다음 w를 찾을 시작 인덱스 갱신
}

// 연속된 인덱스는 제일 앞에 하나로 퉁치기
// w가 0번째 인덱스로 나온 경우도 세어주기 위해 -2 넣어줌
temp.unshift(-2); // ex. [-2, 0, 4 ,5 ,12]

let newArr = [];
for (let i = 1; i < temp.length; i++) {
  if (temp[i] - temp[i - 1] == 1) continue;
  newArr.push(temp[i]);
}

// w를 기준으로 단어 자르기
let sliceArr = [];

for (let i = 0; i < newArr.length; i++) {
  if (i == newArr.length - 1) {
    // 마지막 인덱스라면, 끝까지 자르기
    sliceArr.push(str.slice(newArr[i]));
  } else {
    sliceArr.push(str.slice(newArr[i], newArr[i + 1]));
  }
}

//  sliceArr에 존재하는 단어가 아래 두 가지 조건 만족하는지 확인
// - 순서가 맞아야 함: w > o > l > f
// - 각 알파벳의 개수가 동일해야 함

function isWolfOrder(str) {
  return /^w*o*l*f*$/.test(str);
}

function isWolfCnt(str, cnt) {
  let regex = new RegExp(`^w{${cnt}}o{${cnt}}l{${cnt}}f{${cnt}}$`);
  return regex.test(str);
}

if (
  sliceArr.map((item) => isWolfOrder(item)).filter((s) => s === false).length
) {
  console.log(0);
  return;
}

let result = sliceArr.map((item) => {
  let repeactCnt = item.indexOf('o');
  // 각 정규식에서 repeatCnt만큼 등장하는지 확인
  return isWolfCnt(item, repeactCnt);
});

console.log(result.filter((r) => r === false).length > 0 ? 0 : 1);
