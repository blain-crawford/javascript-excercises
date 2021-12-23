const reverseString = function(str) {
  let strArr = str.split('');
  let reversedStr = '';
  while(strArr.length > 0){
    reversedStr += strArr.pop();
  }
  return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
