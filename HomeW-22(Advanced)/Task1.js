/*
Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

Страница добавления отзыва:

Поле для ввода названия продукта.
Текстовое поле для самого отзыва.
Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

Страница просмотра отзывов:

Показывает список всех продуктов, о которых были оставлены отзывы.
При клике на название продукта отображается список всех отзывов по этому продукту.
Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).

*/
const form = document.querySelector('form');
let list = []
addComment.addEventListener('click', () => {
    const name = form.querySelector('[name="name"]')
    const textarea = form.querySelector('[name="textarea"]')
    if (localStorage.getItem(name.value) == null) {
        list.push(textarea.value)
        localStorage.setItem(name.value, JSON.stringify(list));
    } else {
        list = JSON.parse(localStorage.getItem(name.value));
        list.push(textarea.value)
        localStorage.setItem(name.value, JSON.stringify(list));
    }
});
clearBtn.addEventListener('click', () => {
    localStorage.clear();
});






