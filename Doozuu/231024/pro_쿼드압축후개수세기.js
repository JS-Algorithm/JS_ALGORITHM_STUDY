function solution(arr) {
  function split(array) {
    let newArr = Array.from({length: 4}, () => []);
    let half = array.length / 2;
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (i < half && j < half) {
          newArr[0].push(array[i][j]);
        } else if (i < half && j >= half) {
          newArr[1].push(array[i][j]);
        } else if (i >= half && j < half) {
          newArr[2].push(array[i][j]);
        } else {
          newArr[3].push(array[i][j]);
        }
      }
    }
    return newArr;
  }
  function press(board) {
    let val = board[0][0];
    let len = board.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (val !== board[i][j]) return split(board);
      }
    }
    return val;
  }
  let answer = press(arr);
  if (typeof answer === 'number') {
    return answer === 1 ? [0, 1] : [1, 0];
  }
  let count = 0;
  while (count < Math.sqrt(arr.length)) {
    answer = answer
      .map((el) => {
        if (typeof el === 'number') {
          return el;
        } else {
          let half = Math.sqrt(el.length);
          let sampleArr = Array.from({length: half}, () => []);
          for (let i = 0; i < el.length; i++) {
            sampleArr[Math.floor(i / half)].push(el[i]);
          }
          return press(sampleArr);
        }
      })
      .flat();
    count++;
  }
  let zero = answer.filter((el) => el === 0).length;
  let one = answer.length - zero;
  return [zero, one];
}
