// 1. 실패 : 주문 순서도 중요함, 이를 고려하지 않고 풀이함

function solution(orders, course) {
  // 조합을 생성하는 함수 getCombinations
  const getCombinations = function (foods, amount) {
    const results = [];
    // 선택할 숫자가 하나라면, 그냥 각각의 요소를 배열에 넣어서 전달해주면 된다.
    if (amount === 1) return foods.map((value) => [value]);

    // 가장 앞에서부터 순차적으로 나머지를 자르고, 이를 재귀함수로 넘겨 나머지 파트에 대한 조합을 생성한다.
    foods.forEach((current, idx, origin) => {
      const rest = origin.slice(idx + 1);
      const combinations = getCombinations(rest, amount - 1);
      const result = combinations.map((comb) => [current, ...comb]);
      results.push(...result);
    });

    return results;
  };

  // 전체 주문을 순회하면서, 각 음식 별로 어떤 사람이 주문을 했는지 저장한다.
  const foodOrderCount = new Map();
  for (const [idx, order] of orders.entries()) {
    for (const food of order) {
      foodOrderCount.set(
        food,
        new Set([...(foodOrderCount.get(food)?.values() ?? []), idx + 1])
      );
    }
  }

  // 사람들이 주문한 "모든" 음식의 종류를 불러온다.
  const foods = Array.from(foodOrderCount.keys());

  // 각 코스 요리 별로, 가장 많이 주문한 메뉴를 추출해보자.
  let answer = [];
  for (const amount of course) {
    const possibleCourseMenu = getCombinations(foods, amount);
    let [bestAmount, bestCourses] = [0, []];
    for (const possibleCourse of possibleCourseMenu) {
      let orderedPerson;
      for (const menu of possibleCourse) {
        const menuOrderPerson = foodOrderCount.get(menu);
        if (orderedPerson === undefined) orderedPerson = menuOrderPerson;
        else
          orderedPerson = new Set(
            [...orderedPerson].filter((person) => menuOrderPerson.has(person))
          );
      }
      // 2명 이상에게 선택 받은 메뉴 조합이라면, 현재 가장 많은 주문을 한 조합인지를 체크
      const orderedPersonAmount = orderedPerson.size;
      if (orderedPersonAmount >= 2) {
        if (orderedPersonAmount > bestAmount) {
          bestAmount = orderedPersonAmount;
          bestCourses = [possibleCourse.join("")];
          continue;
        }
        if (orderedPersonAmount == bestAmount) {
          bestCourses.push(possibleCourse.join(""));
        }
      }
    }
    answer = [...answer, ...bestCourses];
  }
  answer.sort();
}

// 2. 성공 - 순열 자체를 각각의 케이스로 놓고 해결한 경우.

function solution(orders, course) {
  // 조합을 생성하는 함수 getCombinations
  const getCombinations = function (foods, amount) {
    const results = [];
    // 선택할 숫자가 하나라면, 그냥 각각의 요소를 배열에 넣어서 전달해주면 된다.
    if (amount === 1) return foods.map((value) => [value]);

    // 가장 앞에서부터 순차적으로 나머지를 자르고, 이를 재귀함수로 넘겨 나머지 파트에 대한 조합을 생성한다.
    foods.forEach((current, idx, origin) => {
      const rest = origin.slice(idx + 1);
      const combinations = getCombinations(rest, amount - 1);
      const result = combinations.map((comb) => [current, ...comb]);
      results.push(...result);
    });

    return results;
  };

  const answer = [];
  for (const courseAmount of course) {
    const orderedAmount = new Map();
    let maximumAmount = 0;
    orders.forEach((order) => {
      // 해당 주문 건에 대해 길이가 courseAmount 인 순열을 생성하고, 0개 이상 존재하는지 체크한다.
      const possibleCourses = getCombinations(order.split(""), courseAmount);
      if (possibleCourses.length > 0) {
        // 만약 순열이 존재한다면, 주문 건수를 추가하는 식으로 반복을 수행한다.
        for (const possibleCourse of possibleCourses) {
          const courseStr = possibleCourse.sort().join("");
          orderedAmount.set(courseStr, (orderedAmount.get(courseStr) || 0) + 1);
          maximumAmount = Math.max(maximumAmount, orderedAmount.get(courseStr));
        }
      }
    });

    // 한 개의 메뉴 조합이라도 2명 이상의 손님이 주문했다면, 정답을 고려해야 한다.
    if (maximumAmount >= 2) {
      for (const [possibleCourse, amount] of orderedAmount.entries()) {
        // 현재 코스의 주문 건수가 최댓값과 동일하다면, 정답 배열에 이를 추가한다.
        if (amount === maximumAmount) answer.push(possibleCourse);
      }
    }
  }

  // 사전 순으로 정렬한 후 return.
  return answer.sort();
}
