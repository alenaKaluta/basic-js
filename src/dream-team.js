const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let result = false;
  if (Array.isArray(members)) {
    const membersFiltered = members.filter(elem => typeof elem === 'string');
    const membersModified = membersFiltered.map(elem => elem.trim());
    const membersSorted = membersModified.sort((a, b) => a.localeCompare(b));
    result = membersSorted.reduce((acc, item) => {
    const firstLetter = item[0].toUpperCase();
    return acc += firstLetter;
  }, '');
  }
  return result;
}

module.exports = {
  createDreamTeam
};
