/*
Задание 2
Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
*/

function createCounter(value) {
    return {
        increment: () => value + 1,
        decrement: () => value - 1
    }
}

console.log(createCounter(5).increment());