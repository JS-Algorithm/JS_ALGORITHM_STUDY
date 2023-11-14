const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

if (n === 1) {
    console.log(1);
} else if (n === 2) {
    console.log(Math.min(4, Math.floor((m - 1) / 2) + 1));
} else if (m <= 6) {
    console.log(Math.min(4, m));
} else {
    console.log(m - 2);
}

//나이트 움직임 4개로 그리디 가능
