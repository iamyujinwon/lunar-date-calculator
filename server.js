const monthsInString = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const ordinal = require('ordinal');

const currentYear = new Date().getUTCFullYear();
const currentMonth = new Date().getUTCMonth();
const currentDay = new Date().getUTCDate();
const solarDaysForEachMonthInCurrentYear = [ 31, 28,  31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
const lunarDaysForEachMonthInCurrentYear = [ 30, 29, 30, 29, 30, 30, 29, 30, 29, 30, 29, 30 ];

const startingLunarMonthInCurrentYear = 1; 

const lunarBirthday = new Date(process.argv[2]);

const nextBirthday = getNextBirthday(lunarBirthday);
showSolarBirthday(lunarBirthday, nextBirthday);

function getNextBirthday(lunarBirthday) {
    const birthday = new Date(lunarBirthday);
    const lunarMonthOfBirthday = birthday.getUTCMonth() + 1; // 있는 그대로 받아야 하니까 + 1 !!
    const lunarDayOfBirthday = birthday.getUTCDate();
    let solarYear = getUpcomingLunarBirthdayYear(lunarMonthOfBirthday, lunarDayOfBirthday);
    let solarMonth;
    let solarDay = countDaysFromLunarNewYear(lunarMonthOfBirthday, lunarDayOfBirthday);

    for (solarMonth = startingLunarMonthInCurrentYear; solarMonth <= lunarMonthOfBirthday; solarMonth++) {
        if (solarDay > solarDaysForEachMonthInCurrentYear[solarMonth]) {
            solarDay -= solarDaysForEachMonthInCurrentYear[solarMonth];
        } else {
            break;
        }
    }
     
    if (++solarMonth == 13) { // is not for index so we have to add 1 to make actual month
        solarMonth = 1;
    } 

    return new Date(solarYear + "-" + solarMonth + "-" + solarDay);
}

function getUpcomingLunarBirthdayYear(lunarMonthOfBirthday, lunarDayOfBirthday) {
    if (lunarMonthOfBirthday == 12 && lunarDayOfBirthday > 9) {
        return currentYear + 1;
    } else {
        return currentYear;
    }
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

function showSolarBirthday(lunarBirthday, nextBirthday) {
    const birthday = new Date(lunarBirthday);
    const upcomingBirthday = new Date(nextBirthday);

    const lunarYearOfBirthday = birthday.getUTCFullYear();

    const upcomingYearOfBirthday = upcomingBirthday.getUTCFullYear();
    const upcomingMonthOfBirthday = upcomingBirthday.getUTCMonth();
    const upcomingDayOfBirthday = upcomingBirthday.getUTCDate();

    const lunarAge = upcomingYearOfBirthday - lunarYearOfBirthday;

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

        console.log(` ${monthsInString[upcomingMonthOfBirthday]} ${upcomingDayOfBirthday}, ${upcomingYearOfBirthday}.\n`); 
    }
}
