// Импорт ошибки "NotImplementedError" из файла '../extensions/index.js'
const { NotImplementedError } = require('../extensions/index.js');

function getEmailDomain(email) {
  // Проверка на валидность входных данных, если email не является строкой, выбросить ошибку
  if (typeof email !== 'string') {
    throw new Error('Invalid input');
  }

  // Используем метод lastIndexOf() для нахождения последнего вхождения символа "@" в строке
  const atIndex = email.lastIndexOf('@');

  // Если символ "@" не найден, выбросить ошибку
  if (atIndex === -1) {
    throw new Error('Invalid email address');
  }

  // Используем метод slice() для извлечения подстроки из строки, начиная с символа после "@" и возвращаем полученный домен
  return email.slice(atIndex + 1);
}

// Экспорт функции getEmailDomain
module.exports = {
  getEmailDomain
};