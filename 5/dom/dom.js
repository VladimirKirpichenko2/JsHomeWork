// Task 3
// Выведите количество тегов form на странице

var form = document.getElementsByTagName('form');
console.log(form.length);


// Task 4:
// Выведите количество дочерних элементов у тега form#main

var elem = document.querySelector('form#main')
console.log(elem.children.length);


// Task 5:
//Проверьте является ли form#main дочерним элементом для тега body

var elem = document.getElementById("main");
var parent = elem.parentElement;
console.log(parent.tagName === 'BODY');


// Task 6:
//Закрасьте body документа в зеленый цвет

document.body.style.backgroundColor = 'green';


// Task 7:
// Закрасьте body документа в черный цвет, а цвет текста сделайте белым)

document.body.style.backgroundColor = 'black';
document.body.style.color = 'white';


// Task 8:
// Выведите через консоль background цвет body и цвет текста через запятую.
// Используйте встроенные JS методы

var body = document.body;
document.body.style.backgroundColor = 'black';
document.body.style.color = 'white';

console.log(document.body.style.backgroundColor + ', ' + document.body.style.color );

console.log(getComputedStyle(body).backgroundColor + ', ' + getComputedStyle(body).color);


