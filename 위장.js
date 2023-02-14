function solution(clothes) {
    const closet = new Map();
    clothes.forEach(([, key]) => closet.set(key, !closet.get(key) ? 1 : closet.get(key) + 1));
    return Array.from(closet.values()).reduce((acc, cur) => acc * (cur + 1), 1) - 1;
}
