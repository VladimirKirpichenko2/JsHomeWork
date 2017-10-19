// Task 1:

for (var i = 0; i < 51; i++) {
    console.log(i);
}

// Task 2:

var arr = [1, 2, 3 ,4, 5];

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Task 3:

var arr = [2, 3 ,4, 5];
var prod = 1;
for (var i = 0; i < arr.length; i++) {
    prod *= arr[i];
}
console.log(prod);

// Task 4:

var obj = {
    Минск : 'Беларусь',
    Москва : 'Россия',
    Киев : 'Украина'
}

for (x in obj) {
    console.log(`${x} - это ${obj[x]}.`);
}

// Task 5:

var n = 1000,
    num = 0

while ( n >= 50 ){
    n /= 2;
    num++
}

console.log(n);
console.log(num);

// Task 6:

var arr = [2, 5, 9 ,15, 0, 4];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 3 && arr[i] < 10) {
        console.log(arr[i]);
    }
}


// Task 7:

var arr=[
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
];

var mounth = 'Декабрь';

for (var i = 0; i < arr.length; i++) {
    if ( arr[i] == mounth ) {
        console.log('****' + arr[i] + '****');
    } else {
        console.log(arr[i]);
    }
}








