// Task 1:

var a = +prompt('Введите число');
if ( a === 0) {
    console.log('Верно!');
} else {
    console.log('Неверно!');
}

// ?? Проверьте работу скрипта при a, равном 1, 0, -3. (через функцию делать чтобы куча раз не писать)

// Task 2:

var a = prompt('Введите слово');
if ( a === 'test' ) {
    console.log('Верно!');
} else {
    console.log('Неверно!');
}

// Task 3:

// Variant 1:

var a = true;
if ( a === true ) {
    // тут можно сокращенно написать if(a)
    console.log('Верно!');
} else {
    console.log('Неверно!');
}
// ?? Проверьте работу скрипта при a других. (через функцию делать чтобы куча раз не писать)

// Variant 2:

var a = true;
a === true ? console.log('Верно!') : console.log('Неверно!');


// Task 4:

var a = 3, b = 1;
var result = a + b;
if ( result > 5 ) {
    result = 5;
} else if ( result < 5 ) {
    result *= 10;
}
alert(result);

// ?? Проверьте работу скрипта при a других. (через функцию делать чтобы куча раз не писать)

// Task 5:

var a = 5;
if ( a === 0 || a === 2 ) {
    a /= 10;
} else {
    a += 7;
}
alert(a);

// ?? Проверьте работу скрипта при a других. (через функцию делать чтобы куча раз не писать)

// Task 6:

var a = 0, b = 6;
if ( a <= 1 && b >= 3 ) {
    alert(a + b);
} else {
    alert('Неверно');
}

// ?? Проверьте работу скрипта при a других. (через функцию делать чтобы куча раз не писать)

// Task 7:

var a = 10, b = 5;
if ( a > 2 && a < 11 || b >= 6 && b < 14 ) {
    a += 2;
} else {
    a += 5;
}
alert (a);

// Task 8:

var num = 5, result;
switch (num){
    case 1:
        result = 'Зима';
        break;
    case 2:
        result = 'Весна';
        break;
    case 3:
        result = 'Лето';
        break;
    case 4:
        result = 'Осень';
        break;
    default:
        result = 'Нечто'
}
alert(result);

// Task 9:

// Variant 1:

var lang = 'ru';
var arr = [];
var daysRu = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вт',];
var daysEn = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su',];
var daysDe = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So',];

if ( lang === 'ru' ) {
    arr = daysRu;

} else if ( lang === 'en' ) {
    arr = daysEn;

} else if ( lang === 'de' ) {
    arr = daysDe;
} else {
    arr[0] = 'Пятница!';
}

alert(arr);
console.log(arr);

// Variant 2:

var lang = 'de';
var arr = [];
var days = [['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вт',],
            ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su',],
            ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So',],
];
// тут можно было использовать значения daysRu, daysEn и тд

switch (lang) {
    case 'ru':
        arr = days[0];
        break;
    case 'en':
        arr = days[1];
        break;
    case 'de':
        arr = days[2];
        break;
    default:
        arr[0] = 'Пятница!';
}
alert(arr);
console.log(arr);







