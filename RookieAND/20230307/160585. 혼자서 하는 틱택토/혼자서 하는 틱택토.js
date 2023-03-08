/**
 * 틱택토가 유효하지 않은 경우
 * 
 * 1. 선공이 이겼음에도 갯수가 똑같은 경우, 후공이 이겼음에도 갯수가 차이나는 경우
 * 2. O와 X의 갯수가 2개 이상 차이날 경우 (0 ~ 1개만 차이나야 함)
 * 3. 선공이 O가 아닌 X일 경우
 * 4. O와 X가 둘 다 승리해버리는 경우
 */
function solution(board) {

    // O, X의 갯수를 각각 구해야 함.
    let [Ocount, Xcount] = [0, 0];
    for (const row of board) {
        for (const char of row) {
            if (char === "O") Ocount++;
            if (char === "X") Xcount++;
        }
    }

    // O보다 X가 더 많거나, O가 X보다 2개 이상 많아질 경우 잘못된 케이스.
    if (Ocount < Xcount) return 0;
    if (Ocount - Xcount > 1) return 0;

    // O가 이겼는지, X가 이겼는지를 체크하는 변수.
    let [Owin, Xwin] = [false, false];

    // 가로 줄과 세로 줄을 먼저 체크한다
    for (let i = 0; i < 3; i ++) {

        // Set 자료구조를 활용하여 각 줄을 구성하는 요소들을 통합.
        const horizontal = new Set(board[i]);
        const vertical = new Set([board[0][i], board[1][i], board[2][i]]);

        if (!horizontal.has(".") && horizontal.size === 1) {
            Owin = Owin || horizontal.has("O");
            Xwin = Xwin || horizontal.has("X");
        };
        if (!vertical.has(".") && vertical.size === 1) {
            Owin = Owin || vertical.has("O");
            Xwin = Xwin || vertical.has("X");
        };
    }
    // 대각선에 대한 경우도 체크한다.
    const leftCross = new Set([board[0][0], board[1][1], board[2][2]]);
    const rightCross = new Set([board[0][2], board[1][1], board[2][0]]);

    if (!leftCross.has(".") && leftCross.size === 1) {
        Owin = Owin || leftCross.has("O");
        Xwin = Xwin || leftCross.has("X");
    }
    if (!rightCross.has(".") && rightCross.size === 1) {
        Owin = Owin || rightCross.has("O");
        Xwin = Xwin ||rightCross.has("X");
    }

    // 둘 다 승리한 게임인 경우 게임이 종료되었음에도 강행한 것이므로 잘못된 케이스.
    if (Owin && Xwin) return 0;

    // 선공이 이겼음에도 O의 갯수와 X의 갯수가 1개 차이나지 않는다면 잘못된 케이스
    if (Owin && Ocount - Xcount !== 1) return 0;

    // 후공이 이겼음에도 O의 갯수와 X의 갯수가 다르다면 잘못된 케이스
    if (Xwin && Ocount !== Xcount) return 0;

    return 1;

}