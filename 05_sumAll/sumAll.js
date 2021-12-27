const sumAll = function(a, b) {
  //set staring and ending number
  let startingNum;
  let endingNum;
  //set up edge cases if eithe less than zero or if type of either not number
  if(a < 0 || b < 0) {
    //return 'ERROR'
    return 'ERROR'
  } else if(typeof a !== 'number' || typeof b !== 'number') {
    //return 'ERROR'
    return 'ERROR'
  }
  //if a is bigger start is a end is b
  if(a > b) {
    startingNum = b;
    endingNum = a;
  } else {
    //else start is b end is a
    startingNum = a;
    endingNum = b;
  }
 
  // set counter
  let counter = 0;
  //iterate from a to b
  for ( let i = startingNum; i <= endingNum; i++) {
    //add each to counter
    counter += i;
  }
  //return counter
  return counter;
};

// Do not edit below this line
module.exports = sumAll;
