const { NotImplementedError } = require('../extensions/index.js');
function calculateHanoi(disksNumber, turnsSpeed) {
  // Рассчитываем минимальное количество ходов, необходимых для решения головоломки
  const turns = Math.pow(2, disksNumber) - 1;

  // Рассчитываем минимальное количество секунд, необходимых для решения головоломки
  const seconds = Math.floor((turns / turnsSpeed) * 3600);

  // Возвращаем объект с результатами расчетов
  return {
    turns: turns,
    seconds: seconds,
  };
}

module.exports = {
  calculateHanoi
};
