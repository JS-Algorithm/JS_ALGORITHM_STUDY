function op1(arr) {
    const n = arr.length;
    const m = arr[0].length;
    const ans = new Array(n).fill().map(() => new Array(m).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            ans[i][j] = arr[n - i - 1][j];
        }
    }
    return ans;
}

function op2(arr) {
    const n = arr.length;
    const m = arr[0].length;
    const ans = new Array(n).fill().map(() => new Array(m).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            ans[i][j] = arr[i][m - j - 1];
        }
    }
    return ans;
}

function op3(arr) {
    const n = arr.length;
    const m = arr[0].length;
    const ans = new Array(m).fill().map(() => new Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            ans[i][j] = arr[n - j - 1][i];
        }
    }
    return ans;
}

function op4(arr) {
    const n = arr.length;
    const m = arr[0].length;
    const ans = new Array(m).fill().map(() => new Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            ans[i][j] = arr[j][m - i - 1];
        }
    }
    return ans;
}

function op5(arr) {
    const n = arr.length;
    const m = arr[0].length;
    const ans = new Array(n).fill().map(() => new Array(m).fill(0));

    for (let i = 0; i < n / 2; i++) {
        for (let j = 0; j < m / 2; j++) {
            ans[i][j + m / 2] = arr[i][j];
            ans[i + n / 2][j + m / 2] = arr[i][j + m / 2];
            ans[i + n / 2][j] = arr[i + n / 2][j + m / 2];
            ans[i][j] = arr[i + n / 2][j];
        }
    }
    return ans;
}

function op6(arr) {
    const n = arr.length;
    const m = arr[0].length;
    const ans = new Array(n).fill().map(() => new Array(m).fill(0));

    for (let i = 0; i < n / 2; i++) {
        for (let j = 0; j < m / 2; j++) {
            ans[i + n / 2][j] = arr[i][j];
            ans[i][j] = arr[i][j + m / 2];
            ans[i][j + m / 2] = arr[i + n / 2][j + m / 2];
            ans[i + n / 2][j + m / 2] = arr[i + n / 2][j];
        }
    }
    return ans;
}
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIdx = 0;

function temp() {
    return input[inputIdx++];
}

const [n, m, r] = temp().split(" ").map(Number);
let a = [];

for (let i = 0; i < n; i++) {
    a.push(temp().split(" ").map(Number));
}

const func = [op1, op2, op3, op4, op5, op6];
const operations = temp().split(" ");

for (let i = 0; i < r; i++) {
    const op = Number(operations[i]);
    a = func[op - 1](a);
}

for (const row of a) {
    console.log(row.join(" "));
}
