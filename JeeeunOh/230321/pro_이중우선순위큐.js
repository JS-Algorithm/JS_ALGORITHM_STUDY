function solution(operations) {
    let queue = [];
    
    operations.forEach((item)=>{
        let [op, num] = item.split(' ');
        if(op==='I') queue.push(+num);
        else if (op==='D' && num ==='1' && queue.length){ // 최댓값 삭제
            queue.sort((a, b)=> a-b);
            queue.pop();
        } else if (op==='D' && num ==='-1' && queue.length){ // 최솟값 삭제
            queue.sort((a, b)=> b-a);
            queue.pop();
        }
    })
    
    queue.sort((a, b)=> a-b);
    
    return queue.length? [queue[queue.length-1], queue[0]] : [0, 0];
}