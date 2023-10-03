// 0, k, 2k, ... 순으로 한 줄씩 체크하며 d 보다 작은 거리를 이루는 최댓값을 구한다.
function solution(k, d) {
    let result = 0;
    for (let x = 0; x <= d; x += k) {
        // y = (d ^ 2 - x ^ 2) ^ (1 / 2)
        const max_y = Math.floor(Math.sqrt(d ** 2 - x ** 2));
        const y_amount = Math.floor(max_y / k) + 1;
        result += y_amount;
    }
    return result;
}