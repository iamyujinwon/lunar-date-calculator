import solarLunar from 'solarLunar';

const currentYear = new Date().getUTCFullYear();
const currentMonth = new Date().getUTCMonth() + 1;
const currentDay = new Date().getUTCDate();

const b = getCurrentLunarDayFromSolarDate(2021,1,30);
const d = getCurrentLunarDayFromLunarDate(1,30);

console.log(b);

console.log(d);


// lunar -> solar in 2022
// solar -> solar in 2022
// specific year argument optional로 만약 넣으면, 그 해당 한해에 대한 거 알려주기


// my library

// 특정 날의 음력 날짜를 현재의 양력 날짜로 변환하여 알려준다


// 만약, 유저가 특정 날짜의 양력 날짜를 넣었을 경우,
// 그 양력 날짜를 먼저 그 해당 해의 음력 날짜로 변환한 후,
// 변환된 음력 날짜를 가지고 현재 양력 날짜로 언제인지 알려준다
// argument: Date object --> 다른 형태의 오브젝트들도 되는지 확인하기!!
// argument: three arguments
// solarToLunar(1999,05,17) or solarToLunar(1999,5,17)
// output: 
function getCurrentLunarDayFromSolarDate(solarYear, solarMonth, solarDay) {
    const solarToLunar = solarLunar.solar2lunar(solarYear, solarMonth, solarDay);
    let lunarToSolar = solarLunar.lunar2solar(currentYear, solarToLunar.lMonth, solarToLunar.lDay);

    if ((lunarToSolar.cMonth < currentMonth) || (lunarToSolar.cMonth == currentMonth && lunarToSolar.cDay < currentDay)) {
        lunarToSolar = solarLunar.lunar2solar(currentYear, solarToLunar.lMonth, solarToLunar.lDay);
    };

    return {
        'cYear': lunarToSolar.cYear,
        'cMonth': lunarToSolar.cMonth,
        'cDay': lunarToSolar.cDay
    };
}

// 만약, 유저가 특정 날짜의 음력 날짜를 넣었을 경우,
// 그 음력 날짜가 현재 양력 날짜로 언제인지 알려준다
// lunarToSolar(04, 03) or lunarToSolar(4,3))
function getCurrentLunarDayFromLunarDate(month, day) {
    const lunarMonth = month; 
    const lunarDay = day;

    let lunarToSolar = solarLunar.lunar2solar(currentYear, lunarMonth, lunarDay);

    console.log(lunarToSolar.cMonth);
    console.log(currentMonth);
    console.log(lunarToSolar.cDay);
    console.log(currentDay);

    if ((lunarToSolar.cMonth < currentMonth) || (lunarToSolar.cMonth == currentMonth && lunarToSolar.cDay < currentDay)) {
        lunarToSolar = solarLunar.lunar2solar(currentYear, lunarMonth, lunarDay);
    };

    return {
        'cYear': lunarToSolar.cYear,
        'cMonth': lunarToSolar.cMonth,
        'cDay': lunarToSolar.cDay
    };
}

// solarToLunar(new Date('1999-05-17'))
// output: 
// function getCurrentLunarDayFromSolarDate(solarDate) {
//     const solarYear = solarDate.getUTCFullYear();
//     const solarMonth = solarDate.getUTCMonth() + 1; 
//     const solarDay = solarDate.getUTCDate();
//     const solarToLunar = solarLunar.solar2lunar(solarYear, solarMonth, solarDay);
//     const lunarDate = new Date(solarToLunar.lYear, (solarToLunar.lMonth - 1), solarToLunar.lDay); 
//     const lunarMonth = lunarDate.getUTCMonth() + 1; 
//     const lunarDay = lunarDate.getUTCDate();
//     let lunarToSolar = solarLunar.lunar2solar(currentYear, lunarMonth, lunarDay);

//     if ((lunarToSolar.cMonth < currentMonth) || (lunarToSolar.cMonth == currentMonth && lunarToSolar.cDay < currentDay)) {
//         lunarToSolar = solarLunar.lunar2solar(currentYear, lunarMonth, lunarDay);
//     } 

//     return new Date(lunarToSolar.cYear, (lunarToSolar.cMonth - 1), lunarToSolar.cDay); 
// }


// 만약, 유저가 특정 날짜의 음력 날짜를 넣었을 경우,
// 그 음력 날짜가 현재 양력 날짜로 언제인지 알려준다
// argument: Date object
// lunarToSolar(new Date('1999-04-03'))
// output: 
// function getCurrentLunarDayFromLunarDate(lunarDate) {
//     const lunarMonth = lunarDate.getUTCMonth() + 1; 
//     const lunarDay = lunarDate.getUTCDate();

//     let lunarToSolar = solarLunar.lunar2solar(currentYear, lunarMonth, lunarDay);

//     if ((lunarToSolar.cMonth < currentMonth) || (lunarToSolar.cMonth == currentMonth && lunarToSolar.cDay < currentDay)) {
//         lunarToSolar = solarLunar.lunar2solar(currentYear, birthdayMonth, birthdayDay);
//     } 

//     return new Date(lunarToSolar.cYear, (lunarToSolar.cMonth - 1), lunarToSolar.cDay); v
// }

