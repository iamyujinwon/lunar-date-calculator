const solarToCurrentLunar = require('./server');

const currentYear = new Date().getUTCFullYear();

test('should convert solar date to current lunar date', () => {
  let solar2CurrentLunar = solarToCurrentLunar(1999, 5, 17);

  expect(solar2CurrentLunar.year).toBe(currentYear);
  expect(solar2CurrentLunar.month).toBe(5);
  expect(solar2CurrentLunar.day).toBe(3);
});