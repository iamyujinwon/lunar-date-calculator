# lunar-date-calculator

lunar-date-calculator is a Javascript library for converting the date to the solar date in the current or any target year.

## Installation

Use 'npm' to install the package.

```bash
npm i lunar-date-calculator
```

## Definition

### Lunar Calendar

> A lunar calendar is a calendar based on the monthly cycles of the Moon's phases (synodic months, lunations), in contrast to solar calendars, whose annual cycles are based only directly on the solar year. 


From [wikipedia](https://en.wikipedia.org/wiki/Lunar_calendar)

### Solar Calendar

> A solar calendar is a calendar whose dates indicate the season or almost equivalently the apparent position of the Sun relative to the stars. The Gregorian calendar, widely accepted as a standard in the world, is an example of a solar calendar. 


From [wikipedia](https://en.wikipedia.org/wiki/Solar_calendar)


## Usage

### fromSolarDate(solarYear, solarMonth, solarDay, targetYear = currentYear)

This function converts dates two times to get the solar date in the `currentYear` or any `targetYear`.

A `targetYear` is an optional parameter so that if `targetYear` is undefined, the default value is `currentYear`.

First, it converts the solar date to the lunar date in `solarYear`. 

If `targetYear` is defined, it converts the caculated lunar date to the solar date in the `targetYear`.

Otherwise, it converts the lunar date to the solar date in `currentYear`.

```javascript
import lunaDateCalculator from 'lunar-date-calculator';

// convert solar to lunar date in the current year (default value)
const solar2CurrentLunar = lunaDateCalculator.fromSolarDate(2007, 4, 18);
// output: { year: 2022, month: 4, day: 2 }

// convert solar in the future to lunar date in the target year
const solarInFuture2TargetLunar = lunaDateCalculator.fromSolarDate(2007, 4, 18, 1999);
// output: { year: 1999, month: 4, day: 17 }

// convert solar in the past to lunar date in the target year
const solarInPast2TargetLunar = lunaDateCalculator.fromSolarDate(2019, 4, 18, 2021);
// output: { year: 2021, month: 4, day: 13 }

```

### fromLunarDate(lunarYear, lunarMonth, lunarDay, targetYear = currentYear)

This function converts the lunar date to the solar date in the `currentYear` or any `targetYear`.

A `targetYear` is an optional parameter so that if `targetYear` is undefined, the default value is `currentYear`.

```javascript
import lunaDateCalculator from 'lunar-date-calculator';

// convert lunar to lunar date in the current year (default value)
const lunar2CurrentLunar = lunaDateCalculator.fromLunarDate(2007, 5, 15);
// output: { year: 2022, month: 6, day: 13 }

// convert lunar in the future to lunar date in the target year
const lunarInFuture2TargetLunar = lunaDateCalculator.fromLunarDate(2007, 5, 15, 1999);
// output: { year: 1999, month: 6, day: 28 }

// convert lunar in the past to lunar date in the target year
const lunarInPast2TargetLunar = lunaDateCalculator.fromLunarDate(2007, 5, 15, 2019);
// output: { year: 2019, month: 6, day: 17 }

```