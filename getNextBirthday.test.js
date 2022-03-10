const getNextBirthday = require('./server');

test('should be converted into solar birthday', () => {
  let date = getNextBirthday("1999-4-3");
  let year = date.getUTCFullYear();
  let month = date.getUTCMonth() + 1; 
  let day = date.getUTCDate();  
  
  expect(year).toBe(2022);
  expect(month).toBe(5);
  expect(day).toBe(3);

  date = getNextBirthday("1999-12-9");
  year = date.getUTCFullYear();
  month = date.getUTCMonth() + 1; 
  day = date.getUTCDate();  
  
  expect(year).toBe(2022);
  expect(month).toBe(12);
  expect(day).toBe(31);

  date = getNextBirthday("1999-12-28");
  year = date.getUTCFullYear();
  month = date.getUTCMonth() + 1; 
  day = date.getUTCDate();  
  
  expect(year).toBe(2023);
  expect(month).toBe(1);
  expect(day).toBe(19);
});