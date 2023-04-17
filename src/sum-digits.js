const { NotImplementedError } = require('../extensions/index.js');

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
