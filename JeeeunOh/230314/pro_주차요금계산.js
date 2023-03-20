// time_map : 입차 시간 저장
// total_time : 총 주차 누적 시간 저장
// car_arr : 차 번호 오름차순 정렬 위한 배열

function calc_time(fee){
    return Number(fee.substring(0, 2))*60 + Number(fee.substring(3));
}
function solution(fees, records) {
    let answer = [];
    let time_map={}, total_time={};
    let car_arr=[];
    let [basic_time, basic_fee, unit_time, unit_fee] = [fees[0], fees[1], fees[2], fees[3]];
    
    for(let i=0 ; i<records.length ; i++){
        let input = records[i].split(" ");
        let [input_time, car_num, command] = [input[0], input[1], input[2]];
        // 입차했다면 입차시간 저장
        if(command==='IN'){
            time_map[car_num] = input_time;
            if(car_arr.findIndex(item=> item===car_num)===-1) car_arr.push(car_num);
        } else { // 출차했다면 누적 시간 업데이트
            let in_time = time_map[car_num];
            let sum_time = calc_time(input_time) - calc_time(in_time);
            if(total_time[car_num]){
                total_time[car_num] = total_time[car_num] + sum_time;
            } else {
                total_time[car_num] = sum_time; 
            }
            // 입차 정보 삭제
            time_map[car_num]="";
        }
    }
    // 입차 정보가 남아있다면 23:59 출차로 가정하고 업데이트
    for(let key in time_map){
        if(time_map[key]!=''){
            if(total_time[key]){
                total_time[key]+=calc_time("23:59")-calc_time(time_map[key]);
            } else {
                total_time[key]=calc_time("23:59")-calc_time(time_map[key]);
            }
            time_map[key]='';
        }
    }
    // 문제 설명에 따른 금액 저장
    for(let key in total_time){
        let val = total_time[key];
        if(val <= basic_time){
            total_time[key] = basic_fee;
        } else {
            total_time[key] = basic_fee + Math.ceil((val-basic_time)/unit_time)*unit_fee;
        }
    }
    // 차번호 오름차순 정렬 후 해당 번호대로 answer 업데이트
    car_arr.sort();
    for(let i=0 ; i<car_arr.length; i++){
        answer.push(total_time[car_arr[i]]);
    }
    
    return answer;
}