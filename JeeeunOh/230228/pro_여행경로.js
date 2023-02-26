function solution(tickets) {
  let targetNum = tickets.length+1;
  let answer=[];
  let isFin = false;
  
  tickets.sort();
  
  for(let i=0 ; i<tickets.length; i++){
      if(tickets[i][0]==='ICN'){
          dfs(i, ["ICN"], tickets, 1);
      }
  }
  
  return answer;
  
  // 시작하는 공항, 현재까지 거쳐간 공항 배열, 거쳤으면 true로 바꿈, 몇개의 공항 거쳤는지
  function dfs (curIdx, temp, ticket, cnt){
      // 이미 완성된 배열 있으면 패스
      if(isFin) return;
      // 거친 공항 개수 추가
      cnt++;
      // 결과 배열에 추가
      let newTemp = Array.from(temp);
      newTemp.push(ticket[curIdx][1]);
       // 현재 티켓 사용했다고 표시
      let newTicket = Array.from(ticket);
      newTicket[curIdx]=true;
      
      // 이 때 모든 공항 거쳤으면 return
      if(cnt===targetNum){
          isFin = true;
          answer=newTemp;
          return;
      }
      
      let isRight=false;
      
      for(let i=0 ; i<ticket.length; i++){
          // 이미 사용한 티켓이면 패스
          if(ticket[i]===true) continue;
          // 해당 티켓의 시작지점이 현재 티켓의 도착지이면
          if(ticket[i][0]===ticket[curIdx][1]){
              dfs(i, newTemp, newTicket, cnt);
          }
      }
      
      return isRight;
  }
}