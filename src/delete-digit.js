const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
 let maxNumber = 0;
  const numberStr = n.toString();
  for (let i = 0; i < numberStr.length; i += 1) {
    const numberArr = numberStr.split('');
    const numberAtI = numberArr.splice(i, 1);
    const NumberWithoutI = Number(numberArr.join(''));
    if (maxNumber < NumberWithoutI) {
      maxNumber = NumberWithoutI;
    }
  }
  return maxNumber;
}

module.exports = {
  deleteDigit
};
