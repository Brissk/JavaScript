
async function fetchData() {
    try {
        const responseData = await fetch('data.json');
        const responseItems = await fetch('items.json');

        if (!responseData.ok || !responseItems.ok) {
            throw new Error('Не удалось обработать файлы json')
        }
        const data = await responseData.json();
        const items = await responseItems.json();
        const productBox = document.querySelector('.product__box');
        const itemsBox = document.querySelector('.items__box');


        data.forEach(({ image, name, description, price }) => {
            const productEl = `
            <div class="items__product">
                <a class="items__product_link" href="#">
                    <img class="items__image" src="${image}" alt="">
                    <div class="items__text">
                        <p class="items__text_1">${name}</p>
                        <p class="items__text_2">${description}</p>
                        <p class="items__text_3">${price}</p>
                    </div>
                </a>
                <div class="items__product_box scale-in-center">
                    <a class="items__link">
                        <img src="../images/cart-add.svg" alt="">
                        <p>Add to cart</p>
                    </a>
                </div>
            </div>
            `;
            itemsBox.insertAdjacentHTML('beforeend', productEl);
        });

        const linkEl = document.querySelectorAll('.items__link');
        const cartEl = document.querySelector('.cart');
        const cartTitleEl = document.createElement('h2');
        cartTitleEl.style.textAlign = 'center';


        linkEl.forEach((el) => {
            el.addEventListener('click', function () {
                if (cartEl.firstElementChild.textContent != "Cart Items") {
                    cartTitleEl.textContent = "Cart Items";
                    cartEl.prepend(cartTitleEl);
                }

                const closes = el.closest('.items__product').firstElementChild.lastElementChild.firstElementChild.textContent;

                items.forEach(({ name, image, price, color, size, quantity }) => {
                    if (closes == name) {
                        const productEl = `
                        <div class="product">
                        <button class="btn__del">Удалить</button>
                        <div class="product__content">
                        <img class="product__img" src="${image}" alt="${name}">
                            <div class="product__desc">
                                <h2 class="product__name">${name}</h2>
                                <p class="product__price_label">Цена: <span class="product__price">$${price}</span></p>
                                <p class="product__color">Цвет: ${color}</p>
                                <p class="product__size">Размер: ${size}</p>
                                <div class="product__qty">
                                    <label class="input__label">Количество:</label>
                                    <input class="input__quantity" type="text" value="${quantity}">
                                    </div>
                                    </div>
                                    </div>
                                    </div>`;
                        productBox.insertAdjacentHTML('beforeend', productEl)
                    }
                    const deleteBtn = document.querySelectorAll('.btn__del')
                    deleteBtn.forEach((el) => {
                        el.addEventListener('click', function () {
                            if (!productBox.firstElementChild) {
                                cartTitleEl.textContent = "";
                            }
                            const product = el.closest('.product');
                            product.remove();
                        })
                    })
                })

            })
        })
    } catch (error) {
        console.error(error)
    }


};

fetchData();
