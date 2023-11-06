function solution(n, k) {
    function factorial(num) {
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
        return result;
    }

    const answer = [];
    const numbers = Array.from({ length: n }, (_, idx) => idx + 1);

    k--;

    for (let i = n - 1; i >= 0; i--) {
        const fact = factorial(i);
        const index = Math.floor(k / fact);
        answer.push(numbers.splice(index, 1)[0]);
        k %= fact;
    }

    return answer;
}
