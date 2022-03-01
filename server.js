const monthsInString = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// const allDaysInLunarYear = 354;

const prompt = require('prompt-sync')();

const currentYear = new Date().getFullYear();
const solarDaysForEachMonthInCurrentYear = [ 31, 28,  31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
const lunarDaysForEachMonthInCurrentYear = [ 30, 29, 30, 29, 30, 30, 29, 30, 29, 30, 29, 30 ];

const startingLunarMonthInCurrentYear  = 1; 

const lunarYearOfBirthday = parseInt(prompt('your Lunar birth year: '));
const lunarMonthOfBirthday = parseInt(prompt('your Lunar birth month: '));
const lunarDayOfBirthday = parseInt(prompt('your Lunar birth day: '));

const lunarAge = currentYear - lunarYearOfBirthday;

const allDaysSinceLunarNewYear = sumAllDays(lunarMonthOfBirthday, lunarDayOfBirthday); // lunarDaysSinceNewYear

const solarBirthday = getSolarBirthday(allDaysSinceLunarNewYear, startingLunarMonthInCurrentYear);
const solarDayOfBirthday = solarBirthday[1];
const solarMonthOfBirthday = solarBirthday[0];

var ordinal = require('ordinal');

console.log(`\n🎂 Your ${ordinal(lunarAge)} birthday is ${monthsInString[solarMonthOfBirthday]} ${solarDayOfBirthday}, ${currentYear}.\n`);

function sumAllDays(month, day) {
    let sum = 0;
    for (let i = 0; i < month; i++) {
        if (i == month - 1) {
            sum += day;
        } else {
            sum += lunarDaysForEachMonthInCurrentYear[i];
        }
    }
    return sum;
}

function getSolarBirthday(allDays, startingLunarMonthInCurrentYear) {
    let solarDay = allDays;
    let solarMonth = startingLunarMonthInCurrentYear;

    while(solarDay > solarDaysForEachMonthInCurrentYear[solarMonth]) {
        solarDay -= solarDaysForEachMonthInCurrentYear[solarMonth++];
    }

    return [solarMonth, solarDay];
}

// let allDays = countAllDays(monthsDays);
// let allDaysInLunarYear = countAllDays(lunarMonthsDays);

// function countAllDays(monthsArray) {
//     let sum = 0;
//     for (let i = 0; i < monthsArray.length; i++) {
//         sum += monthsArray[i];
//     }
//     return sum;
// }


// console.log("\n******  You have to enter your lunar birthday!  ******\n");

// const birthYear = parseInt(prompt('your birth Lunar Year: '));
// const birthMonth = parseInt(prompt('your birth Lunar Month: '));
// const birthDay = parseInt(prompt('your birth Lunar Day: '));

// function countDaysBeforeBirthday() { 
//     let days = birthDay;
//     for(let i = 0; i < birthMonth - 1; i++) {
//         days += lunarMonthsDays[i]; 
//     }
//     console.log(days);
//     return days;
// }

// let monthIndex = 0;
// let startingDays = 32; // february 1st, 2022
// function findStartingSolarDateInMonth() {
//     if (startingDays > monthsDays[monthIndex]) {
//         startingDays -= monthsDays[monthIndex++];
//     }
//     solarDateInMonth = startingDays;
//     return solarDateInMonth;
// }

// function convertLunarToSolar() {
//     let days = countDaysBeforeBirthday();

//     console.log(days);
//     console.log(monthIndex);



//     for (let i = monthIndex; days - monthsDays[i] < 0; i++) {
//         if (i == monthIndex) {
//             days -= monthsDays[i] - solarDate;
//             console.log(days);
//             console.log("monthIndex same!");

//         } else {
//             if (days > monthsDays[i]) {
//                 days -= monthsDays[i];
//             }
//         }
//         console.log(days);
//     }

//     console.log(days);
//     return days;
// }

// let exactDate = convertLunarToSolar();
// let exactMonth = months[monthIndex];

// console.log (`Your Lunar birthday in 2022 is: ${exactMonth} ${exactDate}`);

// countAllDays(birthYear);

// function countAllDays(birthYear) {
//     if (birthYear % 4 == 0) {
//         allDaysInYear = allDaysExceptFeb + februaryInLeapYear;
//     } else {
//         allDaysInYear = allDaysExceptFeb + februaryNotInLeapYear;
//     }
// }

