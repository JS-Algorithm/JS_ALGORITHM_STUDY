/**
 * 길이가 같은 두 큐를 번갈아 pop / insert 하여 합계를 같게 맞추어야 함.
 * 영원히 시행이 불가능한 경우는 한 쪽의 큐가 자신의 내용물을 온전히 비웠음에도 합이 같지 않은 경우라고 생각.
 */
function solution(queue1, queue2) {
    const MAXIMUM_TRY = queue1.length * 2;
    let queueSum1 = queue1.reduce((acc, cur) => acc + cur, 0);
    let queueSum2 = queue2.reduce((acc, cur) => acc + cur, 0);

    // 각 큐의 인덱스 값을 지정
    let [idx1, idx2] = [0, 0];

    // 두 큐의 합이 같지 않으면서 최대 트라이 횟수에 도달하기 전가지 반복
    while (queueSum1 !== queueSum2 && idx1 < MAXIMUM_TRY && idx2 < MAXIMUM_TRY) {
        if (queueSum1 < queueSum2) {
            const num = queue2[idx2++];
            queueSum1 += num;
            queueSum2 -= num;
            queue1.push(num);
        } else {
            const num = queue1[idx1++];
            queueSum2 += num;
            queueSum1 -= num;
            queue2.push(num);
        }
    }

    if (idx1 === MAXIMUM_TRY || idx2 === MAXIMUM_TRY) return -1;
    return idx1 + idx2;
}