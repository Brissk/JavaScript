/*
Задание 2
Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.
*/

const url = 'https://dog.ceo/api/breeds/image/random';

const getData = async (url) => {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}

try {
    const dogEl = document.querySelector('.dogs');
    let count = 0;
    while (count < 10) {
        const data = await getData(url);
        setTimeout(() => {
            const imgEl = document.createElement('img');
            imgEl.src = data.message;
            imgEl.width = 250;
            dogEl.appendChild(imgEl);
        }, 3000);
        count++;
    }

} catch (error) {
    console.error('Wrong input');
}

