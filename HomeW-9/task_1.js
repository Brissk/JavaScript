// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.

const text = document.querySelector('#from');
const span = document.querySelector('span');
document.addEventListener("input", function () {
    span.innerText = text.value;
});

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

const button = document.querySelector('.messageBtn');
const div = document.querySelector('.message');
document.addEventListener("click", function () {
    div.classList.add('animate_animated', 'animate_fadeInLeftBig');
    div.style.visibility = 'visible';
});

/* 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
- Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
- Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.
*/

const form = document.querySelector('form');
const input = document.querySelector('.form-control');
const select = document.querySelector('select');
const btn = form.querySelector('button');
btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (input.value.trim() === "") {
        input.classList.add('error');
        select.classList.add('error');
        input.style.borderColor = 'red';
        select.style.borderColor = 'red';
    } else {
        input.classList.remove('error');
        select.classList.remove('error');
        input.style.borderColor = 'green';
        select.style.borderColor = 'green';
    }
});
