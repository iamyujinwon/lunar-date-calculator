import solarLunar from 'solarlunar/lib/solarlunar.min.js';

const currentYear = new Date().getUTCFullYear();

function fromSolarDate(solarYear, solarMonth, solarDay, targetYear = currentYear) {
    const solarToLunar = solarLunar.solar2lunar(solarYear, solarMonth, solarDay);
    const lunarToCurrentSolar = solarLunar.lunar2solar(targetYear, solarToLunar.lMonth, solarToLunar.lDay);

    return {
        'year': lunarToCurrentSolar.cYear,
        'month': lunarToCurrentSolar.cMonth,
        'day': lunarToCurrentSolar.cDay
    };
}

function fromLunarDate(lunarYear, lunarMonth, lunarDay, targetYear = currentYear) {
    const currentLunarToSolar = solarLunar.lunar2solar(targetYear, lunarMonth, lunarDay);

    return {
        'year': currentLunarToSolar.cYear,
        'month': currentLunarToSolar.cMonth,
        'day': currentLunarToSolar.cDay
    };
}

export {fromLunarDate, fromSolarDate};