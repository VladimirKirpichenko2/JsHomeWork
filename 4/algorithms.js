// Task 1:


function getPrimes(x, y) {
    for (var i = x; i <= y; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
    function isPrime (n) {
        if (n >= 2) {
            for (var i = 1; i < (n - 1); i++)
                if (!(n % (n - i))) {
                    return false;
                } else continue;
            return true;
        } else {
            return false;
        }
    }
}

getPrimes(2, 10);


// Task 2:

var obj = {
    className: 'open menu'
}

function addClass(obj, cls) {
    arr = obj.className.split(' ');
    if (arr.indexOf(cls) === -1) {
        arr.push(cls);
    }
    obj.className = arr.join(' ');
}

addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'

alert( obj.className ); // "open menu new me"


// Task 3:


var obj = {
    className: 'my menu menu'
}

function removeClass(obj, cls) {
    arr = obj.className.split(' ');
    while (arr.indexOf(cls) > -1) {
        arr.splice(arr.indexOf(cls), 1);
    }
    obj.className = arr.join(' ');
}

removeClass(obj, 'menu');
alert( obj.className ); // 'my'


// Task 4:

function numbers() {
    var pr,
        sum = 0,
        arr = [];

    pr = prompt('Enter your numbers:');

    while ((!isNaN(+pr) && pr !== '' && pr !== null  ) ) {
        arr.push(+pr);
        pr = prompt('Enter your numbers:');
    }
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

numbers();


// Task 5:

// Variant 1:
function fib (n) {
    if (n <= 2) {
        return 1;
    } else {
        return fib(n -1) + fib(n -2);
    }
}

fib (7);

// Variant 2:

function fib (n) {
    x = 1;
    y = 1;
    if (n < 3 ) {
        return x;
    } else {
        for (var i = 0; i < n-2; i++){
            z = x + y;
            x = y;
            y = z;
        }
        return z;
    }

}

fib(7);


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

var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};

function func (obj) {
    var maxTasks = 0,
        name;
    for (x in obj) {
        if (obj[x]> maxTasks) {
            maxTasks = obj[x];
            name = x;
        }
    }
    return name;

}

func(tasksCompleted);


















