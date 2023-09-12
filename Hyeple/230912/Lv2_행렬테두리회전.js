function solution(rows, columns, queries) {
    // 초기 행렬 생성
    const matrix = new Array(rows).fill(0).map(() => new Array(columns).fill(0));
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            matrix[i][j] = i * columns + j + 1;
        }
    }

    const result = [];
    for (const query of queries) {
        const [x1, y1, x2, y2] = query;
        const temp = matrix[x1 - 1][y1 - 1];
        let min = temp;

        // 왼쪽 세로 변 회전
        for (let i = x1; i < x2; i++) {
            matrix[i - 1][y1 - 1] = matrix[i][y1 - 1];
            min = Math.min(min, matrix[i][y1 - 1]);
        }

        // 위쪽 가로 변 회전
        for (let j = y1; j < y2; j++) {
            matrix[x2 - 1][j - 1] = matrix[x2 - 1][j];
            min = Math.min(min, matrix[x2 - 1][j]);
        }

        // 오른쪽 세로 변 회전
        for (let i = x2 - 2; i >= x1 - 1; i--) {
            matrix[i + 1][y2 - 1] = matrix[i][y2 - 1];
            min = Math.min(min, matrix[i][y2 - 1]);
        }

        // 아래쪽 가로 변 회전
        for (let j = y2 - 2; j >= y1 - 1; j--) {
            matrix[x1 - 1][j + 1] = matrix[x1 - 1][j];
            min = Math.min(min, matrix[x1 - 1][j]);
        }

        // 임시값을 마지막 위치에 할당
        matrix[x1 - 1][y1] = temp;
        min = Math.min(min, temp);

        result.push(min);
    }

    return result;
}