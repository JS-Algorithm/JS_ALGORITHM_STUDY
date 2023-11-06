const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
const n = parseInt(input[0]);
const graph = input.slice(1, n + 1);

let rowCnt = 0;
let colCnt = 0;

for (let i = 0; i < n; i++) {
    const parts = graph[i].split("X");
    for (let j = 0; j < parts.length; j++) {
        if (parts[j].length >= 2) {
            rowCnt++;
        }
    }
}

for (let i = 0; i < n; i++) {
    let col = 0;
    for (let j = 0; j < n; j++) {
        if (graph[j][i] === ".") {
            col++;
        } else {
            col = 0;
        }
        if (col === 2) {
            colCnt++;
        }
    }
}
console.log(rowCnt, colCnt);
