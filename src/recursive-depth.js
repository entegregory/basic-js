const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    // Если массив пустой, возвращаем глубину 1
    if (arr.length === 0) {
      return 1;
    }

    // Если массив не содержит других массивов, возвращаем глубину 1
    if (!arr.some(Array.isArray)) {
      return 1;
    }

    // Если массив содержит другие массивы, рекурсивно вычисляем максимальную глубину
    const depths = arr.map(item => (Array.isArray(item) ? this.calculateDepth(item) : 0));
    return 1 + Math.max(...depths);
  }
}

module.exports = {
  DepthCalculator
};
