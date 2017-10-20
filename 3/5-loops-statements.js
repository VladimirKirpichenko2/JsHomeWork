
// Task 1:
var i;
for (i = 0; i <= 15; i++) {
    if (!(i % 2)) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}

// Task 2:
var i;
for (i = 1; i <= 100; i++) {
    if (!(i % 3)) {
        if (!(i % 5)) {
            console.log("FizzBuzz");
        } else {
            console.log("Fizz");
          }
    } else if (!(i % 5)) {
        console.log("Buzz");
    } else {
        console.log(i);
    }

}

// Task 3:

// function grComDiv (x, y) {
//     var min = x;
//     var max = y;
//
//     if (x >= y) {
//         min = y;
//         max = x;
//     }
//     for (var i = 2; i <= (max/2); i++) {
//         if (!( max % i) && !( min % i)) {
//             if ((!( min % i))) {
//                 var div = i;
//             }
//         }
//     }
//     return div || "The numbers has no common divisors";
// }
//
// console.log(grComDiv(21, 56), grComDiv(12, 48));

function grComDiv (x, y) {

    for (i = 2; i <= x; i++) {
        if (!( x % i) && (!( y % i))) {
            div = i;
        }
    }
    return div || "The numbers has no common divisors";
}
console.log(grComDiv(21, 56), grComDiv(12, 48));

// Task 4:

function sum () {
    var sum = 0,
        i;
    for (i = 0; i <= 1000; i++) {
        if ( !(i % 3) && !(i % 5) ) {
            sum += i;
        }
    }
    return sum
}
sum ();

// Task 5:

var i;
for (i = 10; i <= 90; i+= 5) {
    if (!(i % 3)) {
        console.log(i);
    }
}


// Task 6:

var i;
for (i = 70; i >= 11; i--) {
    if (i % 2) {
        console.log(i);
    }
}


// Task 7:

var i;
for (i = 78; i >= 13; i-=3) {
    if (!(i % 2)) {
        console.log(i);
    }
}


