// 1. 음 1개당 1개씩 재생되므로, 총 재생시간이 음의 길이보다 짧다면 일부만 재생된 것이다.
// 2. 재생 시간을 고려하여 해당 음악이 재생된 멜로디를 추가로 이어 붙인다. (AAAAA 10분 -> AAAAAAAAAA)
// 3. 네오가 들은 멜로디가 추가된 멜로디 내에 "포함되는지" 를 구해야 한다 (정규식? startsWith?)

function solution(m, musicinfos) {
    
    function parseMelody(melody) {
        return melody.split("").map((key, index) => {
            if (key === '#') return;
            if (melody[index + 1] === '#') return `${key}#`;
            return key;
        }).filter(Boolean);
    }
    
    function hoursToMin(date) {
        const [hours, minutes] = date.split(":").map(Number)
        return hours * 60 + minutes;
    }
    
    const musicDatas = musicinfos.map((info, index) => {
        const [startTime, endTime, name, rawMelody] = info.split(",");
        const playTime = hoursToMin(endTime) - hoursToMin(startTime);
        const melody = parseMelody(rawMelody);
        const playedMelody = rawMelody.repeat(playTime / melody.length) + melody.slice(0, playTime % melody.length).join("");
        
        return {
            name,
            playTime,
            index,
            playedMelody,
        }
    });
    
    // 재생된 멜로디 직후 # 이 단독으로 오면 안된다.
    const regex = new RegExp(`${m}([^#]|$)`);   
    const matchList = musicDatas.filter(({playedMelody}) => regex.test(playedMelody))
    
    if (!matchList.length) return "(None)";
    if (matchList.length === 1) return matchList[0].name;
    
    // 재생 시간이 더 긴 순대로, 재생 시간이 같다면 먼저 입력된 (index) 순으로 정렬
    matchList.sort((a, b) => a.playTime === b.playTime ? a.index - b.index : b.playTime - a.playTime);
    return matchList[0].name;
}