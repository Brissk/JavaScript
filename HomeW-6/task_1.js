/* 
Задание 1
Выполнить все задачи в теге script. Комментарии, в которых написаны задачи, не
стирать, код с решением задачи пишем под комментарием.
*/

// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.

const superLink = document.getElementById('super_link');
console.log(superLink);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".

const cardlink = document.querySelectorAll('.card-link');
cardlink.forEach(el => el.textContent = 'ссылка');

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.

const cardbody = document.querySelectorAll('.card-body .card-link');
console.log(cardbody);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data - number со значением 50 и вывести его в консоль.



// 5. Выведите содержимое тега title в консоль.

const title = document.querySelector('title');
console.log(title.innerText);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.

const cardtitle = document.querySelector('.card-title');
console.log(cardtitle.parentNode);

// 7. Создайте тег p, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

const card = document.querySelector('.card');
const cardP = document.createElement('p');
cardP.textContent = "Привет";
card.prepend(cardP);

// 8. Удалите тег h6 на странице.

const h = document.querySelector('h6');
h.remove();