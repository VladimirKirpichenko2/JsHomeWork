
// 1 задание

// Создать функцию которая будет создавать html таблицу с цветом фона подобным шахматной доске.
//
// Функция будет принимать три аргумента:
//
// 1. fcolor – первый цвет таблицы
// 2. scolor – второй цвет ячеек таблицы
// 3. contents – массив, содержимое которого может выводиться в таблице.
//
// * для закрашивания цветом ячейки воспользуйтесь своством style.backgroundColor,
// например document.body.style.backgroundColor = 'red' закрасит цвет body в красный цвет то же самое и для ячейки


function createTable(fcolor, scolor, contents ) {
    var myTable =document.createElement('table');
    var n = 10;
    var m = 10;
    for (var i = 0; i < n; i++) {
        var row = document.createElement('tr');
        for (var j = 0; j < m; j++){
            var col = document.createElement('td');
            col.style.padding = '15px';
            col.innerHTML = contents;
            !((i + j) % 2) ? col.style.backgroundColor = fcolor : col.style.backgroundColor = scolor;
            row.appendChild(col);
        }
        myTable.appendChild(row);
    }
    myTable.setAttribute('border', '1')
    document.body.appendChild(myTable);
}


createTable('blue', 'yellow', [':)']);



// 2 задание
//
// Напишите функцию которая вовращает html код таблицы размером NхM.
// Каждая ячейка будет заполняться случайной буквой русского алфавита и случайным цветом фона
// P.S. Для выполнения задания, воспользуйтесь методом random() объекта Math; кроме того создайте массив в элементами – буквами алфавита)

function makeTable(n, m) {

    var arr = [ 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й',
                'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф',
                'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'
    ];

    var myTable =document.createElement('table');
    for (var i = 0; i < n; i++) {
        var row = document.createElement('tr');
        for (var j = 0; j < m; j++){
            var col = document.createElement('td');
            col.innerHTML = arr[Math.floor(Math.random()*(arr.length))];
            col.style.backgroundColor = color();
            col.style.padding = '15px';
            row.appendChild(col);
        }
        myTable.appendChild(row);
    }
    myTable.setAttribute('border', '1')
    document.body.appendChild(myTable);

    function color() {
        function rgb () {
            return Math.floor(Math.random()*256);
        }

        return `rgb(${rgb()}, ${rgb()}, ${rgb()})`
    }

}

makeTable (5,5);



// 3 task

// Here is a sample html file with a submit button. Write a JavaScript function to get the value of the href, hreflang, rel, target, and type attributes of the specified link.
/*<!DOCTYPE html>
<html>
  <head>
    <meta charset=utf-8 />
  </head>
  <body>
    <p>
      <a id="w3r" type="text/html" hreflang="en-us" rel="nofollow" target="_self" href="http://www.w3resource.com/">w3resource</a>
    </p>
  </body>
</html> */

function getValues () {
    var a = document.getElementById('w3r');
    var obj = {
        href : a.getAttribute('href'),
        hreflang : a.getAttribute('hreflang'),
        rel : a.getAttribute('rel'),
        target : a.getAttribute('target'),
        type : a.getAttribute('type')
    };
    return obj;
}

console.log(getValues());



// 4 task

// Here is a sample html file with a submit button.
// Modify the style of the paragraph text through javascript code.


/*<!DOCTYPE html>
<html>
  <head>
    <meta charset=utf-8 />
    <title>JS DOM paragraph style</title>
  </head>
  <body>
    <p id ='text'>JavaScript Exercises - w3resource</p>
    <div>
    <button id="jsstyle"
    onclick="js_style()">Style</button>
    </div>
  </body>
</html>*/

function modify () {
    var p = document.getElementById('text');
    p.style.color = 'cyan';
    p.style.fontWeight = 900;
    p.style.backgroundColor = 'red'

}

modify ();


// 5 задание

// Придумайте самый короткий код для проверки, пуст ли элемент elem.
// «Пустой» — значит нет дочерних узлов, даже текстовых.
//Что написать в условии if ?


if (!elem.firstChild)  {      //  или  firstElementChild

    console.log('elem is empty!');
}


// // 6 задание
// Напишите функцию createElementInBlock(blockLink, elementName) которая будет создавать элемент в блоке blockLink (это может быть любой элемент селектор существующего блока на странице)
// P.S. Эта функция должна проверять наличие элемента в этом блоке, если он уже там есть второй раз она его добавлять не будет!

function createElementInBlock(blockLink, elementName) {

    var elem = document.querySelector(blockLink);
    if (!elem.getElementsByTagName(elementName).length) {
        var newElem = document.createElement(elementName);
        elem.appendChild(newElem);
    } else {
        console.log('Такой элемент уже есть');
    }
    
}

createElementInBlock('#someid', 'table');



// // 7 задание
// Создайте функцию createCloneNode(block) которая которая будет клонировать передаваемый ей элемент и добавять его в конец страницы!
// P.S.: Для клонирование элемента используйте метод cloneNode (в презентации есть примеры)

var a = document.querySelector('span');

function createCloneNode(block) {

    var elem = block.cloneNode();
    document.body.appendChild(elem);
}

createCloneNode(a);



// // 8 задание
// Создайте функцию addChildrenTo(block, count, type) которая будет создавать внутри block count количество детей типа type ( type это будет тип блока например 'span, ul, li, div' и т.д.  )

function addChildrenTo(block, count, type) {

    var newBlock = document.createElement(block);
    for (var i = 0; i < count; i++) {
        var newChild = document.createElement(type);
        newBlock.appendChild(newChild);
    }

    document.body.appendChild(newBlock);

}

addChildrenTo('ul', 5, 'li' );



// // 9 задание
// Напишите функцию replaceElBy(blockCurrent, blockToReplace) которая будет заменять blockCurrent на blockToReplace и выводить сообщение пользователю после успешного проведения операции!

function replaceElBy(blockCurrent, blockToReplace) {

    var current = document.querySelector(blockCurrent);
    var newBlock = document.createElement(blockToReplace);

    current.parentElement.replaceChild(newBlock, current);

}

replaceElBy('ul', 'ol');


// // 10 задание
// Создайте пару элементов с классом 'www'. Добавьте каждому элементу в название класса еще дополнительно название его тега в нижнем регистре.

var el1 = document.createElement('span');
var el2 = document.createElement('div');

el1.setAttribute('class', 'www');
el2.setAttribute('class', 'www');


el1.setAttribute('class', el1.getAttribute('class') + ' ' + el1.nodeName.toLowerCase());
el2.setAttribute('class', el2.getAttribute('class') + ' ' + el2.nodeName.toLowerCase());

document.body.appendChild(el1);
document.body.appendChild(el2);



// // 12 task
// Создайте ol. Вставьте ему в конец li с текстом 'пункт'.

var ol = document.createElement('ol');
var li = document.createElement('li');

li.innerText = 'пункт';

ol.appendChild(li);

document.body.appendChild(ol);



// // 13 task
// Создайте функцию которая принимает массив с элементами, создайте на странице список ul и выведите все элементы массива в отдельный элемент списка li&

var arr = [1, 'Пятница', 300, '=)'];

function createLi (a) {

    var ul = document.createElement('ul');
    for (var i = 0; i < a.length; i++) {

        var li = document.createElement('li');
        li.innerText = a[i];
        ul.appendChild(li);

    }
    document.body.appendChild(ul);
}

createLi(arr);



// // 14 task
// Покрасьте все буквы текста в заданном элементе в разные случайные цвета. Список цветов должен хранится в массиве.
// Две соседние буквы не должны иметь одинаковый цвет.


var colors = ['red', 'green', 'blue', 'magenta', 'orange', 'yellow'];

var newElement = document.createElement('div');

var element  = document.querySelector('p#pid')

var text = element.innerText;

var textArray = text.split('');

for (var i = 0; i < textArray.length; i++) {

    var span = document.createElement('span');

    do {

        var color = colors[Math.floor(Math.random() * colors.length)];

    } while (i > 1 && color === newElement.children[i - 1].style.color);

    span.style.color = color;
    span.innerText = textArray[i];
    newElement.appendChild(span);
}

element.firstChild.parentElement.replaceChild(newElement, element.firstChild);




