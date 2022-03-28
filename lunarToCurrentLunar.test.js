const lunarToCurrentLunar = require('./server');

const currentYear = new Date().getUTCFullYear();

test('should convert lunar date to current lunar date', () => {
  let lunar2CurrentLunar = lunarToCurrentLunar(1974, 5, 6);

  expect(lunar2CurrentLunar.year).toBe(currentYear);
  expect(lunar2CurrentLunar.month).toBe(6);
  expect(lunar2CurrentLunar.day).toBe(4);
});