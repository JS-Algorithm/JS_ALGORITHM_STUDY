function isPrime(N) {
    if (N === 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(N); i++) {
        if (N % i === 0) {
            return false;
        }
    }
    return true;
}

function convert(n, q) {
    let revBase = "";

    while (n > 0) {
        const [div, mod] = [Math.floor(n / q), n % q];
        n = div;
        revBase += mod.toString();
    }

    return revBase.split("").reverse().join("");
}

function solution(n, k) {
    let answer = 0;
    for (const i of convert(n, k).split("0")) {
        if (i !== "") {
            if (isPrime(parseInt(i))) {
                answer += 1;
            }
        }
    }
    return answer;
}
