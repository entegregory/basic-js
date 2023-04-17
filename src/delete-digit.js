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
  // Преобразуем число в строку и затем в массив символов
  const digits = String(n).split('');
  let maxNumber = 0;

  // Проходим по массиву цифр
  for (let i = 0; i < digits.length; i++) {
    // Создаем новый массив без текущего элемента
    const newDigits = digits.slice(0, i).concat(digits.slice(i + 1));

    // Преобразуем новый массив обратно в число
    const newNumber = parseInt(newDigits.join(''), 10);

    // Если полученное число больше текущего максимального, обновляем значение maxNumber
    if (newNumber > maxNumber) {
      maxNumber = newNumber;
    }
  }

  return maxNumber;
}

module.exports = {
  deleteDigit
};
