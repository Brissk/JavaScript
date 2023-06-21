/* 
Задание 2
Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"
*/

// let userNum = Number(prompt('Enter a number'));

let userNum = '5000';
const isNumeric = n => isNaN(n);

if (isNumeric(userNum)) {
    console.log('Значение задано неверно');
} else {
    salaryTax(userNum);
}

function salaryTax(num) {
    let res = num * 0.87;
    console.log(`Размер заработной платы за вычетом налогов равен ${res}`);
}
