const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let i = 0;
  while (i < str.length) {
    let number = 1;
    for (let j = i + 1; j < str.length; j += 1) {
      if (str[i] !== str[j]) {
        break
      } else {
        number += 1;
      }
    }
    if (number === 1) {
      result += `${str[i]}`;
    } else {
      result += `${number}${str[i]}`;
    }
    i += number;
  }
  return result;
}

module.exports = {
  encodeLine
};
