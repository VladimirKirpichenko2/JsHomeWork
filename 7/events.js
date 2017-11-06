//  Links for additional info:
//
// * https://learn.javascript.ru/introduction-browser-events
// * https://learn.javascript.ru/events-and-timing-depth
// * https://learn.javascript.ru/obtaining-event-object
// * https://learn.javascript.ru/event-bubbling
// * https://learn.javascript.ru/event-delegation
// * https://learn.javascript.ru/default-browser-action
// * https://learn.javascript.ru/dispatch-events
// * https://learn.javascript.ru/onload-ondomcontentloaded
// * https://learn.javascript.ru/onload-onerror
// * https://learn.javascript.ru/onscroll
// * https://learn.javascript.ru/keyboard-events
// * https://learn.javascript.ru/mouse-clicks
// * https://learn.javascript.ru/mousemove-mouseover-mouseout-mouseenter-mouseleave
// * https://learn.javascript.ru/mousewheel
// * https://learn.javascript.ru/fixevent
// * http://javascript.ru/tutorial/events/comparison
// * http://javascript.ru/tutorial/events/crossbrowser
// * http://javascript.ru/tutorial/events/properties
// * http://javascript.ru/tutorial/events/intro
//
//  task form lesson
//
//   <form action="">
//     <div>
//       <input type="text">
//       <!-- here is text -->
//     </div>
//
//     <div>
//       <textarea name="" id="textId" cols="30" rows="10"></textarea>
//       <!-- here is text -->
//     </div>
//
//     <div>
//       <input type="checkbox">
//       <!-- this is checked = true -->
//     </div>
//
//     <button>Submit</button>
//   </form>
//
//   <script>
//     document.querySelector('form').addEventListener('submit', function (evt) {
//       // if all the conditions true do noting
//       // else if something is false we should do this:
//       // evt.preventDefault();
//     });
//   </script>
//

document.querySelector('form').addEventListener('submit', function (evt) {

        if (!(evt.target[0].value && evt.target[1].value && evt.target[2].checked)) {
            evt.preventDefault();
        }
    }
);

//  1 task
//
// Write a JavaScript function that accept row, column, (to identify a particular cell) and a string to update the content of that cell.
//
// <!DOCTYPE html>
// <html>
//  <head>
//  <meta charset=utf-8 />
//  <title>Change the content of a cell</title>
//  </head>
//  <body>
//   <table id="myTable" border="1">
//   <tr><td>Row1 cell1</td>
//   <td>Row1 cell2</td></tr>
//   <tr><td>Row2 cell1</td>
//   <td>Row2 cell2</td></tr>
//   <tr><td>Row3 cell1</td>
//   <td>Row3 cell2</td></tr>
//   </table><form>
//   <input type="button" onclick="changeContent()" value="Change content">
//   </form>
//  </body>
// </html>


function changeContent() {
    var row = +prompt("Enter row:")
    var col = +prompt('Enter column:');
    var str = prompt('Enter text:');
    var table = document.getElementById('myTable');

    table.getElementsByTagName('tr')[row - 1].getElementsByTagName('td')[col - 1].innerText = str;

}


//  2 task
//
// Write a JavaScript program to remove selected item from a dropdown list.
//
// <!DOCTYPE html>
// <html>
//  <head>
//   <meta charset=utf-8 />
//   <title>Remove items from a dropdown list</title>
//  </head>
//  <body>
//   <form>
//    <select id="colorSelect">
//     <option>Red</option>
//     <option>Green</option>
//     <option>White</option>
//     <option>Black</option>
//    </select>
//    <input type="button" onclick="removecolor()" value="Select and Remove">
//   </form>
//  </body>
// </html>


function removecolor() {

    var select = document.getElementById('colorSelect');

    for (var i = 0; i < select.children.length; i++) {
        if (select.value === select.children[i].value) {
            select.children[i].remove();
        }
    }
}


//
//  3 task
//
// Write a JavaScript program to highlight the bold words with yellow background of the following paragraph, on mouse over on it.
//
// Text example:
//
// <strong>We</strong> have just started <strong>this</strong> section for the users (<strong>beginner</strong> to intermediate) who <strong>want</strong> to work with <strong>various</strong> JavaScript <strong>problems</strong> and write scripts online to <strong>test</strong> their JavaScript <strong>skill</strong>.</p>
//


//Variant 1:

document.addEventListener('mouseover', func);

function func (e) {
    var target = e.target;

    if (target.tagName === 'STRONG') {
        var defaultColor = target.style.backgroundColor;
        target.style.backgroundColor = 'yellow';

        // добавлять обработчик события на mouseout лучше извне mouseover
        // а так у теб полуается добавляеться куча обработчиком событий на mouseout каждый раз когда ты делаешь mouseover
        document.addEventListener('mouseout', func1);

        function func1() {
            target.style.backgroundColor = defaultColor;
        }


    }

}

// то есть лучше сделать вот так вот:

/* 

document.addEventListener('mouseover', func);
document.addEventListener('mouseout', func2);

function func (e) {
        // ..
}
function func2 (e) {
        // ..
}


*/


// Variant 2:

var strong = document.querySelectorAll('strong');

for (var i = 0; i < strong.length; i++) {
    strong[i].addEventListener('mouseover', func3);

    function func3() {

        var defaultColor = this.style.backgroundColor;
        this.style.backgroundColor = 'yellow';
        this.addEventListener('mouseout', func4);
            //тут тоже самое что и в примере више

        function func4() {
            this.style.backgroundColor = defaultColor;
        }

    }
}


// 4 task
//
// Write a JavaScript function to add rows to a table.
//
// <!DOCTYPE html>
// <html>
//     <head>
//         <meta charset=utf-8 />
//         <title>Insert row in a table - w3resource</title>
//     </head>
//     <body>
//         <table id="sampleTable" border="1">
//         <tr><td>Row1 cell1</td>
//         <td>Row1 cell2</td></tr>
//         <tr><td>Row2 cell1</td>
//         <td>Row2 cell2</td></tr>
//         </table>
//
//         <input type="button" onclick="insert_Row()" value="Insert row">
//     </body>
// </html>


function insert_Row() {

    var table = document.querySelector('table');

    var tdCount = table.querySelector('tr').children.length;
    var trCount = table.querySelectorAll('tr').length;
    var row = document.createElement('tr');

    for (var i = 0; i < tdCount; i++) {

        var col = document.createElement('td');
        col.innerText = `Row${trCount + 1} cell${i + 1}`
        row.appendChild(col);

    }

    table.appendChild(row);

}


//
// ## 5 task
//
// Напишите функцию showNotification(options), которая показывает/скрывает уведомление.
// Элемент уведомление (попап) создайте с помощью html,css и добавьте на страницу, по началу он будет невидимый.
//
// Создайте также 2 кнопки при нажатии на 1 = мы показываем елемент, при нажатии на 2 - скрываем
//
//

setTimeout(function () {
    // тут пишем наш код который покажет наш элемент пользователю
    show();
}, 5000);

/**
 * Показывает или прячет уведомление
 *
 * @param options.show {boolean} показать.скрыть элемент
 */

function showNotification(options) {
    if (options.show) {
        popUp.style.visibility = '';
    } else {
        popUp.style.visibility = 'hidden';
    }
}

function show() {
    showNotification({
        show: true
    })
}

function hide() {
    showNotification({
        show: false
    })
}

var buttonShow = document.createElement('button');
buttonShow.innerText = 'Show Message'
buttonShow.addEventListener('click', show);

var buttonHide = document.createElement('button');
buttonHide.addEventListener('click', hide);
buttonHide.innerText = 'Hide Message'

document.body.appendChild(buttonShow);
document.body.appendChild(buttonHide);

var popUp = document.createElement('div');

popUp.style.backgroundColor = 'black';
popUp.style.color = 'yellow';
popUp.style.position = 'absolute';
popUp.style.right = '100px';
popUp.style.top = '10px';
popUp.style.fontSize = '3em';
popUp.innerText = 'HELLO!!!';
popUp.style.visibility = 'hidden';

document.body.appendChild(popUp);


//Example of usage:

// покажет элемент справа-сверху окна

// showNotification({
//     show: true
// });
// // прячет элемент
// showNotification({
//   show: false
// });


//
//  6 task
//
// На html странице создайте input[type=text]. Запретите водить в инпут символы a, b, c, d, e.
// Любые другие символы должны вводится.
//

var input = document.createElement('input');
input.setAttribute('type', 'text');

input.addEventListener('keypress',func);

var syms = ['a', 'b', 'c', 'd', 'e'];

function func (e) {
    var key = e.key;
    if (syms.indexOf(key) !== -1) {
        e.preventDefault();
    }
}

document.body.appendChild(input);

//  7 task
//
// Дан инпут. При введени в него числа он должен отделять тройки чисел точкой (по мере ввода).
// Например, если я ввожу число:
// 1 = без изменений
// 10 = без изменений
// 100 = без изменений
// 1000 = число изменится на 1.000
//

var input = document.createElement('input');
input.setAttribute('type', 'text');

input.addEventListener('keypress', func);

function func(e) {
    e.preventDefault();
    var arr = (this.value + e.key).split('');
    for (var j = 0; j < arr.length; j++) {
        if (arr[j] === ".") {
            console.log("splice")
            arr.splice(j, 1);
            j--;
        }
    }
    console.log(arr);
    for (var i = 3; i < arr.length; i += 4) {
        arr.splice(-i, 0, '.');
    }

    this.value = arr.join('');
}

document.body.appendChild(input);


//  8 task
//
// На html странице создайте 4 input[type=text]
// Сделайте так, чтобы, в инпут можно было вводить не более 2 символов, когда в инпут ввели 2 или более символов, фокус ввода переносился на следующий инпут, и так со всеми остальными.
// Если это полседний инпут фокус переноситься на 1 = если у него длинна символов < 2, или по аналогии на 2-3 и тд.
// Если во всех инпутах длинна символов превишает 2 то тогда мы просто убираем фокус с инпута и говорим пользователю через alert("Вы ввели все данные")
//

for (var i = 0; i < 4; i++) {
    var input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.addEventListener('focus', funcFocus);
    input.addEventListener('keypress', funcKeyPress);
    document.body.appendChild(input);
}

var inputs = document.querySelectorAll('input');

function funcFocus() {
    if (this.value.length >= 2) {
        this.blur();
        alert("Вы ввели все данные!");
    }
}

function funcKeyPress(e) {
    e.preventDefault();
    this.value += e.key;
    if (this.value.length >= 2) {

        if (this.nextElementSibling && this.nextElementSibling.tagName === "INPUT") {
            this.nextElementSibling.focus();
        } else {
            inputs[0].focus();
        }
    }
}


// ## 9 task
//
// Сделайте два поля ввода, в которые пользователь будет вводить ширину и высоту. Сделайте блок, который будет менять свои размеры когда вы будете менять данные в input которые отвечают за ширину и высоту.
//


var width = document.createElement('input');
width.setAttribute('type', 'text');
width.addEventListener('keypress', changeWidth);

var widthText = document.createElement('text');
widthText.innerText = 'Width:'


var height = document.createElement('input');
height.setAttribute('type', 'text');
height.addEventListener('keypress', changeHeight);

var heightText = document.createElement('text');
heightText.innerText = 'Height:'


var div = document.createElement('div');
div.style.backgroundColor = 'red';
div.style.width  = '10px';
div.style.height  = '10px';
div.style.position = 'absolute';
div.style.top = '50%';
div.style.right = '50%';

function changeWidth(e) {
    div.style.width = this.value + e.key  + 'px';
}

function changeHeight(e) {
    div.style.height = this.value + e.key  + 'px';
}

document.body.appendChild(width);
document.body.insertBefore(widthText, width);
document.body.appendChild(height);
document.body.insertBefore(heightText, height);
document.body.appendChild(div);




// ## 10 task
//
// Дана таблица произвольного размера. По нажатию на ячейку таблицы эта ячейка красится красным фоном ("активируется").
// Сделайте так, чтобы, если активировано 5 ячеек подряд по горизонтали или по вертикали, таблица блокировалась
// (то есть нельзя больше будет активировать ячейки) и выводилось сообщение "завершение активаций".


// Строим таблицу:

var n = 10;
var m = 10;

var myTable =document.createElement('table');
for (var i = 0; i < n; i++) {
    var row = document.createElement('tr');
    for (var j = 0; j < m; j++){
        var col = document.createElement('td');
        col.style.backgroundColor = 'yellow' ;
        col.style.padding = '15px';
        row.appendChild(col);
    }
    myTable.appendChild(row);
}
myTable.setAttribute('border', '1')
document.body.appendChild(myTable);


myTable.addEventListener('click', colorMe);


// Тут мы получаем двумерный массив из ячеек:

var allTr = myTable.getElementsByTagName('tr');
var arrayOfCells2D = [];
for (var x = 0; x < allTr.length; x++) {
    arrayOfCells2D.push([]);
    var td = allTr[x].children;
    for (var y = 0; y < td.length; y++){
        arrayOfCells2D[x][y] = td[y];
    }
}

// Собственно, обработчик событий:

function colorMe(e) {

    if (e.target.tagName === 'TD') {
        var cell = e.target;
            // тут же есть еще this который и будет этим e.target
    } else return;

    var countCells = countMarked(getCellCoord(cell));

    if (countCells.inCol < 5 && countCells.inRow < 5 ){
        cell.style.backgroundColor = 'red';
    } else {
        alert("Завершение активаций!");
        myTable.removeEventListener('click', colorMe);
        return
    }

    // Получаем координаты ячейки по которой клацаем:
    function getCellCoord(cell) {
        var obj = {};
        for (var a = 0; a < arrayOfCells2D.length; a++) {
            for (var b = 0; b < arrayOfCells2D[a].length; b++) {
                if (cell === arrayOfCells2D[a][b]) {
                    obj.row = a;
                    obj.col = b;
                    return obj;
                }
            }
        }
    }

    // Получаем количество отмеченных ячеек в ряду и колонке:
    function countMarked (obj) {
        var count = {};
        count.inRow = 0;
        count.inCol = 0;
        for (var i = 0; i < arrayOfCells2D[obj.row].length; i++) {
            if (arrayOfCells2D[obj.row][i].style.backgroundColor === 'red') {
                count.inRow++;
            }
        }
        for (var j = 0; j < arrayOfCells2D.length; j++) {
            if (arrayOfCells2D[j][obj.col].style.backgroundColor === 'red') {
                count.inCol++;
            }

        }
        return count;

    }
    console.log(getCellCoord(cell));
    console.log(countMarked(getCellCoord(cell)));
}


// ## 11 task
//
// Дан инпут. В него разрешено вводить N символов.
// При введение текста справа появляется счетчик такого типа - "Осталось ввести 10 символов".
// После того, как предел достигнут - текст все равно разрешено вводить, только надпись будет типа "Лимит превышен на 10 символов".
// Вместо 10-ти, конечно же, число в вашем конкретном случае.


var N = 10;

var input = document.createElement('input');
input.setAttribute('type', 'text');
input.style.margin = '10px';
input.addEventListener('keypress', symsLeft);

var inputText = document.createElement('text');
inputText.innerText = `Осталось ввести ${N} символов`;
inputText.style.visibility = "hidden";

document.body.appendChild(input);
document.body.appendChild(inputText);

function symsLeft(e) {

    e.preventDefault();
    this.value += e.key;
    var currentValue = this.value;
    var symCount = currentValue.length
    inputText.style.visibility = "";
    inputText.innerText = `Осталось ввести ${N - symCount} символов`
    if (N - symCount < 0) {
        inputText.innerText = `Лимит превышен на ${symCount - N} символов`
    }

}
















































