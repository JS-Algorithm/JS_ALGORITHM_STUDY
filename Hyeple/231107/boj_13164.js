const fs = require("fs");

const input = fs.readFileSync("/dev/stdin", "utf-8").split("\n");
const [n, k] = input[0].split(" ").map(Number);
const Length = input[1].split(" ").map(Number);
const tmp = [];

for (let i = 0; i < n - 1; i++) {
    tmp.push(Length[i + 1] - Length[i]);
}

tmp.sort((a, b) => a - b);

let result = 0;

for (let i = 0; i < n - k; i++) {
    result += tmp[i];
}

console.log(result);
