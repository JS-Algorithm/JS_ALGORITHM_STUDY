function solution(files) {
    return files.sort((a, b) => {
        const aMatch = a.match(/([a-zA-Z\s.-]+)([0-9]{1,5})(.*)/);
        const bMatch = b.match(/([a-zA-Z\s.-]+)([0-9]{1,5})(.*)/);

        const aHead = aMatch[1].toLowerCase();
        const bHead = bMatch[1].toLowerCase();
        const aNumber = parseInt(aMatch[2], 10);
        const bNumber = parseInt(bMatch[2], 10);

        if (aHead < bHead) return -1;
        if (aHead > bHead) return 1;

        if (aNumber < bNumber) return -1;
        if (aNumber > bNumber) return 1;

        return 0;
    });
}
