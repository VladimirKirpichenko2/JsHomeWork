// 1 task
// Hoisting или "поднятие переменных"? Что произойдет при выполнении следующего куска кода?

myname = "global";
function func() {
    console.log(myname);
    var myname = "local";
    console.log(myname);
}
func();                        // undefined,  "local"

// 2 task
// Какие языковые конструкции в javascript создают scope? Что произойдет при выполнении следующего куска кода?

var a = 90100;
function someFunc(){
  if(false){
    var a = 1;
  } else {
    var b = 2;
  }
  console.log(b);
  console.log(a);
}
someFunc();           // Scope создают функции. Результат выполнения: 2 , undefined

// 3 task
//На что ссылаеться this в следующем фрагменте кода?

function test() {
  this;
}
test();               // window

// 4 task
// Что такое глобальные переменные ? Как они создаются ? Какие проблемы связаны с использованием глобальных переменных?
// напишите ответы на вопросы своими словами

// Глобальные переменные - это переменные доступные отовсюду.
// Вне функций глобальные переменные содаются следующим образом:
// var a = 0, window.a = 0
// Внутри функции: a = 0
// Глобальные переменные могут быть перезаписаны в другом участке кода


// 5 task
// Почему вызов a(); происходит успешно, а вызов b(); выдает ошибку?

a(); //ok
b(); //error

var b = function(){
 alert( 'function b');
}                              // Потому что функция a объявлена через Function Declaration,
                               // а функция b через Function Expression

function a(){
 alert( 'function a' );
}

// 6 task
// Что выведет в консоль следующий код:

var i = 0;

for (; i< 10; i ++) {
  console.log(i)                    // Цыфры от 0 до 9 вколючительно.
}


// 7 task
//Напишите функцию подсчета факториала числа, но каждый раз возвращая факториал умножайте его на 2 если число четное.

function calcFact(n) {
    var counter = 1;
    return function () {
        var fact = 1;
        for (var i = 1; i <= n; i++) {
            fact *= i;
        }
        if (n % 2) {
            return fact;
        } else {
            return fact * (counter *= 2);
        }
    }


}

var number  = calcFact(4);
console.log(number());
console.log(number());
console.log(number());



// 8 task
//Напишите скрипт, который генерирует случайную строку. В строке должны быть маленькие и большие латинские буквы, цифры и подчеркивание.

function randomString (sizeLimit) {
    var arr = [];
    var charsCodes = [[48, 57], [65,90], [97, 122], [95, 95]];
    function randInRange (n, m){
        return Math.floor(Math.random()*( m - n + 1 ) + n);
    }
    stringSize = randInRange(1, sizeLimit);
    for (var i = 0; i < stringSize; i++) {
        charCodeRange = randInRange (0 , 3);
        randomCharCode = randInRange(charsCodes[charCodeRange][0], charsCodes[charCodeRange][1]);
        char = String.fromCharCode(randomCharCode);
        arr.push(char);
    }
    return arr.join('');
}

randomString(2000);



// 10 task

//Реализуйте функцию union, которая объединит уникальные элементы всех массивов, переданных ей параметром.
//Пример: union([1, 2, 3], [101, 2, 1, 10], [2, 1]) вернёт [1, 2, 3, 101, 10].

function union () {
    var resArr = [];
    for (var i = 0; i < arguments.length; i++) {
        var arr = arguments[i]
        for (var j = 0; j < arr.length ; j++) {
            if (resArr.indexOf(arr[j]) < 0 ) {
                resArr.push(arr[j]);
            }
        }
    }
    return resArr;

}

union([1, 2, 3], [101, 2, 1, 10], [2, 1, 300]);

// 11 task
//Реализуйте функцию flatten, которая в случае, если массив обладает уровнями вложенности, приведёт его к элементарному виду (вложенность может быть любой глубины).
//Пример: flatten([1, [2], [3, [[[4]]]]]) вернёт [1, 2, 3, 4].

function flatten (arr) {
    var resArr = [],
        arrayOfArrays = [];

    subFunc (arr);

    function subFunc (a) {
        var elemsArrays = [];
        for (var i = 0; i < a.length; i++) {

            if (!Array.isArray(a[i])) {
                resArr.push(a[i]);
            } else {
                for (var j = 0; j < a[i].length; j++) {
                    elemsArrays.push(a[i][j]);
                }
            }
        }
        if  (elemsArrays.length) {
            arrayOfArrays = elemsArrays;
            subFunc(elemsArrays);
        }
    }
    return resArr;

}

flatten([1, [2], [3, [[[4, [[[5, 6]]]]]]]]);


// 12 task
//Реализуйте функцию unique, которая будет удалять дубли из массива.

arr = [1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4]


function unique (a) {
    newArr = []
    for (var i = 0; i < a.length; i++) {
        if (newArr.indexOf(a[i]) < 0) {
            newArr.push(a[i]);
        }

    }
    return newArr;
}

unique(arr)

