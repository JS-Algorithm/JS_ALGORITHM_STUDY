function solution(files) {
  function isNumber(n) {
    return n !== ' ' && !Number.isNaN(Number(n));
  }

  function Seperate(name) {
    let [head, number] = ['', ''];
    for (let i = 0; i < name.length; i++) {
      if (isNumber(name[i])) {
        number += name[i];
        if (!isNumber(name[i + 1])) break;
      } else {
        head += name[i];
      }
    }
    return [head, Number(number)];
  }

  return files.sort((a, b) => {
    const [head1, number1] = Seperate(a);
    const [head2, number2] = Seperate(b);

    if (head1.toUpperCase() === head2.toUpperCase()) {
      if (number1 === number2) return;
      return number1 - number2;
    }
    return head1.localeCompare(head2);
  });
}
