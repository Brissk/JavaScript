/*
Вашей задачей является создание веб-слайдера для отображения изображений на веб-странице. Слайдер должен позволять переключаться между изображениями и отображать их в центре экрана.
Создайте интерфейс веб-страницы, который включает в себя следующие элементы:

Контейнер для отображения текущего изображения.
Кнопки "Предыдущее изображение" и "Следующее изображение" для переключения между изображениями.
Навигационные точки (индикаторы) для быстрого переключения между изображениями.
Используйте HTML для создания элементов интерфейса.

Используйте JavaScript для обработки событий:

При клике на кнопку "Предыдущее изображение" должно отображаться предыдущее изображение.
При клике на кнопку "Следующее изображение" должно отображаться следующее изображение.
При клике на навигационные точки, слайдер должен переключаться к соответствующему изображению.
Слайдер должен циклически переключаться между изображениями, то есть после последнего изображения должно отображаться первое, и наоборот.

Добавьте стилизацию для слайдера и элементов интерфейса с использованием CSS для улучшения внешнего вида.

*/

const images = [
    {
        card: 'https://img.freepik.com/free-photo/eye-mythological-dragon-fire-generative-ai_188544-12557.jpg?w=2000'
    },
    {
        card: 'https://img.freepik.com/free-photo/dragons-fantasy-artificial-intelligence-image_23-2150400884.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697587200&semt=ais'
    },
    {
        card: 'https://img.freepik.com/premium-photo/head-evil-red-dragons-with-fiery-flashes-background_124507-31317.jpg'
    },
    {
        card: 'https://t4.ftcdn.net/jpg/05/63/96/77/360_F_563967731_wwGn0f1iz8l5Z9eHdZbjJUoaeatXmcbp.jpg'
    }
]

const imageBox = document.querySelector('.image-box');
const previousBtn = document.querySelector('.previous-btn');
const nextBtn = document.querySelector('.next-btn');
const pagination = document.querySelector('.nav__pagination');
const imagesArray = images.map(el => el.card);

const imgEl = document.createElement('img');
imgEl.setAttribute('width', '100%');
imgEl.setAttribute('src', imagesArray[0]);
imageBox.appendChild(imgEl);

for (let i = 0; i < imagesArray.length; i++) {
    const radioEl = document.createElement('input');
    radioEl.setAttribute('type', 'radio');
    radioEl.setAttribute('id', i);
    radioEl.setAttribute('name', 'radio');
    radioEl.setAttribute('value', imagesArray[i]);
    pagination.appendChild(radioEl);
}
pagination.firstElementChild.setAttribute('checked', '');
const inputRadio = document.querySelectorAll('input');

counter = 0;

nextBtn.addEventListener('click', function () {
    counter++;
    if (counter > imagesArray.length - 1) {
        inputRadio[counter - 1].removeAttribute('checked');
        counter = 0;
        imgEl.setAttribute('src', imagesArray[counter]);
        inputRadio[counter].setAttribute('checked', '');
    } else {
        imgEl.setAttribute('src', imagesArray[counter]);
        inputRadio[counter].setAttribute('checked', '');
        inputRadio[counter - 1].removeAttribute('checked');
    }
});
previousBtn.addEventListener('click', function () {
    counter--;
    if (counter < 0) {
        inputRadio[counter + 1].removeAttribute('checked');
        counter = imagesArray.length - 1;
        imgEl.setAttribute('src', imagesArray[counter]);
        inputRadio[counter].setAttribute('checked', '');
    } else {
        imgEl.setAttribute('src', imagesArray[counter]);
        inputRadio[counter].setAttribute('checked', '');
        inputRadio[counter + 1].removeAttribute('checked');
    }
});

inputRadio.forEach(el => {
    el.addEventListener('click', function () {
        imgEl.setAttribute('src', el.value);
        inputRadio[counter].removeAttribute('checked');
        counter = el.id;
        el.setAttribute('checked', '');
    })
})










