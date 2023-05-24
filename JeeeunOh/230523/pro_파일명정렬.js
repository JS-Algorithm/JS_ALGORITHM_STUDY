// 공백 . - 예외처리 추가
function solution(files) {
  let temp = [];

  files.map((file) => {
    file = file.split('');
    let arr = ['', '', ''];
    for (let i = 0; i < file.length; i++) {
      let s = file[i];
      if (s === ' ' || s === '.' || s === '-') {
        if (arr[1] === '') arr[0] += s;
        else arr[2] += s;
      } else if (!(+s >= 0 && +s <= 9) && arr[1] === '') arr[0] += s.toUpperCase();
      else if (+s >= 0 && +s <= 9 && arr[2] === '' && arr[1].length < 5) arr[1] += s;
      else {
        arr[2] = file.slice(i).join('').toUpperCase();
        break;
      }
    }
    temp.push(arr);
  });

  files = files.map((item, idx) => [item, temp[idx]]);

  files.sort((a, b) => {
    if (a[1][0] !== b[1][0]) {
      return a[1][0] > b[1][0] ? 1 : -1;
    } else if (Number(a[1][1]) !== Number(b[1][1])) {
      return Number(a[1][1]) > Number(b[1][1]) ? 1 : -1;
    } else return 0;
  });

  return files.map((item) => item[0]);
}

// 틀렸던 풀이
function solution(files) {
  let answer = [];

  // 1. step1 : string으로만 이루어짐.
  // 2. step2 : number로만 이루어짐. / 최대 5글자.
  // 3. step3 : 나머지
  files.map((file) => {
    file = file.split('');
    let fileArr = [];
    let temp = '';
    let step = 1;
    for (let i = 0; i < file.length; i++) {
      let cur = file[i];
      switch (step) {
        case 1:
          if (+file[i] >= 0 && +file[i] <= 9) {
            // 숫자면 step 2로 넘기기
            fileArr.push(temp.trim());
            temp = file[i];
            step++;
          } else {
            temp += file[i];
          }
          break;
        case 2:
          if (!(+file[i] >= 0 && +file[i] <= 9) || temp.length === 5) {
            // 숫자 아니거나 temp가 5글자 이상이면 step3으로 넘기기
            fileArr.push(temp.trim());
            temp = file[i];
            step++;
          } else {
            temp += file[i];
          }
          break;
      }
      if (step === 3) {
        // step3이면 그 지점부터 싹 다 더하기
        fileArr.push(file.slice(i).join(''));
        break;
      }
    }
    answer.push(fileArr);
  });

  files = files.map((item, idx) => [item, answer[idx]]);

  files.sort((a, b) => {
    if (a[1][0].toUpperCase() !== b[1][0].toUpperCase()) {
      return a[1][0].toUpperCase() > b[1][0].toUpperCase() ? 1 : -1;
    } else if (Number(a[1][1]) !== Number(b[1][1])) {
      return Number(a[1][1]) > Number(b[1][1]) ? 1 : -1;
    } else return 0;
  });

  return files.map((item) => item[0]);
}
