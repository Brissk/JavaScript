/*
Задание 1

• Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

• Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

{
title: "Название альбома",
artist: "Исполнитель",
year: "Год выпуска"
}

• Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
• Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

*/

const musicCollection = [
    {
        title: "Название альбома1",
        artist: "Исполнитель1",
        year: "Год выпуска1"
    },
    {
        title: "Название альбома2",
        artist: "Исполнитель2",
        year: "Год выпуска2"
    },
    {
        title: "Название альбома3",
        artist: "Исполнитель3",
        year: "Год выпуска3"
    }
]

musicCollection[Symbol.iterator] = function () {
    return {
        current: 0,
        to: this.length,
        next() {
            return this.current < this.to
                ? { done: false, value: musicCollection[this.current++] }
                : { done: true };
        }
    }
}

for (let book of musicCollection) {
    console.log(`${book.title} - ${book.artist} (${book.year})`);
}

