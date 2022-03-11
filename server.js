import solarLunar from 'solarLunar';

const currentYear = new Date().getUTCFullYear();
const currentMonth = new Date().getUTCMonth() + 1;
const currentDay = new Date().getUTCDate();

const solar = getSolarDateInfo(1999,5,17);
const lunar = getLunarDateInfo(1974,5,6);

const specificDate = convertSolarToLunarInSpecificYear(2022, 1999, 5, 17);
const specificDate2 = convertLunarToSolarInSpecificYear(2022, 4, 3);

const list = getDateListFromRange(1999, 2022, 4, 3);

console.log(solar);
console.log(lunar);
console.log(specificDate);
console.log(specificDate2);
console.log(list);

//위 펑션들 안에서 이거 쓰기!!
function convertSolarToLunarInSpecificYear (specificYear, solarYear, solarMonth, solarDay) {
    const solarToLunar =  solarLunar.solar2lunar(solarYear, solarMonth, solarDay);
    const specificDate =  solarLunar.lunar2solar(specificYear, solarToLunar.lMonth, solarToLunar.lDay);

    return {
        'year': specificYear, 
        'month': specificDate.cMonth,
        'day': specificDate.cDay
    };
}

//위 펑션들 안에서 이거 쓰기!!
function convertLunarToSolarInSpecificYear (specificYear, lunarMonth, lunarDay) {
    const specificDate =  solarLunar.lunar2solar(specificYear, lunarMonth, lunarDay);

    return {
        'year': specificYear, 
        'month': specificDate.cMonth,
        'day': specificDate.cDay
    };
}

function getSolarDateInfo(solarYear, solarMonth, solarDay) {
    const solarToLunar = solarLunar.solar2lunar(solarYear, solarMonth, solarDay);
    const lunarToCurrentSolar = convertLunarToSolarInSpecificYear(currentYear, solarToLunar.lMonth, solarToLunar.lDay)
    const upcomingLunarToSolar = convertLunarToSolarInSpecificYear(currentYear + 1, solarToLunar.lMonth, solarToLunar.lDay)

    return {
        'sYear': solarYear,
        'sMonth': solarMonth,
        'sDay': solarDay,
        'lYear': solarToLunar.lYear,
        'lMonth': solarToLunar.lMonth,
        'lDay': solarToLunar.lDay,
        'cYear': lunarToCurrentSolar.year,
        'cMonth': lunarToCurrentSolar.month,
        'cDay': lunarToCurrentSolar.day,
        'uYear': upcomingLunarToSolar.year,
        'uMonth': upcomingLunarToSolar.month,
        'uDay': upcomingLunarToSolar.day
    };
}

function getLunarDateInfo(lunarYear, lunarMonth, lunarDay) {
    const lunarToSolar = solarLunar.lunar2solar(lunarYear, lunarMonth, lunarDay);
    const currentLunarToSolar = solarLunar.lunar2solar(currentYear, lunarMonth, lunarDay);
    const upcomingLunarToSolar = solarLunar.lunar2solar(currentYear + 1, currentLunarToSolar.lMonth, currentLunarToSolar.lDay);

    return {
        'sYear': lunarToSolar.cYear, 
        'sMonth': lunarToSolar.cMonth,
        'sDay': lunarToSolar.cDay,
        'lYear': lunarYear,
        'lMonth': lunarMonth,
        'lDay': lunarDay,
        'cYear': currentLunarToSolar.cYear,
        'cMonth': currentLunarToSolar.cMonth,
        'cDay': currentLunarToSolar.cDay,
        'uYear': upcomingLunarToSolar.cYear,
        'uMonth': upcomingLunarToSolar.cMonth,
        'uDay': upcomingLunarToSolar.cDay
    };
}

// 구글 달력에 저장할때, 어느 년도 부터 어느 년도까지 저장하고 싶은지 정하고 저장 가능하게 만드는 기능!
function getDateListFromRange(startingYear, endingYear, lunarMonth, lunarDay) {
    let list = [];

    for (let i = startingYear; i <= endingYear; i++) {
        const date =  solarLunar.lunar2solar(i, lunarMonth, lunarDay);
        list.push({'year': date.cYear, 'month': date.cMonth, 'day': date.cDay})
    }

    return list;
}