const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // Проверяем, является ли arr экземпляром массива. Если нет, выбрасываем ошибку.
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  // Создаем новый массив для хранения преобразованных элементов
  let transformed = [];

  // Обходим элементы массива arr
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        // Исключаем следующий элемент из массива, если он существует
        if (i < arr.length - 1) {
          i++;
        }
        break;
      case '--discard-prev':
        // Исключаем предыдущий элемент из массива, если он существует и не был удален
        if (i > 0 && arr[i - 1] !== '--deleted') {
          transformed.pop();
        }
        break;
      case '--double-next':
        // Дублируем следующий элемент массива, если он существует
        if (i < arr.length - 1) {
          transformed.push(arr[i + 1]);
        }
        break;
      case '--double-prev':
        // Дублируем предыдущий элемент массива, если он существует и не был удален
        if (i > 0 && arr[i - 1] !== '--deleted') {
          transformed.push(arr[i - 1]);
        }
        break;
      default:
        // Добавляем текущий элемент в преобразованный массив
        transformed.push(arr[i]);
    }
  }

  // Возвращаем преобразованный массив
  return transformed;
}

module.exports = {
  transform
};
