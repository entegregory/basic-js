const { NotImplementedError } = require('../extensions/index.js');

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
  let count = 0;
  s1 = s1.split('');
  s2 = s2.split('');

  // Проходим по каждому символу первой строки
  for (let i = 0; i < s1.length; i++) {
    // Находим индекс символа во второй строке
    const index = s2.indexOf(s1[i]);

    // Если символ найден, удаляем его из второй строки и увеличиваем счетчик
    if (index !== -1) {
      s2.splice(index, 1);
      count++;
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount
};
