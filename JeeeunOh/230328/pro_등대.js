function solution(n, lighthouse) {
    const isLight = new Array(n + 1).fill(false);
    let result = 0;
    
    while(lighthouse.length){
        const map = new Array(n+1).fill().map(_=>[]);
        
        for(const lh of lighthouse){
            const [a, b] = lh;
            map[a] = [...map[a], b];
            map[b] = [...map[b], a];
        }
        
        // 그리디
        map.filter(el => el.length === 1).forEach((el)=>{
            const [target] = el;
            if(!isLight[target]){
                isLight[target] = true;
                if(map[target].length!==1){
                    result+=1;
                } else {
                    result+=0.5;
                }
            }
        })
        
        lighthouse = lighthouse.filter((el)=>{
            const [a, b] = el;
            return !isLight[a] && !isLight[b];
        })
    }
  
    return result;
  }