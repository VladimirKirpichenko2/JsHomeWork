// Task 1:

function isPal(str) {

     var arr = str.toLowerCase().split('');

     for (var i = 0; i < arr.length; i++) {
         if (arr[i] === " ") {
             arr.splice(i, 1);
             i--;
         }
     } console.log(arr, arr.join('') )

     return arr.join('') === arr.reverse().join('');
}

console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false


// Task 2

var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];

function anClean(arr){
    for (var i = 0; i < arr.length; i++) {

        for (var j = i + 1; j < arr.length; j++) {

            if ( arr[i].toLowerCase().split('').sort().join('')
                === arr[j].toLowerCase().split('').sort().join('') ) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr
}

console.log( anClean(arr) ); // 'воз,киборг,корсет' или 'ЗОВ,гробик,сектор'

// Task 3:

var arr = [ 'rrrA', 'toboR', 'ekiL', 'dooG', 'esoR' ];

function anClean(arr){

    arr.reverse();

    for (var i = 0; i < arr.length; i++) {
             arr.splice(i, 1, arr[i].split('').reverse().join(''));
        }
    return arr.join(' ');
}

anClean(arr);


// Task 4:

// 4.1
var sum = 0;

for (var i = 1; i <= 100; i++) {
    sum += i;
}

// 4.2
var sum = 0;

for (var i = 1; i <= 100; i++) {
    sum += !(i % 2) && i;
    console.log(sum);
}

// Task 5:

function callMe (x, y, z) {

    //if (isNaN(x) || isNaN(y) || isNaN(z)) {
    if (typeof (x) === "number" && typeof (y) === "number" && typeof (z) === "number") {
        return x + y + z;
    } else {
        console.error('Веедено не число!');
        return null
    }

}

callMe(5, '' , 15);


// Task 6:

function callMeAgain (arr) {
    return arr.sort().join(',')
}

callMeAgain(["D", "B", 'A'])


// Task 7:

var arr = [
    {name: "L1", age: 45},
    {name: "L1", age: 20},
    {name: "L1", age: 10},
    {name: "L1", age: 78},
    {name: "L1", age: 41},
    {name: "L1", age: 10}
];

arr.sort(function (a, b) {
    return a.age - b.age;
});

console.log(arr);

// Task 8:

var arr = [
    {name: "L1", age: 45},
    {name: "L1", age: 20},
    {name: "L1", age: 10},
    {name: "L1", age: 78},
    {name: "L1", age: 41},
    {name: "L1", age: 10}
];

arr.sort(function (a, b) {
    return a.age - b.age;
});

function getUser() {
    var newName = prompt("Enter your name:");
    var newAge = +prompt("Enter your age:");

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].name === newName && arr[i].age === newAge) {
            alert("Такой пользователь уже существует");
            return;
        }
    }

    for (var n = 0; n < arr.length; n++) {
        if (newAge < arr[n].age) {
            arr.splice(n, 0, {});
            arr[n].name = newName;
            arr[n].age = newAge;
            return
        }
    }

    arr.push({});
    arr[arr.length -1].name = newName;
    arr[arr.length -1].age = newAge;

}

getUser();
console.log(arr);


// Task 9:


var myArr = [13, 35, 3, 443];

function count(arr, n) {
    var sum = 0;

    newArr = arr.join('').split('');

    for (var i = 0; i < newArr.length; i++) {
        if ( +newArr[i] === n ) {
            sum++;
        }
    }
    return sum;
}


count(myArr, 3)

// Task 10:

var anyArr = ['1', '2', '3', '4', '5', '6'];

function changeArr(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length/2; i++) {
        newArr.push(arr[i] + arr[arr.length - (i + 1)]);
    }
    return newArr.join('-');

}

changeArr(anyArr);

// Task 11:

var arr1 = [1,2,3,0,0],
    arr2 = [4,5,6,6,0,20];

function  arrSum( a, b ) {

    maxLength = a.length;

    if (b.length > a.length) {
        maxLength = b.length;
    }
    newArr = [];

    for (var i = 0; i < maxLength; i++) {
        newArr.push((a[i] || 0) + (b[i] || 0))
    }

    return newArr;
}

arrSum(arr1, arr2);

// Task 12:

arr = [1,2,3,4,3,3];

function delEll( a, el) {

    for (var i = 0; i < a.length; i++) {
        if (a[i] === el) {
            a.splice(i, 1);
            i--;
        }
    }
}

delEll(arr, 3);


// Task 13:

var arr1 = [1, 2, 3, 5],
    arr2 = [101, 2, 1, 10, 3],
    arr3 = [2, 1, 3, 5];

function intersection (arr1, arr2 ,arr3) {

    var newArr = [];

    for (var i = 0; i < arr.length; i++) {

        for (var j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {

                for (var k = 0; k < arr3.length; k++) {
                    if (arr1[i] === arr3[k]) {
                        newArr.push(arr1[i]);
                    }
                }

            }

        }
    }
    return newArr;
}

intersection(arr1, arr2, arr3);


// Task 14:

var arr = [2, 3, 1, 4];

function myFunc(arr) {

    for (var i = 0; i < arr.length; i++) {
        for (var n = ( arr[i] - 1 ); n > 0; n-- ) {
            arr.splice(i, 0, arr[i]);
        }
        i += ( arr[i] - 1 );
    }
    return arr;
}

myFunc(arr)

// Task 15:

var arr = [1,2,3];

function addNums(arr, n, size) {

    var dif = size - arr.length;
    for (var i = 0; i < dif; i++) {
        arr.push(n)
    }
    return arr
}

addNums(arr, 7, 10)


// Task 16:

// Part 1:

arr = [-1, 1, 1, 2, 2, -3, 3, 3, 4, -4, 4, 5, 5, 6 , -6, 6 ];

function callMe1(arr) {

    var noDubl = [];

    arr.forEach(function (t) {
        if (noDubl.indexOf(t) === -1) {
            noDubl.push(t)
        }
    });

    noDubl.sort(function (a, b) {
        return a - b;
    });

    return noDubl.slice(0, 3);
}

callMe1 (arr);

// Part 2:
arr = [-1, 1, 1, 2, 2, -3, 3, 3, 4, -4, 4, 5, 5, 6 , -6, 6 ];

function callMe2 (arr) {

    var negativeArr = arr.filter(function (t) { return t < 0 });
    console.log(negativeArr);
    return negativeArr.slice(0, 3);

}

callMe2 (arr);


































