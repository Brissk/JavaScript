/* 
Задание 3
Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, 
которая определяет максимальное значение среди этих чисел
*/


let numb1 = 5;
let numb2 = 7;
let numb3 = 9;

function maxVal(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

console.log(maxVal(numb1, numb2, numb3));