/*
Вы разрабатываете веб-страницу для отображения расписания занятий в спортивном клубе. Каждое занятие имеет название, время проведения, максимальное количество участников и текущее количество записанных участников.
Создайте веб-страницу с заголовком "Расписание занятий" и областью для отображения занятий.

Загрузите информацию о занятиях из предоставленных JSON-данных. Каждое занятие должно отображаться на странице с указанием его названия, времени проведения, максимального количества участников и текущего количества записанных участников.

Пользователь может нажать на кнопку "Записаться" для записи на занятие. Если максимальное количество участников уже достигнуто, кнопка "Записаться" становится неактивной.

После успешной записи пользователя на занятие, обновите количество записанных участников и состояние кнопки "Записаться".

Запись пользователя на занятие можно отменить путем нажатия на кнопку "Отменить запись". После отмены записи, обновите количество записанных участников и состояние кнопки.

Все изменения (запись, отмена записи) должны сохраняться и отображаться в реальном времени на странице.

При разработке используйте Bootstrap для стилизации элементов.


*/
const con = [
    {
        count: 1
    },
    {
        count: 5
    }
]

const timetable = [
    {
        name: "football",
        startTime: "10:00",
        maxParticipants: 10,
        currentParticipants: 5
    },
    {
        name: "volleyball",
        startTime: "12:00",
        maxParticipants: 20,
        currentParticipants: 13
    },
    {
        name: "tennis",
        startTime: "16:30",
        maxParticipants: 3,
        currentParticipants: 2
    }
]

const main = document.querySelector('.main');

function getTimetable() {
    timetable.forEach(function ({ name, startTime, maxParticipants, currentParticipants }) {
        const lesson = `
    <div class="lesson__box">
        <div class="lesson__info">
            <h2>Название: <span class="lesson__name">${name}</span></h2>
            <h4>Время начала: <span class="lesson__startTime">${startTime}</span></h4>
            <h4>Максимальное количество участников: <span class="lesson__maxParticipants">${maxParticipants}</span></h4>
            <h4>Текущее количество записанных участников: <span class="lesson__currentParticipants">${currentParticipants}</span></h4>
        </div>
        <div class="lesson__buttons">
            <div class="lesson__accept">
                <button class="button__accept">Записаться</button>
            </div>
            <div class="lesson__delete">
                <button class="button__delete">Отменить запись</button>
            </div>
        </div>
    </div>
    `
        main.insertAdjacentHTML('beforeend', lesson)
    })

    let buttonAcceptEl = document.querySelectorAll('.button__accept');
    buttonAcceptEl.forEach(button => {
        button.addEventListener('click', function () {
            const current = button.closest('.lesson__box').firstElementChild.lastElementChild.firstElementChild;
            const maxPati = button.closest('.lesson__box').firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild;
            if (this.innerText === 'Записаться') {
                this.innerText = 'Записан';
                button.setAttribute('disabled', '');
                const acc = button.closest('.lesson__buttons').lastElementChild.firstElementChild;
                acc.removeAttribute('disabled');
                acc.innerText = 'Отменить запись';
            }
            if (Number(current.innerText) + 1 >= Number(maxPati.innerText)) {
                const p = document.createElement('p')
                p.textContent = 'Достигнуто максимальное количество участников'
                const accept = button.closest('.lesson__accept');
                accept.appendChild(p)
            }
            const newCurrent = Number(current.innerText) + 1;
            current.textContent = newCurrent;

        })
    });
    let buttonDeleteEl = document.querySelectorAll('.button__delete');
    buttonDeleteEl.forEach(button => {
        button.setAttribute('disabled', '');
        button.addEventListener('click', function () {
            const current = button.closest('.lesson__box').firstElementChild.lastElementChild.firstElementChild;
            if (this.innerText === 'Отменить запись') {
                this.innerText = 'Отменено';
                button.setAttribute('disabled', '');
                const acc = button.closest('.lesson__buttons').firstElementChild.firstElementChild;
                acc.removeAttribute('disabled');
                acc.innerText = 'Записаться';
                const p = button.closest('.lesson__buttons').firstElementChild.lastElementChild;
                if (p) {
                    p.remove()
                }
            }
            const newCurrent = Number(current.innerText) - 1;
            current.textContent = newCurrent;
        })
    });
}

getTimetable()









