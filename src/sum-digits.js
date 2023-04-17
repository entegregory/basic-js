const { NotImplementedError } = require('../extensions/index.js');

/**
 * Дано число, замените это число
 * суммой его цифр, пока мы не получим однозначное число.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * Для 100 результат должен быть 1 (1 + 0 + 0 = 1)
 * Для 91 результат должен быть 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  // Преобразование числа в строку для получения массива цифр
  let digits = n.toString().split('');

  // Пока массив содержит более одного элемента, продолжаем суммировать цифры
  while (digits.length > 1) {
    // Суммируем все цифры числа и преобразуем результат обратно в массив цифр
    digits = digits.reduce((sum, digit) => sum + parseInt(digit), 0).toString().split('');
  }

  // Возвращаем однозначное число
  return parseInt(digits[0]);
}

module.exports = {
  getSumOfDigits
};
