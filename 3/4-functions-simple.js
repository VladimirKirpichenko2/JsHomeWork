// Task 1:

function getName(x, y) {
    var name = prompt("Enter your name: ");
    alert(`Hello, ${name} `);
}

getName();


// Task 2:

function double(x) {
    return x*2;
}

double(6);

// Task 3:

function range(x, y) {
    var sum = 0;
    for (var i = x; i <= y; i++) {
        sum += i;
    }
    return sum;
}

range(0,100);

// Task 4:

function getPrimesSumBelow(x) {
    var sum = 0;
    for (var i = 0; i < x ; i++) {
        if ( isPrime(i) ) {
            sum+= i;
        }
    }
    return sum;
}

function isPrime (x) {
    if (x >= 2) {
        for (var i = 1; i < (x - 1); i++)
            if (!(x % (x - i))) {
                return false;
            } else continue;
        return true;
    } else {
        return false;
    }
}

getPrimesSumBelow(10);


// Task 5:

function isOdd (x) {
    return !!(x % 2);
}


// Task 6:

function oddRange (x, y) {
    for (var i = x; i <= y; i++) {
        if (!!(i % 2)) {
            // you can and should use here function isOdd
            console.log (i);
        }
    }
}


oddRange (1, 20);


// Task 7:

function enterNum() {
    var a = +prompt('Enter a number');
    if (a === 9) {
        return;
    } else {
        enterNum();
    }

}

enterNum();
