
async function fetchData() {
    try {
        const response = await fetch('data.json');
        console.log(response);

        if (!response.ok) {
            throw new Error('Не удалось обработать data.json')
        }
        const data = await response.json()
        console.log(data);
        const productBox = document.querySelector('.items__box');

        data.forEach(({ image, name, description, price }) => {
            const productEl = `
            <div class="items__product">
                <a class="items__product_link" href="product.html">
                    <img class="items__image" src="${image}" alt="">
                    <div class="items__text">
                        <p class="items__text_1">${name}</p>
                        <p class="items__text_2">${description}</p>
                        <p class="items__text_3">${price}</p>
                    </div>
                </a>
                <div class="items__product_box scale-in-center">
                    <a href="cart.html">
                        <img src="../images/cart-add.svg" alt="">
                        <p>Add to cart</p>
                    </a>
                </div>
            </div>
            `;
            productBox.insertAdjacentHTML('beforeend', productEl)
        });
    } catch (error) {
        console.error(error)
    }
};

fetchData();