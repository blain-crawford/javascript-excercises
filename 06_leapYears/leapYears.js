const leapYears = function(year) {
  let leapYear = false;
  //if year divisible by 100 and not 400
  if(year % 100 === 0 && year % 400 !== 0) {
    //return false
    return leapYear;
  //if year is divisible by 4 
  } else if (year % 4 === 0) {
    //make leap year true
    leapYear = true;
  //if year divisible by 100 and 400 return true
  }
  return leapYear;
};

// Do not edit below this line
module.exports = leapYears;
