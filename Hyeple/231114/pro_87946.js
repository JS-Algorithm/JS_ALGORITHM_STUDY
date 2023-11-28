function solution(k, dungeons) {
    let answer = 0;

    const getPermutations = (arr) => {
        const result = [];
        const used = new Array(arr.length).fill(false);

        const dfs = (current) => {
            if (current.length === arr.length) {
                result.push([...current]);
                return;
            }

            for (let i = 0; i < arr.length; i++) {
                if (used[i]) continue;

                used[i] = true;
                current.push(arr[i]);
                dfs(current);
                current.pop();
                used[i] = false;
            }
        };

        dfs([]);
        return result;
    };

    const permutations = getPermutations(dungeons);

    for (const p of permutations) {
        let tmp = k;
        let cnt = 0;

        for (const [need, spend] of p) {
            if (tmp >= need) {
                tmp -= spend;
                cnt += 1;
            }
        }

        answer = Math.max(answer, cnt);
    }

    return answer;
}
