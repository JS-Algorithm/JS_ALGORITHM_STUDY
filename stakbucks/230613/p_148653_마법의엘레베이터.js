// 1의 자리부터 순회하면서 숫자 하나씩 0으로 만들어주기
function solution(storey) {
  const str = [...String(storey)].map(Number).reverse(); // 주어진 숫자 자리수 별로 쪼개기
  str.push(0); // 자릿수가 하나 늘어나는 거 대비해서 추가
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] < 5) {
      count += str[i];
    }
    // 5는 그 다음숫자가 0~4인 경우에 0으로 만들어주고, 그 다음숫자가 5이상인 경우에 10으로 만들어준다
    if (str[i] === 5) {
      if (str[i + 1] < 5) {
        count += str[i];
      } else {
        count += 10 - str[i];
        let j = i + 1;
        str[j]++;

        // 다음숫자가 10이 되면 0으로 만들고 그 다음숫자 +1 해준다
        while (1) {
          if (str[j] === 10) {
            str[j] = 0;
            str[j + 1]++;
            j++;
          } else {
            break;
          }
        }
      }
    }
    if (str[i] > 5) {
      count += 10 - str[i];
      let j = i + 1;
      str[j]++;

      while (1) {
        if (str[j] === 10) {
          str[j] = 0;
          str[j + 1]++;
          j++;
        } else {
          break;
        }
      }
    }
  }

  return count;
}
