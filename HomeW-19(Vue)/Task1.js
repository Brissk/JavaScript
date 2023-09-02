/*
Задание 1
Вы разрабатываете приложение для отображения и сортировки списка товаров. У вас есть массив объектов products, где каждый объект представляет товар с его названием и ценой. Вам необходимо отобразить список товаров и предоставить пользователю возможность сортировать товары по цене (по возрастанию и по убыванию).

*/

const HelloVueApp = {
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: "Iphone",
                    price: 100000
                },
                {
                    id: 2,
                    name: "Xiaomi",
                    price: 10000
                },
                {
                    id: 3,
                    name: "Samsung",
                    price: 30000
                },
                {
                    id: 4,
                    name: "Asus",
                    price: 20000
                }
            ]
        }
    },
    methods: {
        productAcsending() {
            this.products.sort()
        }
    }
}


Vue.createApp(HelloVueApp).mount('#hello-vue')

