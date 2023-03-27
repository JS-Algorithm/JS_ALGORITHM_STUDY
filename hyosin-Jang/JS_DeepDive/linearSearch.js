let newArr = Array.of(1, 2, 3, 4);
console.log('newArr', newArr);

// Array.from
// 유사 배열 객체, 이터러블 객체를 인수로 전달받아 배열로 변환해서 사용

let ArrayFrom = Array.from({length: 2, 0: 'a', 1: 'b'});
console.log('ArrayFrom', ArrayFrom);

let n = 3;
let ArrayFrom2 = Array.from({length: n}, (_, i) => i);
console.log('ArrayFrom2', ArrayFrom2);
