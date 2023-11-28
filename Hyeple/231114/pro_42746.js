function solution(numbers) {
    const numbersStr = numbers.map((num) => num.toString());
    numbersStr.sort((a, b) => b + a - (a + b));

    console.log(numbersStr);
    return BigInt(numbersStr.join("")).toString();
}
