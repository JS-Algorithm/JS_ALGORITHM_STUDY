function solution(genres, plays) {
    const musics = new Map();
    genres.forEach((genre, idx) => {
        musics.set(genre, musics.get(genre) ? [...musics.get(genre), [plays[idx], idx]] : [[plays[idx], idx]]);
    });
    let playedGenreRank = [];
    // 각 장르 별 총합 누계 조회수를 산출하여 합산하고, 조회수가 가장 높은 장르부터 오도록 정렬
    for (const [genre, countInfo] of musics.entries()) {
        const totalCount = countInfo.reduce((summary, [play, _]) => (summary += play), 0);
        playedGenreRank.push({ genre, totalCount });
    }
    playedGenreRank = playedGenreRank.sort((a, b) => b.totalCount - a.totalCount).map(({ genre }) => genre);
    const answer = [];
    // 각 장르 별 조회수를 순회하면서, 가장 높은 두 곡의 인덱스만 추려 push
    for (const genre of playedGenreRank) {
        Array.from(musics.get(genre))
            .sort((a, b) => b[0] - a[0])
            .slice(0, 2)
            .forEach(([_, idx]) => answer.push(idx));
    }
    return answer;
}
