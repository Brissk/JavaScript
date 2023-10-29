/*
• Создайте HTML-страницу с элементами: изображение, имя фотографа, кнопка "лайк" и счетчик лайков.
• Используя JavaScript и ваш API-ключ, получите случайное изображение из Unsplash каждый раз, когда пользователь загружает страницу.
• Отобразите информацию о фотографе под изображением.
• Реализуйте функционал "лайка". Каждый раз, когда пользователь нажимает кнопку "лайк", счетчик должен увеличиваться на единицу.

* Дополнительные задачи (по желанию):

• Добавьте функцию сохранения количества лайков в локальное хранилище, чтобы при новой загрузке страницы счетчик не сбрасывался.
• Реализуйте возможность просмотра предыдущих "фото дня" с сохранением их в истории просмотров.

https://api.unsplash.com/photos/random?client_id=W1gUEm8u8EMcpF3IAI8oECfGCdLoXq3meYGR6Dz1vbY&count=4
*/

const CLIENT_ID = "NcMjHTa__4twlLaP28avVF_ki52TgJiv0-y9-1iZvXQ";
const slider = document.getElementById("slider");

let slides;
let state = [];
let data = [];
let currentSlide;


const fetchPhotos = async () => {
    try {
        const url = `https://api.unsplash.com/photos/random?client_id=${CLIENT_ID}&count=4&query=food`;
        const response = await fetch(url);
        data = await response.json();

        if (response.ok && data.length) {
            state = data;
            currentSlide = data[0].id;
            setPhotos();
        }
    } catch (err) {
        console.log(err);
    }
};

const renderItem = () => {
    return state
        .map(({ urls: { regular }, user: { name }, id }) => {
            const isActive = currentSlide === id ? "active" : "";
            return `<div class="slide ${isActive}" data-id="${id}" style="background-image: url(${regular})">
                        <div class="slide-text">
                            <span>photo by</span>
                            ${name}
                        </div>                        
                    </div>`;
        })
        .join("");

};

const setPhotos = () => {
    slider.innerHTML = renderItem();
    slides = document.querySelectorAll(".slide");

    for (const slide of slides) {
        slide.addEventListener("click", ({ currentTarget }) => {
            const { id } = currentTarget.dataset;

            if (id === currentSlide) return;

            slides.forEach((slide) => slide.classList.remove("active"));
            currentTarget.classList.add("active");
            currentSlide = id;
        });
    }
};

let counter = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;
const updateCounter = () => {
    counter++;
    localStorage.setItem('counter', counter.toString())
}
const counterEl = document.querySelector('.counter');
const clickEl = document.querySelector(".click-item");

counterEl.textContent = counter;

clickEl.addEventListener('click', () => {
    updateCounter();
    counterEl.textContent = counter;
})

fetchPhotos();






