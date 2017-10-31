// Links for additional info:

// Passing a function to another function as a callback:
// https://learn.javascript.ru/settimeout-setinterval
// https://forum.freecodecamp.org/t/javascript-callback-functions/14658
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// Tasks for callback functions

// 1 task

//Create a function called: multiplyArray, that using map method (don't use cycles) will return all elements of array
// multiplied to passed value%


function multiplyArray(array, number) {
    return array.map(function (elem) {
        return elem * number
    });
}

multiplyArray([1, 2, 3], 6); // [ 6, 12, 18 ]


// 2 task

// Please create function that will return object with the properties { name, last_name, age, gender },
// from the string passed to it, knowing that string will always be like this: 
// "LastName: last_name; Name: name; Age: age; Gender: gender" where last_name, name, age, gender will be a string values,
// so the following code will work like this:

function createPersonsGetter(strData) {

    var newObj = {};
    var arr = strData.split(';');
    arr.forEach(
        function (item) {
            newObj[item.split(':')[0]] = item.split(':')[1];

        }
    );
    return newObj;

}

createPersonsGetter("Last Name: Karpenko; Name: Lily; Age: 24; Gender: female");
// will return obj:
// {
//  name: "Lily",
//  last_name: "Karpenko",
//  age: 24,
//  gender: "female",
// }

createPersonsGetter("Last Name: Ugly; Name: Foo; Age: 102; Gender: male");
// will return obj:
// {
//  name: "Ugly",
//  last_name: "Foo",
//  age: 102,
//  gender: "male",
// }

// 3 task

//Create a function createPerson(data) that will create Persons inside array PersonsList,
// if person passed to function is already inside the PersonsList please add the properties
// that are ont there inside the needed object by index in Array, eg:

var PersonsList = [];

function createPerson(dataObj) {

    var len = PersonsList.length;

    if (!len) {
        PersonsList.push(dataObj);
        console.log('Aded')
    } else {

        var counter = 0;
        for (var i = 0; i < len; i++) {
            var personObj = PersonsList[i];
            var doit = [];
            for (d in dataObj) {
                if (d in personObj) {
                    if (dataObj[d] !== personObj[d]) {
                        counter++;
                        doit = [];
                        break;
                    }
                } else {doit.push(d)}

            }
            if (doit.length) {
                for (var n = 0; n < doit.length; n++) {
                    personObj[doit[i]] = dataObj[doit[i]];
                }
                break;
            }

        }
        if (counter === len) {
            PersonsList.push(dataObj);
        }
    }

}

createPerson({name: "Lily", age: 24});
createPerson({name: "Lily", last_name: "Karpenko"});
createPerson({name: "Ivan", last_name: "Skoroglyad", age: 70});

console.log(PersonsList) // [{name: "Lily", age: 24, last_name: "Karpenko"}, { name: "Ivan", last_name: "Skoroglyad, age: 70" }]


// 4 task

// Create a function timeToRetire that check forEach person in PersonsList if his or her age
// is more than 50 where person - is object with person data, callback is function that will 
//make some actions with the result of checking:

var PersonsList1 = [{name: "Lily", age: 24}, {name: "Ivan", age: 70}];

function timeToRetire(person, callbackSuccess, callbackError) {

    person.forEach(
        function (t) {
            if (t.age < 50) {
                callbackSuccess(t.name);
            } else {
                callbackError(t.name);
            }
        }
    )

}

timeToRetire(PersonsList1, function (name) {
    alert(`${name}! You are young, still have to work`)
}, function (name) {
    alert(`${name}! Time to rest and read books =)`)
});