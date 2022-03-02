const monthsInString = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// const allDaysInLunarYear = 354;

const prompt = require('prompt-sync')();
const ordinal = require('ordinal');

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth(); // month + 1 = current month HOWEVER! I need and use only index number so do not need to add 1 to it
const currentDay = new Date().getDay();
const solarDaysForEachMonthInCurrentYear = [ 31, 28,  31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
const lunarDaysForEachMonthInCurrentYear = [ 30, 29, 30, 29, 30, 30, 29, 30, 29, 30, 29, 30 ];

const startingLunarMonthInCurrentYear = 1; 

const lunarYearOfBirthday = parseInt(prompt('your Lunar birth year: '));
const lunarMonthOfBirthday = parseInt(prompt('your Lunar birth month: '));
const lunarDayOfBirthday = parseInt(prompt('your Lunar birth day: '));

const upcomingBirthdayYear = getUpcomingLunarBirthdayYear(lunarMonthOfBirthday, lunarDayOfBirthday);
const lunarAge = getLunarAge();
const daysSinceLunarNewYear = countDaysFromLunarNewYear(lunarMonthOfBirthday, lunarDayOfBirthday);
//tuples
const [solarMonthOfBirthday, solarDayOfBirthday] = getSolarBirthday(daysSinceLunarNewYear, startingLunarMonthInCurrentYear);

showSolarBirthday(solarMonthOfBirthday, solarDayOfBirthday);

function getUpcomingLunarBirthdayYear(lunarMonthOfBirthday, lunarDayOfBirthday) {
    if (lunarMonthOfBirthday == 12 && lunarDayOfBirthday > 9) {
        return currentYear + 1;
    } else {
        return currentYear;
    }
}

function getLunarAge() {
    return upcomingBirthdayYear - lunarYearOfBirthday;
}

function countDaysFromLunarNewYear(lunarMonth, lunarDay) {
    let days = 0;
    for (let i = 0; i < lunarMonth; i++) {
        if (i == lunarMonth - 1) {
            days += lunarDay;
        } else {
            days += lunarDaysForEachMonthInCurrentYear[i];
        }
    }
    return days;
}

function getSolarBirthday(allDays, startingLunarMonthInCurrentYear) {
    let solarDay = allDays;
    let solarMonth;

    for (solarMonth = startingLunarMonthInCurrentYear; solarMonth <= lunarMonthOfBirthday; solarMonth++) {
        if (solarDay > solarDaysForEachMonthInCurrentYear[solarMonth]) {
            solarDay -= solarDaysForEachMonthInCurrentYear[solarMonth];
        } else {
            break;
        }
    }

    return [solarMonth, solarDay];
}

function showSolarBirthday(solarMonth, solarDay) {
    let monthOfBirthday = solarMonth;
    let dayOfBirthday = solarDay;

    process.stdout.write(`\n🎂 Your ${ordinal(lunarAge)} birthday `);

    if (monthOfBirthday == currentMonth && dayOfBirthday == currentDay) {
        console.log("is Today!!");
        console.log("😀😀 HAPPY BIRTHDAY! 😀😀\n")
    } else {
        if ((monthOfBirthday < currentMonth) || (monthOfBirthday == currentMonth && dayOfBirthday < currentDay)) {
            process.stdout.write("was");
        } else {
            process.stdout.write("is");
        }  

        if (monthOfBirthday == 12) {
            monthOfBirthday = 0;
        } 

        console.log(` ${monthsInString[monthOfBirthday]} ${solarDayOfBirthday}, ${upcomingBirthdayYear}.\n`);
    }
}
