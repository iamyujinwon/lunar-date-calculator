# lunar-date-calculator

lunar-date-calculator is a Javascript library for converting the date in the past to the solar date in the current year.

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

### fromSolarDate(solarYear, solarMonth, solarDay)

This function converts dates two times to get the solar date in current year.

First, it converts the solar date in the past to the lunar date in `solarYear`. 

Next, it converts the calculated lunar date to solar date in the current year.

```javascript

# convert solar to lunar date in the current year
const solar2CurrentLunar = lunaDateCalculator.fromSolarDate(2019, 4, 18);

# output: { year: 2022, month: 4, day: 14 }

```

### fromLunarDate(lunarYear, lunarMonth, lunarDay)

This function converts the lunar date in the past to the solar date in current year.


```javascript

# convert lunar to lunar date in the current year
const lunar2CurrentLunar = lunaDateCalculator.fromLunarDate(2019, 5, 15);

# output: { year: 2022, month: 6, day: 13 }

```