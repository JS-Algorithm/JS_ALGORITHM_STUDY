function solution(msg) {
  let answer = [];
  let dictionary = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  let i = 0;
  while (true) {
    let cur = msg[i];
    let next = msg[i + 1];
    let cur_idx = dictionary.indexOf(cur);
    if (!next) {
      if (cur_idx > -1) answer.push(cur_idx + 1);
      return answer;
    }
    let next_idx = dictionary.indexOf(cur + next);
    if (next_idx > -1) {
      while (next_idx > -1) {
        cur = cur + next;
        i++;
        next = msg[i + 1];
        next_idx = dictionary.indexOf(cur + next);
      }
      cur_idx = dictionary.indexOf(cur);
    }
    answer.push(cur_idx + 1);
    dictionary.push(cur + next);
    i++;
  }
  return answer;
}

// 더 좋은 풀이
function solution(msg) {
  var list = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var dic = list.reduce((d, a, i) => ((d[a] = i + 1), d), {});

  var result = [];
  var maxLen = 1;

  for (var i = 0; i < msg.length; i++) {
    var w = msg[i];
    var c = msg[i + 1];
    while (dic[w + c] && i < msg.length - 1) {
      i++;
      w = w + c;
      c = msg[i + 1];
    }
    result.push(dic[w]);
    list.push(dic[w + c]);
    dic[w + c] = list.length;
  }

  return result;
}
