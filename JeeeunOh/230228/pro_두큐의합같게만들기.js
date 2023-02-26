// 1. 첫 풀이 - 시간 초과

function solution(q1, q2) {
  let answer = -1;
  let len = q1.length;
  let sum = q1.concat(q2);

  let dp = Array(len*2+1).fill(0);
  dp[0] = 0;

  // 누적합 구하기
  for(let i=1 ; i<=sum.length; i++){
      dp[i]=dp[i-1]+sum[i-1];
  }

  // 반띵한 target 값 구하기
  if(dp[sum.length]%2!=0) return -1;
  let target = dp[sum.length]/2;

  for(let i=0 ; i<dp.length; i++){
      for(let j=i+1 ; j<=dp.length; j++){
          // 반띵지점이라면, 몇번 추출&삽입을 수행해야하는지 구해서
          if(dp[j]-dp[i]===target){
              let cnt = i + (j - len);
              // answer 업데이트
              if(answer!=-1){
                  answer = Math.min(answer, cnt);
              } else{
                  answer = cnt;
              }
        }
    }
}
return answer;
}

// 2. 두 번째 풀이 : 투포인터 풀이

function solution(q1, q2) {
  let answer = -1;
  let sum = q1.concat(q2);
  let total = 0;
  // cur : sum[start] ~ sum[end-1] 을 더한 값
  let cur = 0;

  // 누적합 구하기
  for(let i=0 ; i<sum.length; i++){
      total +=sum[i];
      if(i<q1.length){
          cur+=sum[i];
      }
  }
  
  // 합이 홀수면 return -1
  if(total%2!=0) return -1;
  let target = total/2;
  let start=0, end=q1.length;
  
  while(start!=end && end<=sum.length){
      if(cur===target){
          return start + (end - q1.length);
      }
      
      if(cur<target){
          cur+=sum[end];
          end++;
      } else if (cur>target){
          cur-=sum[start];
          start++;
      }
  }
  
  return answer;
}