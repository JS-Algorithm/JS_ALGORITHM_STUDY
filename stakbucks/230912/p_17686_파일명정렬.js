function solution(files) {
  const separatedFiles = [];
  for (const file of files) {
    let i = 0;
    while (isNaN(file[i]) || file[i] === ' ') {
      i++;
    }
    const head = file.slice(0, i);
    let j = i;
    while (!isNaN(file[j]) && file[j] !== ' ' && j < i + 5) {
      j++;
    }
    const number = file.slice(i, j);
    const tail = file.slice(j);
    separatedFiles.push([head, number, tail]);
  }
  separatedFiles.sort((a, b) => {
    if (a[0].toLowerCase() === b[0].toLowerCase()) {
      // head 같은 경우
      if (Number(a[1]) === Number(b[1])) {
        // number 같은 경우
        return 1;
      } else {
        return Number(a[1]) - Number(b[1]);
      }
    } else {
      return a[0].toLowerCase() > b[0].toLowerCase() ? 1 : -1;
    }
  });
  return separatedFiles.map((v) => v.join(''));
}
