import solarLunar from 'solarLunar';
import ordinal from 'ordinal';

const currentYear = new Date().getUTCFullYear();
const currentMonth = new Date().getUTCMonth();
const currentDay = new Date().getUTCDate();

const solarBirthday = new Date(process.argv[2]);
const solarToLunarBirthday = solarToLunar(solarBirthday);
const nextBirthday = lunarToSolar(solarToLunarBirthday);

showSolarBirthday(solarToLunarBirthday, nextBirthday);

function solarToLunar(solarBirthday) {
    const birthdayYear = solarBirthday.getUTCFullYear();
    const birthdayMonth = solarBirthday.getUTCMonth() + 1; 
    const birthdayDay = solarBirthday.getUTCDate();

    const solarToLunar = solarLunar.solar2lunar(birthdayYear, birthdayMonth, birthdayDay);

    return new Date(solarToLunar.lYear, (solarToLunar.lMonth - 1), solarToLunar.lDay); //the month is 0-indexed
}

function lunarToSolar(lunarBirthday) {
    const birthdayMonth = lunarBirthday.getUTCMonth() + 1; 
    const birthdayDay = lunarBirthday.getUTCDate();

    let lunarToSolar = solarLunar.lunar2solar(currentYear, birthdayMonth, birthdayDay);

    if ((lunarToSolar.cMonth < currentMonth + 1) || (lunarToSolar.cMonth == currentMonth && lunarToSolar.cDay < currentDay)) {
        lunarToSolar = solarLunar.lunar2solar(currentYear + 1, birthdayMonth, birthdayDay);
    } 

    return new Date(lunarToSolar.cYear, (lunarToSolar.cMonth - 1), lunarToSolar.cDay); 
}

function showSolarBirthday(lunarBirthday, nextBirthday) {
    const lunarYearOfBirthday = lunarBirthday.getUTCFullYear();
    const upcomingYearOfBirthday = nextBirthday.getUTCFullYear();
    const upcomingMonthOfBirthday = nextBirthday.getUTCMonth();
    const upcomingDayOfBirthday = nextBirthday.getUTCDate();

    const lunarAge = upcomingYearOfBirthday - lunarYearOfBirthday;

    console.log(`\nYour lunar birthday was ${lunarBirthday.getUTCFullYear()}/${lunarBirthday.getUTCMonth() + 1}/${lunarBirthday.getUTCDate()}.`);

    process.stdout.write(`\n🎂 Your ${ordinal(lunarAge)} birthday `);

    if (upcomingMonthOfBirthday == currentMonth && upcomingDayOfBirthday == currentDay) {
        console.log("is Today!!");
        console.log("😀😀 HAPPY BIRTHDAY! 😀😀\n")
    } else {
        if ((upcomingMonthOfBirthday < currentMonth) || (upcomingMonthOfBirthday == currentMonth && upcomingDayOfBirthday < currentDay)) {
            process.stdout.write("was");
        } else {
            process.stdout.write("is");
        }  

        console.log(` ${nextBirthday.toLocaleString('default', { month: 'long' })} ${upcomingDayOfBirthday}, ${upcomingYearOfBirthday}.\n`); 
    }
}
