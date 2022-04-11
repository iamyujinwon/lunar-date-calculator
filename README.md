# lunar-date-calculator

lunar-date-calculator is a Javascript library for converting a date to the lunar date in the current year.

## Installation

Use 'npm' to install the package.

```bash
npm i lunar-date-calculator
```

## Usage

```javascript

import lunaDateCalculator from 'lunar-date-calculator';

# convert solar to lunar date in the current year
const solar2CurrentLunar = lunaDateCalculator.solarToCurrentLunar(2019, 4, 18);

# convert lunar to lunar date in the current year
const lunar2CurrentLunar = lunaDateCalculator.lunarToCurrentLunar(5, 15);

```

output:

```javascript
{ year: 2022, month: 4, day: 14 }
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
