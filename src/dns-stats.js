const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domainsArr = domains.map((elem) => elem.split('.').reverse()).flat();
  const domainsParts = domainsArr.filter((elem, pos, arr) => arr.indexOf(elem) === pos);
  const result = domainsParts.reduce((acc, item, pos, arr) => {
    const number = domainsArr.filter((elem) => elem === item).length;
    let key = '';
    for (let i = 0; i <= pos; i += 1) {
      key += `.${arr[i]}`
    }
    acc[key] = number;
    return acc;
  },{})
  return result;
}

module.exports = {
  getDNSStats
};
