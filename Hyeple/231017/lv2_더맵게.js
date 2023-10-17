// 배열 -> Min Heap 함수
function buildMinHeap(arr) {
    const n = arr.length;
    for (let i = Math.floor(n / 2); i >= 0; i--) {
        heapify(arr, i, n);
    }
}

//힙 유지하는 함수
function heapify(arr, i, n) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let smallest = i;

    if (left < n && arr[left] < arr[smallest]) {
        smallest = left;
    }

    if (right < n && arr[right] < arr[smallest]) {
        smallest = right;
    }

    if (smallest !== i) {
        [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
        heapify(arr, smallest, n);
    }
}

//힙에 원소 추가
function insertMinHeap(arr, value) {
    arr.push(value);
    let currentIndex = arr.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);
    
    while (currentIndex > 0 && arr[currentIndex] < arr[parentIndex]) {
        [arr[currentIndex], arr[parentIndex]] = [arr[parentIndex], arr[currentIndex]];
        currentIndex = parentIndex;
        parentIndex = Math.floor((currentIndex - 1) / 2);
    }
}

//힙에서 가장 작은 원소 추출
function extractMin(arr) {
    if (arr.length === 0) return -1;

    const min = arr[0];
    const last = arr.pop();

    if (arr.length > 0) {
        arr[0] = last;
        heapify(arr, 0, arr.length);
    }

    return min;
}

function solution(scoville, K) {
    buildMinHeap(scoville);
    let mixCount = 0;

    while (scoville[0] < K) {
        if (scoville.length < 2) {
            return -1;
        }

        const first = extractMin(scoville);
        const second = extractMin(scoville);
        const mixedScoville = first + second * 2;

        insertMinHeap(scoville, mixedScoville);
        mixCount++;
    }

    return mixCount;
}
