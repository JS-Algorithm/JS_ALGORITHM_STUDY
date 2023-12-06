// function solution(cap, n, deliveries, pickups) {
//   let count = 0;

//   // 총 배달, 수거 해야하는 상자 수
//   let deliveriesCnt = deliveries.reduce((acc, cur) => acc + cur, 0);
//   let pickupsCnt = pickups.reduce((acc, cur) => acc + cur, 0);

//   let i = n - 1;

//   while (deliveriesCnt > 0 || pickupsCnt > 0) {
//     // 한 번 왕복할 때 배달, 수거한 상자 수
//     let delivered = 0;
//     let pickedUp = 0;

//     let maxLength = null;

//     while (1) {
//       if (deliveries[i] !== 0 && delivered < cap) {
//         if (delivered + deliveries[i] > cap) {
//           deliveries[i] -= cap - delivered;
//           delivered = cap;
//         } else {
//           delivered += deliveries[i];
//           deliveries[i] = 0;
//         }
//         if (maxLength === null) {
//           maxLength = i + 1;
//           count += maxLength * 2;
//         }
//       }
//       if (pickups[i] !== 0 && pickedUp < cap) {
//         if (pickedUp + pickups[i] > cap) {
//           pickups[i] -= cap - pickedUp;
//           pickedUp = cap;
//         } else {
//           pickedUp += pickups[i];
//           pickups[i] = 0;
//         }
//         if (maxLength === null) {
//           maxLength = i + 1;
//           count += maxLength * 2;
//         }
//       }

//       if (pickups[i] === 0 && deliveries[i] === 0) {
//         i--;
//         break;
//       }

//       if (delivered === cap && pickedUp === cap) {
//         i--;
//         break;
//       }
//     }
//     deliveriesCnt -= delivered;
//     pickupsCnt -= pickedUp;
//   }
//   return count;
// }
