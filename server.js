import solarLunar from 'solarlunar/lib/solarlunar.min.js';

const currentYear = new Date().getUTCFullYear();

function fromSolarDate(solarYear, solarMonth, solarDay, targetYear = currentYear) {
    const solarToLunar = solarLunar.solar2lunar(solarYear, solarMonth, solarDay);
    const lunarToTargetSolar = solarLunar.lunar2solar(targetYear, solarToLunar.lMonth, solarToLunar.lDay);

    return {
        'year': lunarToTargetSolar.cYear,
        'month': lunarToTargetSolar.cMonth,
        'day': lunarToTargetSolar.cDay
    };
}

function fromLunarDate(lunarYear, lunarMonth, lunarDay, targetYear = currentYear) {
    const targetLunarToSolar = solarLunar.lunar2solar(targetYear, lunarMonth, lunarDay);

    return {
        'year': targetLunarToSolar.cYear,
        'month': targetLunarToSolar.cMonth,
        'day': targetLunarToSolar.cDay
    };
}

export {fromLunarDate, fromSolarDate};