import solarLunar from 'solarLunar';
import ordinal from 'ordinal';

const monthsInString = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const currentYear = new Date().getUTCFullYear();
const currentMonth = new Date().getUTCMonth();
const currentDay = new Date().getUTCDate();
const lunarDaysForEachMonthInCurrentYear = [ 30, 29, 30, 29, 30, 30, 29, 30, 29, 30, 29, 30 ];

const startingLunarMonthInCurrentYear = 1; 

const solarBirthday = new Date(process.argv[2]);
const solarToLunarBirthday = solarToLunar(solarBirthday);

const nextBirthday = getNextBirthday(solarToLunarBirthday);
showSolarBirthday(solarToLunarBirthday, nextBirthday);

function solarToLunar(solarBirthday) {
    const birthdayYear = solarBirthday.getUTCFullYear();
    const birthdayMonth = solarBirthday.getUTCMonth() + 1; 
    const birthdayDay = solarBirthday.getUTCDate();

    const solarToLunar = solarLunar.solar2lunar(birthdayYear, birthdayMonth, birthdayDay);

    return new Date(solarToLunar.lYear, (solarToLunar.lMonth - 1), solarToLunar.lDay); //the month is 0-indexed
}

module.exports = getNextBirthday;

function getNextBirthday(lunarBirthday) {
    const lunarMonthOfBirthday = lunarBirthday.getUTCMonth() + 1; // it should be + 1 to be valid month
    const lunarDayOfBirthday = lunarBirthday.getUTCDate();
    let solarYear = currentYear;
    let solarMonth;
    let solarDay = countDaysFromLunarNewYear(lunarMonthOfBirthday, lunarDayOfBirthday);

    let daysInSpecificMonth;

    for (solarMonth = startingLunarMonthInCurrentYear; solarMonth <= lunarMonthOfBirthday; solarMonth++) {

        daysInSpecificMonth = new Date(solarYear, solarMonth + 1, 0).getDate();

        if (solarDay > daysInSpecificMonth) {
            solarDay -= daysInSpecificMonth;
        } else {
            break;
        }
    }
     
    if (++solarMonth == 13) { 
        solarMonth = 1;
        solarYear++;
    } 
   
    return new Date(solarYear, (solarMonth - 1), solarDay);
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
