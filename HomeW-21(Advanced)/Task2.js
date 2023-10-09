/*
Задание 2

Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

Вы можете использовать этот массив initialData для начальной загрузки данных при запуске вашего приложения.

*/



const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "3",
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "4",
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];

initialData.forEach((el) => {
    const cardP = document.createElement('p');
    cardP.textContent = el.reviews[0].text;
    userComments.prepend(cardP);
});

checkInput.addEventListener('click', function () {
    try {
        const userInp = userInput.value;
        if (userInp.length < 50) {
            hintForUser.textContent = 'Введите больше текста!';
        }
        else if (userInp.length > 500) {
            hintForUser.textContent = 'Введите меньше текста!';
            throw new Error('Введено не число');
        } else {
            hintForUser.textContent = 'Вы молодец!';
            const cardP = document.createElement('p');
            cardP.textContent = userInp;
            userComments.prepend(cardP);

        }
    } catch (error) {
        console.log(error);
    }
});


