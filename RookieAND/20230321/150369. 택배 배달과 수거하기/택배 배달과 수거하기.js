function solution(cap, n, deliveries, pickups) {
    let answer = 0

    let [shouldDelivered, shouldPickUp] = [0, 0]

    // 거리가 먼 순부터 배달 및 수거를 진행한다.
    for (let i = n - 1; i >= 0; i--) {
        shouldDelivered += deliveries[i]
        shouldPickUp += pickups[i]

        // i번째 집에 수거 혹은 배달할 물품이 존재하는지를 체크한다.
        // 단 배달해야 할 물건과 픽업해야 할 물건을 각각 최대 용적량에서 뺐을 때 양수가 나온다면,
        // 용적량이 배달 / 픽업해야 할 물건의 양보다 적다는 의미이므로 다시 이 집에 방문해야 함.
        // 반복의 종료는 해당 집에서 더 이상 옮기거나 배달해야 할 물건이 없을 때까지 (0 이하)
        while (shouldDelivered > 0 || shouldPickUp > 0) {
            shouldDelivered -= cap
            shouldPickUp -= cap
            answer += (i + 1) * 2  // 왔다 갔다 하는 거리이므로 2배를 곱하여 더해야 한다.
        }   
    }

    return answer
}
