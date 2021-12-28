const ftoc = function(num) {
  num = (num - 32) * 5/9;
  
  if(num > 0 || num < 0 || num - Math.floor(num) !== 0) {
    let roundTemp = parseFloat(num.toFixed(1));
    return roundTemp;
  }
  return num;
};


const ctof = function(num) {
  num = (num * 9/5) + 32;

  if(num > 0 || num < 0 || num - Math.floor(num) !== 0) {
    let roundTemp = parseFloat(num.toFixed(1));
    return roundTemp;
  }
  return num;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
