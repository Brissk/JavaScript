/*
Задание 3
Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
*/


const rootEl = document.querySelector('.root');

function findElementByClass(params) {
  if (params.children) {
    for (let i of params.children) {
      console.log(findElementByClass(i));
    }
  }
  else {
    return console.log(params.children);
  }
}

findElementByClass(rootEl);