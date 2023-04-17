const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
  // Проверяем, является ли sampleActivity строкой и является ли значение активности положительным числом меньше 15
  if (typeof sampleActivity !== 'string' || isNaN(parseFloat(sampleActivity)) || parseFloat(sampleActivity) <= 0 || parseFloat(sampleActivity) > MODERN_ACTIVITY) {
    return false;
  }

  // Вычисляем константу распада по формуле из ссылки: k = 0.693 / HALF_LIFE_PERIOD
  const decayConstant = 0.693 / HALF_LIFE_PERIOD;

  // Вычисляем возраст образца по формуле: t = ln(N0/N) / k
  // где N0 - активность современного образца, N - активность образца, k - константа распада
  const age = Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / decayConstant);

  return age;
}

module.exports = {
  dateSample
};