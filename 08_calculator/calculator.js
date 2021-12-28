const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numArr) {
	let counter = 0;
  for(let i = 0; i < numArr.length; i ++){
    counter += numArr[i];
  }
  return counter;
};

const multiply = function(numArr) {
  let counter = 1;
  for(let i = 0; i < numArr.length; i ++){
    counter *= numArr[i];
  }
  return counter;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	if(num === 0){
    return 1;
  }
  let counter = 1;
  for(let i = 1; i <= num; i++) {
    counter *= i;
  }
  return counter;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
