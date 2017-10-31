// Links for additional info:
// https://learn.javascript.ru/global-object
// https://learn.javascript.ru/closures
// https://learn.javascript.ru/closures-module
// https://learn.javascript.ru/closures-usage

// Домашнее задание по JS - контексты

// Опеределить на какой контекст будет ссылатся this в результате выполнений следующих примеров



function isContextEqualTo(contextLink) {
   console.log(contextLink === this);
}

function name() {
   isContextEqualTo(window); // true
}

var name = "Vasya";

var user = {
    getName: function () {
        isContextEqualTo(window); // true
        isContextEqualTo(user); // false
    }
}

console.log(user.getName()); // true , false

var getName = user.getName;

console.log(getName()); // true , false

user.getName = name;

console.log(user.getName()); // error

user.getName.call(window); // error


