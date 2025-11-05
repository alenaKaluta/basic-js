const { NotImplementedError } = require('../lib');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const nArr = n.split('-');
  const result = nArr.map(elem => {
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const alphabets = ['A', 'B', 'C', 'D', 'E', 'F'];
    const condition1 = numbers.includes(elem[0]) || alphabets.includes(elem[0]);
    const condition2 = numbers.includes(elem[1]) || alphabets.includes(elem[1]);
    if (condition1 && condition2) {
      elem = true;
    } else {
      elem = false;
    }
    return elem;
  })
  return result.every(item => item === true);
}

module.exports = {
  isMAC48Address
};
