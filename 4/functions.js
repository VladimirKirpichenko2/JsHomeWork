//Task 1:

function getName() {
    this.name = prompt('What is your name:');
}
var obj = {};

getName.call(obj);
getName();

console.log(obj.name);
console.log(name);


//Task 2:

function sumTo(n) {
    var sum = 0,
        i = n;
    for (; i > 0; i--) {
        sum += i;
    }
    return sum
}

sumTo(4);

//Task 3:

// Variant 1:
var vasya = { name: 'Вася', age: 23 };
var masha = { name: 'Маша', age: 18 };
var vovochka = { name: 'Вовочка', age: 6 };
var anechka = { name: 'Анечка', age: 6 };
var dima = { name: 'Дима', age: 18 };

var people = [ vasya , masha , vovochka, anechka, dima ];


people.sort(function compareNums(a, b) {
    return a.age - b.age;
})

console.log(names);
console.log(people[0].age)


// **********************************************

// Variant 2:

var vasya = { name: 'Вася', age: 23 };
var masha = { name: 'Маша', age: 18 };
var vovochka = { name: 'Вовочка', age: 6 };
var anechka = { name: 'Анечка', age: 6 };
var dima = { name: 'Дима', age: 18 };

var people = [ vasya , masha , vovochka, anechka, dima ];

var age = [];

for (var i = 0; i < people.length; i++) {   // Создаем массив с возрастами
    age[i] = people[i].age;
}

age.sort(function compareNums(a, b) {      // Сортируем массив с возрастами
    return a - b;
})

var sortedPeople = [];                     // Создаем новый массив, куда помещаем имена отсортированных обектов
for (var n = 0; n < age.length; n++) {
    for (var m = 0; m < people.length; m++) {
        if (age[n] === people[m].age ) {
            sortedPeople[n] = people[m];
            people.splice(m,1);  // Чтобы не дублировались объекты с одинаковым возрастом
        }
    }
}

people = sortedPeople;
var names = []

for (var i = 0; i < people.length; i++) {
    names[i] = people[i].name
}

console.log(names);
console.log(people[0].age) //6

// Task 4:


var myArr = ['January', 'February', 'March', 'March', 'January', 'January', 'February', 'March' ];

function unique(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j,1);
                j--;
            }
        }
    }
return arr;
}

unique(myArr);





******************


var vasya = { name: 'Вася', age: 23 };
var masha = { name: 'Маша', age: 18 };
var vovochka = { name: 'Вовочка', age: 6 };
var anechka = { name: 'Анечка', age: 6 };
var dima = { name: 'Дима', age: 18 };

var people = [ vasya , masha , vovochka, anechka, dima ];


people.sort(function compareNums(a, b) {      // Сортируем массив с возрастами
    return a.age - b.age;
})

console.log(people);











