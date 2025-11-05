const { NotImplementedError } = require('../lib');

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
  const strOfN = n.toString();
  let result = strOfN.substring(1);
  for (let i = 1; i < strOfN.length; i += 1) {
    const firstPart = strOfN.substring(0, i);
    const secondPart = strOfN.substring(i + 1, strOfN.length);
    const number = firstPart + secondPart;
    console.log(number);
    if (number > result) {
      result = number;
    }
  }
  return Number(result);
}

module.exports = {
  deleteDigit
};
