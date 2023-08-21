function Intersection(multiSet1, multiSet2) {
    let intersectionCount = 0;
    
    multiSet1.forEach((count1, pair) => {
        if (multiSet2.has(pair)) {
            intersectionCount += Math.min(count1, multiSet2.get(pair));
        }
    });
    
    return intersectionCount;
}

function Union(multiSet1, multiSet2) {
    let unionCount = 0;
    
    multiSet1.forEach((count1, pair) => {
        unionCount += Math.max(count1, multiSet2.get(pair) || 0);
    });
    
    multiSet2.forEach((count2, pair) => {
        if (!multiSet1.has(pair)) {
            unionCount += count2;
        }
    });
    
    return unionCount;
}

function MultiSet(str) {
    const multiSet = new Map();
        
    for (let i = 0; i < str.length - 1; i++) {
        const pair = (str[i] + str[i + 1]).toLowerCase();
        if (/^[a-zA-Z]{2}$/.test(pair)) {
            multiSet.set(pair, (multiSet.get(pair) || 0) + 1);
        }
    }
        
    return multiSet;
}

function solution(str1, str2) {
  const multiSet1 = MultiSet(str1);
  const multiSet2 = MultiSet(str2);
    
  const intersectionSize = Intersection(multiSet1, multiSet2);
  const unionSize = Union(multiSet1, multiSet2);
    
  const jaccardSimilarity = unionSize === 0 ? 65536 : Math.floor(intersectionSize / unionSize * 65536);
    
  return jaccardSimilarity;
}