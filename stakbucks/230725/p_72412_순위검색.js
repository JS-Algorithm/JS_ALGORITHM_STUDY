// function solution(info, query) {
//   const applicants = new Map();

//   info.forEach((v, i) => {
//     const [language, jobGroup, career, soulFood, score] = v.split(' ');
//     applicants.set(i, {language, jobGroup, career, soulFood, score: Number(score)});
//   });

//   const answer = [];
//   for (const q of query) {
//     const [language, jobGroup, career, soulFoodAndScore] = q.split(' and ');
//     const [soulFood, score] = soulFoodAndScore.split(' ');
//     let count = 0;
//     applicants.forEach((v, k) => {
//       if (language === v.language || language === '-') {
//         if (jobGroup === v.jobGroup || jobGroup === '-') {
//           if (career === v.career || career === '-') {
//             if (soulFood === v.soulFood || soulFood === '-') {
//               if (score <= v.score) count++;
//             }
//           }
//         }
//       }
//     });
//     answer.push(count);
//   }
//   return answer;
// }
