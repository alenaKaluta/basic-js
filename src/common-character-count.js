const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  const str1Arr = s1.split('').sort((a, b) => a.localeCompare(b));
  const str2Arr = s2.split('').sort((a, b) => a.localeCompare(b));
  let result = 0;
  let i = 0;
  while (i < str1Arr.length) {
    const arr1 = str1Arr.filter(elem => elem === str1Arr[i]);
    const arr2 = str2Arr.filter(elem => elem === str1Arr[i]);
    const charNumber = (arr1.length <= arr2.length) ? arr1.length : arr2.length;
    result += charNumber;
    i += arr1.length;
  }
  return result;
}

module.exports = {
  getCommonCharacterCount
};
