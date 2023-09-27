let fs = require('fs').readFileSync('/dev/stdin');
let input = fs.toString().split('\n');

let [n, m, h] = input[0].split(' ').map(Number);
let a = [];
let d = new Array(h + 1).fill(0);
for (let i = 1 ; i <= n ; i++) {
    a.push(input[i].split(' ').map(Number));
}

d[0] = 1;

for (let i = 0 ; i < n ; i++) { //학생 전체
    let data = [];
    for (j = 0 ; j <= h ; j++) { //높이 전체
        for (let k = 0 ; k < a.length ; k++){ //해당 학생의 모든 블록 체크
            if (d[j] != 0 && j + a[i][k] <= h) { //현재 학생 블록으로 탑 쌓을 수 있는 경우
                data.push([j + a[i][k], d[j]]);
            }
        }
    }

    for ([height, value] of data) { //쌓을 수 있는 높이면 경우의 수 증가
        d[height] = (d[height] + value) % 10007;
    }
}
console.log(d[h]);