const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [], // массив для хранения звеньев цепи

  getLength() {
    return this.chain.length; // возвращает текущую длину цепи в виде числа
  },

  addLink(value) {
    this.chain.push(`( ${value === undefined ? '' : value} )`); // добавляет звено, содержащее строковое представление значения, в цепь
    return this; // делаем метод addLink цепочечным
  },

  removeLink(position) {
    if (typeof position !== 'number' || position <= 0 || position > this.chain.length || !Number.isInteger(position)) {
      this.chain = []; // очищаем текущую цепь
      throw new Error("You can't remove incorrect link!"); // выбрасываем ошибку, если позиция недопустима
    }
    this.chain.splice(position - 1, 1); // удаляем звено цепи на указанной позиции
    return this; // делаем метод removeLink цепочечным
  },

  reverseChain() {
    this.chain.reverse(); // разворачиваем цепь
    return this; // делаем метод reverseChain цепочечным
  },

  finishChain() {
    const finishedChain = this.chain.join('~~'); // завершаем цепь и преобразуем ее в строку
    this.chain = []; // очищаем текущую цепь
    return finishedChain; // возвращаем завершенную цепь
  }
};

module.exports = {
  chainMaker
};