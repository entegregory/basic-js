const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(inputString) {
  // Создаем регулярное выражение для проверки MAC-48 адреса
  // \b - указывает на границу слова
  // [0-9A-F] - ожидаем символы от 0 до 9 или от A до F (шестнадцатеричные цифры)
  // [0-9A-F]{2} - ожидаем две шестнадцатеричные цифры
  // (?:-[0-9A-F]{2}){5} - ожидаем 5 групп, состоящих из дефиса и двух шестнадцатеричных цифр
  // \b - указывает на границу слова
  const regex = /\b[0-9A-F]{2}(?:-[0-9A-F]{2}){5}\b/;

  // Выполняем проверку строки inputString с помощью регулярного выражения
  // Если строка соответствует паттерну, то функция вернет true, иначе false
  return regex.test(inputString);
}

module.exports = {
  isMAC48Address
};
