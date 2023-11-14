const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
const wordList = [];
let ans = 0;
const dic = {};

const n = parseInt(input[0]);
for (let i = 1; i <= n; i++) {
    wordList.push(input[i].trim());
}

for (let i of wordList) {
    let cnt = i.length;
    for (let j of i) {
        if (!dic[j]) {
            dic[j] = 10 ** (cnt - 1);
        } else {
            dic[j] += 10 ** (cnt - 1);
        }
        cnt--;
    }
}

const valuesList = Object.values(dic).sort((a, b) => b - a);

let num = 9;
for (let i of valuesList) {
    ans += i * num;
    num--;
}

console.log(ans);
