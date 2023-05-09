function solution(data, col, row_begin, row_end) {
    data.sort((a, b)=>{
        return a[col-1]===b[col-1]? b[0]-a[0] : a[col-1]-b[col-1];
    })
    
    let S_i = data.map((item, idx)=> {
        return item.reduce((acc, cur)=> acc + cur%(idx+1), 0)
    }).slice(row_begin-1, row_end);
    
    let sum = S_i[0];
    
    for(let i=1; i<S_i.length; i++){
        sum^=S_i[i];
    }
    
    return sum;
}