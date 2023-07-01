// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.

const addClass = document.querySelectorAll('.dropdown-item');
addClass.forEach(el => el.classList.add('super-dropdown'));
console.log(addClass);

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.

const button = document.querySelector('.btn');
function btnClass() {
    if (button.classList.contains('btn-secondary')) {
        button.classList.remove('btn-secondary');
    } else {
        button.classList.add('btn-secondary');
    }
};
btnClass();
console.log(button);
btnClass();
console.log(button);

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".

const removeClass = document.querySelector('.menu');
removeClass.classList.remove('dropdown-menu');
console.log(removeClass);

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`

const p = document.querySelector('.dropdown');
const div = p.nextElementSibling;
div.insertAdjacentHTML('afterend', `<a href="#">link</a>`);
console.log(div);

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".

const id = document.querySelector('#dropdownMenuButton');
id.setAttribute('id', '#superDropdown');
console.log(id);


// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.

const data = document.querySelector('[aria-labelledby="dropdownMenuButton"]')
data.dataset.dd = 3;
console.log(data);

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".

const rem = document.querySelector('.dropdown-toggle');
rem.removeAttribute('type');
console.log(rem);