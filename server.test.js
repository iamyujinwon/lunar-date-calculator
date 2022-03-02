const getLunarAge = require('./server');

test('calculate lunar age between birth year and current year', () => {
  expect(getLunarAge()).toBe(23);
});