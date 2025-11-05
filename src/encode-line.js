const { NotImplementedError } = require('../lib');

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
  if (str.length === 0) {
    return str;
  }
  let result = '';
  let i = 0;
  while (i < str.length) {
    let number = 1;
    while (str[i] === str[i + 1]) {
      number += 1;
      i += 1;
    }
    if (number === 1) {
      result += str[i];
    } else {
      result += `${number}${str[i]}`;
    }
    i += 1;
  }
  return result;
}

module.exports = {
  encodeLine
};
