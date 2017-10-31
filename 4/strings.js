//Task 1:


var str = 'aaa@bbb@ccc';

var newStr = str.replace(/@/g, '!');

console.log(newStr);


// Task 2:

var str = 'aaa bbb ccc';
var n = "bbb"
var newStr1 = str.substring(str.indexOf(n), str.indexOf(n) + n.length);
console.log(newStr1);

var newStr2 = str.substr(str.indexOf(n), n.length);
console.log(newStr2);

var newStr2 = str.slice(str.indexOf(n), str.indexOf(n) + n.length);
console.log(newStr2);

// Task 3:

var date = '2025-12-31';

var newDate = date.split("-").reverse().join('/')

console.log(newDate);

// Task 4:

var str = 'js';

var strUp = str.toUpperCase();

console.log(strUp);

// Task 5:

var str = 'я учу javascript!';

console.log(str.length);

// Task 6:


var str = 'Some text';

function trunc (str, n) {
    var result = '';
    if (str.length > n ) {
        result = str.slice(0, n) + '...'
    } else {
        result = str;
    }
    return result;
}

trunc(str, 8);


// Task 7:

var str =  'я учу javascript!';

var arr = str.split(' ');

console.log(arr);

// Task 8:

var arr = ['я', 'учу', 'javascript', '!'];

var str = arr.join('+');

console.log(str);


// Task 9:


var str = 'Javascript';

arr = str.split('');
arr[0] =  arr[0].toUpperCase();

str = arr.join('');

console.log(str);

// Task 10:


var str = 'some good string';


function toUpper(str) {
    arr = str.split(' ');

    newArr = [];

    function func (el) {
        a = el.split('');
        a[0] =  a[0].toUpperCase();
        el = a.join('') ;
        newArr.push(el);
    }
    arr.forEach(func);

    return newArr.join(' ');
}


toUpper(str);

// Task 11:

var str = 'var_test_text'

function toCamelCase (str) {

    arr = str.split('_');

    for (var i = 1; i < arr.length; i++) {

        a = arr[i].split('');
        a[0] = a[0].toUpperCase();
        newStr = a.join('');
        arr[i] = newStr;

    }
    return arr.join('');
}

toCamelCase(str);


// Task 12:

var str = 'varTestText'

function toUnderScore (str) {

    arr = str.split('');

    for (var i = 1; i < arr.length; i++) {

        if (arr[i] === arr[i].toUpperCase()) {
            arr[i] = arr[i].toLowerCase();
            arr.splice(i, 0, '_');
            i++;
        }
    }
    return arr.join('');
}

toUnderScore(str);

// Task 13:

var num = 33112345678;

function splitByThree(n) {

    arr = (n + "").split('');
    for (var i = 0; i < (arr.length - 2); i += 3) {
        arr.splice(-(i+3), 0, " ");
        i++;
    }
    return arr.join('');

}

splitByThree(num);




























