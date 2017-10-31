
// Мы можем обьявить функцию 3 способами:

function isNimble(){ return true; } 
var canFly = function(){ return true; }; 
window.isDeadly = function(){ return true; }; 

// Чем они отличаются друг от друга?

// Первый называется Function declaration. Второй и третий - Function expression.

// В случае Function declaration функцию можно вызывать в коде до ее объявления, а в случае
// Function expression - нельзя.



// Task 1:

// Написать функцию color(), которая будет генерировать случайный цвет в RGB формате.

function color() {

    function rgb () {
        return Math.floor(Math.random()*256);

    }

    return `rgb(${rgb()}, ${rgb()}, ${rgb()})`

}

color();


// Task 2:

//Напишите функцию, генерирующую массив с N количеством элементов товара вида «Товар N»,
// где N номер товара который вы будете передавать в функцию. Выведите на экран массив.

function getProducts (n) {

    var arr = [];
    for (var i = 1; i <= n; i++) {
        arr.push('Products ' + i)
    }
    return arr;


}
getProducts(50); // ["Products 1", "Prodcuts 2" ... ] and etc.


// Task 3:

// Write function that will get the
// 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
// What is the sum of the digits of the number 2^1000?


function getSmth(x , y) {

    if (y > 0) {
        var arr = [],
            sum = 0,
            res = x;
        for (var i = 1; i < y; i++) {
            res*= x;
        }
        arr = (res + '').split('');
        for (var i = 0; i < arr.length; i++) {
            sum += +arr[i];
        }

    } else if ( y === 0) {
        return 1
    } else {
        return "Enter y >= 0"
    }

    return sum;

}


console.log(getSmth(2, 15));











