// MONTHS START AT 1:
// jan: 1
// feb: 2
// etc...

const countSundays = (day, month, year, firstYear, lastYear, sundays = 0) => {
  const key = {
    0: "SUNDAY",
    1: "mon",
    2: "tue",
    3: "wed",
    4: "thu",
    5: "fri",
    6: "sat",
  };

  if (year > lastYear) return sundays;
  if (day === 0 && year >= firstYear) sundays++;

  // console.log(key[day], month, year);

  let feb = 28;
  if (year % 400 === 0) feb = 29;
  if (year % 100 !== 0 && year % 4 === 0) feb = 29;

  let daysInMonth = 31;
  if (month === 2) {
    daysInMonth = feb;
  } else if ([4, 6, 9, 11].includes(month)) {
    daysInMonth = 30;
  }

  // console.log(daysInMonth);

  for (let i = 1; i < daysInMonth; i++) {
    day++;
    if (day === 7) day = 0;
  }

  if (day === 6) {
    day = 0;
  } else {
    day++;
  }
  month++;
  if (month === 13) {
    month = 1;
    year++;
  }

  return countSundays(day, month, year, firstYear, lastYear, sundays);
};

console.log(countSundays(1, 1, 1900, 1901, 2000));

//
//
//
//
//
// const countSundays = (month, year, firstYear, lastYear) => {
//   console.log(month, year);

//   if (year === lastYear + 1) return month;

//   month++;
//   if (month === 13) {
//     month = 1;
//     year++;
//   }

//   return countSundays(month, year, firstYear, lastYear);
// };

// console.log(countSundays(1, 1900, 1901, 1902));
