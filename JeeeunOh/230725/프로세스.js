function solution(prior, loc) {
  let firstLen = prior.length;

  while (true) {
    let cur = prior.shift();

    if (cur >= Math.max(...prior)) {
      if (loc === 0) return firstLen - prior.length;
    } else {
      prior.push(cur);
    }

    loc = loc - 1 === -1 ? prior.length - 1 : loc - 1;
  }
}
