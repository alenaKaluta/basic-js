const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const condition1 =  options.addition || typeof options.addition === 'boolean';
  const condition2 =  options.addition || typeof options.addition === 'object';
  if (condition1 || condition2) {
    let additionStr = options.addition;
    if (options.additionRepeatTimes > 1) {
      let additionPart;
      if (options.additionSeparator) {
        additionPart = `${options.additionSeparator}${additionStr}`;
      } else {
        additionPart = `|${additionStr}`;
      }
      for (let i = 1; i < options.additionRepeatTimes; i += 1) {
        additionStr += additionPart;
      }
    }
    str = `${str}${additionStr}`;
  }
  let result = str;
  for (let j = 1; j < options.repeatTimes; j += 1) {
    if (options.separator) {
      result += `${options.separator}${str}`;
    } else {
      result += `+${str}`;
    }
  }
  return result;
}

module.exports = {
  repeater
};
