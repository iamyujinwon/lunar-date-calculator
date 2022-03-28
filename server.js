import solarLunar from 'solarLunar';

const currentYear = new Date().getUTCFullYear();

function solarToCurrentLunar(solarYear, solarMonth, solarDay) {
    const solarToLunar = solarLunar.solar2lunar(solarYear, solarMonth, solarDay);
    const lunarToCurrentSolar = solarLunar.lunar2solar(currentYear, solarToLunar.lMonth, solarToLunar.lDay);

    return {
        'year': lunarToCurrentSolar.cYear,
        'month': lunarToCurrentSolar.cMonth,
        'day': lunarToCurrentSolar.cDay
    };
}

function lunarToCurrentLunar(lunarYear, lunarMonth, lunarDay) {
    const currentLunarToSolar = solarLunar.lunar2solar(currentYear, lunarMonth, lunarDay);

    return {
        'year': currentLunarToSolar.cYear,
        'month': currentLunarToSolar.cMonth,
        'day': currentLunarToSolar.cDay
    };
}