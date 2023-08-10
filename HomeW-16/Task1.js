/*
Задание 1
Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) 
и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка. 
Данные при получении необходимо сохранить в локальное хранилище браузера localStorage. При удалении пользователь должен 
удаляться не только со страницы, но и из локального хранилища localStorage
*/

const url = 'https://jsonplaceholder.typicode.com/users';

const getData = async (url) => {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}

try {
    const data = await getData(url);
    console.log(data);
    const userEl = document.querySelector('.users');

    data.forEach(element => {
        const user = `
        <div class="users-box">
        <h3 class="name">${element.name}</h3>
        <p class="username">${element.username}</p>
        <div class="users-delete"><i class="fa-solid fa-xmark"></i></div>
        </div>
        `
        userEl.insertAdjacentHTML('beforeend', user);

        localStorage.setItem(element.name, element.username);
    });
    const deleteBtn = document.querySelectorAll('.users-delete');
    deleteBtn.forEach((el) => {
        el.addEventListener('click', () => {
            const user = el.closest('.users-box');
            const userName = el.closest('.name');
            // localStorage.removeItem(userName);
            user.remove();

        })
    })
} catch (error) {
    console.error('Wrong input');
}

