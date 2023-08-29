/*
Задание 1
Создать кнопку "Перевернуть". При клике на кнопку текст кнопки, должен перевернуться и отобразиться в обратном порядке.

*/

const HelloVueApp = {
    data() {
        return {
            message: 'Hello Vue!!',
            count: 0,
            buttonText: 'Перевернуть',
            list: [],

        }
    },
    methods: {
        wordTurn() {
            let result = '';
            for (let i = this.buttonText.length - 1; i >= 0; i--) {
                result += this.buttonText[i];
            }
            this.buttonText = result
        },
        newElem() {
            const elem = 'Новый элемент списка';
            this.list.push(elem);
        },
        showList() {
            for (let i = 0; i < this.list.length; i++) {
                console.log(this.list[i]);
            }
        }
    }
}


/*
Задание 2
есть список элементов. Пользователь может добавлять новые элементы списка с текстом “Новый элемент списка” нажав на кнопку "Добавить". 

*/



Vue.createApp(HelloVueApp).mount('#hello-vue')