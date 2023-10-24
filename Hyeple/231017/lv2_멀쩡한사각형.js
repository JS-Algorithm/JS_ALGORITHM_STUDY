function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

function solution(W, H) {
    const a = W + H - gcd(W, H);
    const total = W * H;
    const result= total - a;

    return result;
}
