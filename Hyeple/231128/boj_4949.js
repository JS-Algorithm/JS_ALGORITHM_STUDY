const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let s of input) {
    if (s === ".") {
        break;
    }

    let stack = [];
    let check = true;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "[") {
            stack.push(s[i]);
        } else if (s[i] === ")") {
            if (stack.length && stack[stack.length - 1] === "(") {
                stack.pop();
            } else {
                check = false;
                break;
            }
        } else if (s[i] === "]") {
            if (stack.length && stack[stack.length - 1] === "[") {
                stack.pop();
            } else {
                check = false;
                break;
            }
        }
    }

    if (check && stack.length === 0) {
        console.log("yes");
    } else {
        console.log("no");
    }
}
