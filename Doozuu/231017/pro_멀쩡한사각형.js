// 공식 사용 풀이
function solution(w, h) {
  function gcd(a, b) {
    return a % b ? gcd(b, a % b) : b;
  }
  return w * h - (w + h - gcd(w, h));
}

// 기울기 사용 풀이
function solution(w, h) {
  const slope = h / w;
  let result = 0;

  for (let i = 1; i <= w; i++) {
    result += Math.ceil(slope * i);
  }

  return (h * w - result) * 2;
}
