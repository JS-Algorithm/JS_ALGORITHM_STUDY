// [참고 사항] 에 기술한 공식을 토대로, 모든 일차함수를 대조하여 접점을 구한다.
// 1000 개의 직선을 기준으로 1000 * 999 번의 연산이 이루어져야 한다 (max : 999,000회)
// 이후 모든 접점 중 x, y 가 가장 큰 접점과 가장 작은 접점을 구하여 내부에 접점을 찍는다.

function solution(line) {
    const points = [];
    const N = line.length;
    
    let [maxX, maxY] = [-Infinity, -Infinity];
    let [minX, minY] = [Infinity, Infinity];
    
    // 두 직선의 교점이 존재하는지를 계산하는 과정을 거친다.
    for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
            const [A, B, E] = line[i];
            const [C, D, F] = line[j];
            
            // AD - BC = 0인 경우 두 직선은 평행 또는 일치하기 때문에 교점이 발생하지 않는다.
            if ((A * D) - (B * C) === 0) continue;
            
            const pointX = (B * F - E * D) / (A * D - B * C);
            const pointY = (E * C - A * F) / (A * D - B * C);
            
            // 접점이 정수가 아닌 케이스에 대해서는 무시한다.
            if (!Number.isInteger(pointX) || !Number.isInteger(pointY)) continue;
            
            points.push([pointY, pointX]);
            
            // 최고, 최저점을 갱신했는지도 체크해야 한다.
            maxX = Math.max(maxX, pointX);
            maxY = Math.max(maxY, pointY);
            minX = Math.min(minX, pointX);
            minY = Math.min(minY, pointY);
        }
    }
    
    const matrix = Array.from({ length: (maxY - minY + 1) }, () => new Array(maxX - minX + 1).fill("."));

    for (const [y, x] of points) {
        const [ny, nx] = [y , x]
        matrix[maxY - y][x - minX] = "*";
    }
    
    return matrix.map((row) => row.join(""))
}