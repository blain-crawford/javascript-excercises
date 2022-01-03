let palindromes = function (string) {
  newString = string
    .replace(/\s/g, "")
    .replace(/[^\w\s]|_/g, "")
    .toLowerCase();

  let stringArr = newString.split("");
  let checkArr = newString.split("");
  checkArr.reverse();

  for (let i = 0; i < stringArr.length; i++) {
    if (newString[i] !== checkArr[i]) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
