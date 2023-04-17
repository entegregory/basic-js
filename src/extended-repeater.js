const { NotImplementedError } = require('../extensions/index.js');

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
  // Устанавливаем значения по умолчанию для параметров
  options.repeatTimes = options.repeatTimes || 1;
  options.separator = options.separator || '+';
  options.addition = options.hasOwnProperty('addition') ? String(options.addition) : '';
  options.additionRepeatTimes = options.additionRepeatTimes || 1;
  options.additionSeparator = options.additionSeparator || '|';

  // Создаем строку с добавлениями, повторяем additionRepeatTimes раз с разделителем additionSeparator
  const additionString = new Array(options.additionRepeatTimes).fill(options.addition).join(options.additionSeparator);

  // Создаем итоговую строку, повторяем str и добавляем additionString repeatTimes раз с разделителем separator
  return new Array(options.repeatTimes).fill(str + additionString).join(options.separator);
}

module.exports = {
  repeater
};
