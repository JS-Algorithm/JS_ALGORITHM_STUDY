function solution(operations) {
    const queue = [];
    operations.forEach((operation) => {
        const [oper, num] = operation.split(" ");
        switch(oper) {
            case 'I':
                queue.push(Number(num));
                break;
            case 'D':
                const value = (num === '1' ? Math.max : Math.min)(...queue);
                queue.splice(queue.indexOf(value), 1);
        }
    })
    return queue.length ? [Math.max(...queue), Math.min(...queue)] : [0, 0];
}