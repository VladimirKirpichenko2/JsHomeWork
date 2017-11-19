// #### Links for additional info:
//
// * https://itvdn.com/ru/blog/article/programing-javascript
// * https://habrahabr.ru/post/138062/
// * https://learn.javascript.ru/settimeout-setinterval
// * https://learn.javascript.ru/promise#итого
// * https://habrahabr.ru/company/zerotech/blog/317256/
//
//
// ## 1 task
//
// Напишите функцию printNumbersInterval(), которая последовательно выводит в консоль числа от 1 до 20, с интервалом между числами 100мс.
// То есть, весь вывод должен занимать 2000мс, в течение которых каждые 100мс в консоли появляется очередное число. (используйте setTimeout)
//


// Use timers.html to check the task

function  printNumbersInterval(){
    var i = 1;
    var timer = setTimeout(
        function time () {
            console.log(i++);
            if (i <= 20) {
                timer = setTimeout(time, 100);
            }
        }
        , 100);

}
printNumbersInterval();



// ## 2 task
//
// Выполните 1 задание используя только setInterval

// Use timers.html to check the task

function  printNumbersInterval() {
    var i = 1;
    var inteval = setInterval(function () {
        console.log(i++);
        if (i > 20) {
            clearInterval(inteval);
        }
        }, 100

    )
}

printNumbersInterval();

//
// ## 3 task
//
// Создайте страницу с блоком таймера и 3 кнопки - Стоп, Старт и Пауза. <br/>
// При нажатии на Старт - Создайте отсчет от 0 до бесконечности.<br/>
// При нажатии на Стоп остновите отсчет и обнулите его.<br/>
// При нажатии на Пауза остновите отсчет и поменяйте текст кнопки на Продолжить.<br/>
// При нажатии на Продолжить возобновите отсчет.


//Use timers.html to check the task

var div = document.createElement('div');
var start = document.createElement('button');
var stop = document.createElement('button');
var pause = document.createElement('button');
var hoursSpan = document.createElement('span');
var minutesSpan = document.createElement('span');
var secondsSpan = document.createElement('span');
var msSpan = document.createElement('span');
var counterMs = 0,
    counterSec = 0,
    counterMin = 0,
    counterHours = 0,
    hours = '00',
    minutes = '00',
    seconds = '00',
    miliseconds = '00',
    updateMs;

hoursSpan.innerHTML = hours + ':';
minutesSpan.innerHTML = minutes + ':';
secondsSpan.innerHTML = seconds + ':';
msSpan.innerHTML = miliseconds;

start.innerHTML = 'Start';
stop.innerHTML = 'Stop';
pause.innerHTML = 'Pause';

div.style.display = 'inline-block';
div.style.padding = '10px';
div.style.margin = '10px';
div.style.backgroundColor = 'red';

div.appendChild(hoursSpan);
div.appendChild(minutesSpan);
div.appendChild(secondsSpan);
div.appendChild(msSpan);

document.body.appendChild(div);
document.body.appendChild(start);
document.body.appendChild(pause);
document.body.appendChild(stop);

start.addEventListener('click', startTimer);
pause.addEventListener('click', pauseTimer);
stop.addEventListener('click', stopTimer);

var started = false;
var paused = false;

function startTimer() {
    updateMs = setInterval(countMs, 10);
    started = !started;
}

function pauseTimer() {
    togglePauseButton();
    if (started) {
        started = !started;
        clear();
    } else {
        startTimer();
    }
}

function stopTimer() {
    clear();
    if (paused) {
        togglePauseButton();
    }
    started = false;
    hours = '00';
    minutes = '00';
    seconds = '00';
    miliseconds = '00';
    counterMs = 0;
    counterSec = 0;
    counterMin = 0;
    counterHours = 0;

    hoursSpan.innerHTML = hours + ':';
    minutesSpan.innerHTML = minutes + ':';
    secondsSpan.innerHTML = seconds + ':';
    msSpan.innerHTML = miliseconds;
}

function clear() {
    clearInterval(updateMs);
}

function togglePauseButton() {
    paused = !paused;
    if (paused) {
        pause.innerHTML = 'Continue';
    } else {
        pause.innerHTML = 'Pause';
    }
}

function countMs() {
    counterMs++;
    if (counterMs < 10) {
        miliseconds = '0' + counterMs;
    } else if (counterMs < 100) {
        miliseconds = counterMs;
    } else {
        counterMs = 0;
        miliseconds = '0' + counterMs;
        countSec();
    }
    msSpan.innerHTML = miliseconds ;
}

function countSec() {
    counterSec++;
    if (counterSec < 10) {
        seconds = '0' + counterSec;
    } else if (counterSec < 60) {
        seconds = counterSec;
    } else {
        counterSec = 0;
        seconds = '0' + counterSec;
        countMin();
    }
    secondsSpan.innerHTML = seconds + ':';
}

function countMin() {
    counterMin++;
    if (counterMin < 10) {
        minutes = '0' + counterMin;
    } else if (counterMin < 60) {
        minutes = counterMin;
    } else {
        counterMin = 0;
        minutes = '0' + counterMin;
        countHours();
    }
    minutesSpan.innerHTML = minutes + ':';
}

function countHours() {
    counterHours++;
    if (counterHours < 10) {
        hours = '0' + counterHours;
    } else {
        hours = counterHours;
    }
    hoursSpan.innerHTML = hours + ':';
}


//
// ## 4 task
//
// Создайте часы, которые будут показывать текущее время: часы:минуты:секунды в формате 00:00:00.


//Use timers.html to check the task

var div = document.createElement('div');
var hoursSpan = document.createElement('span');
var minutesSpan = document.createElement('span');
var secondsSpan = document.createElement('span');

var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

var showHours;
var showMinutes;
var showSeconds;

formatHours();
formatMinutes();
formatSeconds();

div.style.display = 'inline-block';
div.style.padding = '10px';
div.style.margin = '10px';
div.style.backgroundColor = 'black';
div.style.color = 'yellow';

div.appendChild(hoursSpan);
div.appendChild(minutesSpan);
div.appendChild(secondsSpan);

hoursSpan.innerHTML = showHours;
minutesSpan.innerHTML = showMinutes;
secondsSpan.innerHTML = showSeconds;

document.body.appendChild(div);

setInterval(updateTime, 500);

function formatHours() {
    if (hours < 10) {
        showHours = '0' + hours + ':';
    } else {
        showHours = hours + ':';
    }
}

function formatMinutes() {
    if (minutes < 10) {
        showMinutes = '0' + minutes + ':';
    } else {
        showMinutes = minutes + ':';
    }
}

function formatSeconds() {
    if (seconds < 10) {
        showSeconds = '0' + seconds;
    } else {
        showSeconds = seconds;
    }
}

function updateTime() {
    var currentDate = new Date();

    if (seconds !== currentDate.getSeconds()) {
        seconds = currentDate.getSeconds();
        formatSeconds();
        secondsSpan.innerHTML = showSeconds;
    }

    if (minutes !== currentDate.getMinutes()) {
        minutes = currentDate.getMinutes();
        formatMinutes();
        minutesSpan.innerHTML = showMinutes;
    }

    if (hours !== currentDate.getHours()) {
        hours = currentDate.getHours();
        formatHours();
        hoursSpan.innerHTML = showHours;
    }
}


//
// ## 5 task
//
// Создайте таймер обратного отсчета c той же логикой что и во 2 задании. С кнопками и действиями на них.


//Use timers.html to check the task

var div = document.createElement('div');
var start = document.createElement('button');
var stop = document.createElement('button');
var pause = document.createElement('button');
var hoursSpan = document.createElement('span');
var minutesSpan = document.createElement('span');
var secondsSpan = document.createElement('span');
var updateSec,
    startHours,
    startMinutes,
    startSeconds,
    counterSec = 0,
    counterMin = 0,
    counterHours = 0,
    hours = '00',
    minutes = '00',
    seconds = '00';

hoursSpan.innerHTML = hours + ':';
minutesSpan.innerHTML = minutes + ':';
secondsSpan.innerHTML = seconds;

start.innerHTML = 'Start';
stop.innerHTML = 'Stop';
pause.innerHTML = 'Pause';

div.style.display = 'inline-block';
div.style.padding = '10px';
div.style.margin = '10px';
div.style.backgroundColor = 'red';

div.appendChild(hoursSpan);
div.appendChild(minutesSpan);
div.appendChild(secondsSpan);



var divInputs = document.createElement('div');
var inputHours = document.createElement('input');
var inputMinutes = document.createElement('input');
var inputSeconds = document.createElement('input');

inputHours.setAttribute('type', 'text');
inputHours.setAttribute('placeholder', 'hh');
inputMinutes.setAttribute('type', 'text');
inputMinutes.setAttribute('placeholder', 'mm');
inputSeconds.setAttribute('type', 'text');
inputSeconds.setAttribute('placeholder', 'ss');

inputHours.style.width = '30px';
inputMinutes.style.width = '30px';
inputSeconds.style.width = '30px';

divInputs.appendChild(inputHours);
divInputs.appendChild(inputMinutes);
divInputs.appendChild(inputSeconds);

document.body.appendChild(divInputs);
document.body.appendChild(div);
document.body.appendChild(start);
document.body.appendChild(pause);
document.body.appendChild(stop);

start.addEventListener('click', startTimer);
pause.addEventListener('click', pauseTimer);
stop.addEventListener('click', stopTimer);



function formatHours() {
    if (counterHours < 10) {
        startHours = '0' + counterHours + ':';
    } else {
        startHours = counterHours + ':';
    }
}

function formatMinutes() {
    if (counterMin < 10) {
        startMinutes = '0' + counterMin + ':';
    } else {
        startMinutes = counterMin + ':';
    }
}

function formatSeconds() {
    if (counterSec < 10) {
        startSeconds = '0' + counterSec;
    } else {
        startSeconds = counterSec;
    }
}

var started = false;
var paused = false;

function startTimer() {
    counterHours = +inputHours.value;
    counterMin = +inputMinutes.value ;
    counterSec = +inputSeconds.value;

    formatHours();
    formatMinutes();
    formatSeconds();

    hoursSpan.innerHTML = startHours;
    minutesSpan.innerHTML =startMinutes;
    secondsSpan.innerHTML = startSeconds;


    updateSec = setInterval(countSec, 1000);
    started = !started;
}

function pauseTimer() {
    if (!(counterHours || counterMin || counterSec)) {
        return;
    }
    togglePauseButton();
    if (started) {
        started = !started;
        clear();
    } else {
        updateSec = setInterval(countSec, 1000);
        started = !started;
    }
}

function stopTimer() {
    clear();
    if (paused) {
        togglePauseButton();
    }
    started = false;
    hours = '00';
    minutes = '00';
    seconds = '00';
    counterSec = 0;
    counterMin = 0;
    counterHours = 0;

    hoursSpan.innerHTML = hours + ':';
    minutesSpan.innerHTML = minutes + ':';
    secondsSpan.innerHTML = seconds ;
}

function clear() {
    clearInterval(updateSec);
}

function togglePauseButton() {
    paused = !paused;
    if (paused) {
        pause.innerHTML = 'Continue';
    } else {
        pause.innerHTML = 'Pause';
    }
}

function countSec() {
    counterSec--;
    if (counterSec === -1) {
        counterSec = 59;
    }
    if (counterSec < 10) {
        seconds = '0' + counterSec;
        if (!counterSec) {
            if (((counterMin === 60 || !counterMin)  && !counterHours)) {
                secondsSpan.innerHTML = seconds;
                setTimeout(function() {
                    alert('Time is up!');
                },50);
                clear();
                return;
            }
            counterSec = 60;
        }
    } else if (counterSec < 60) {
        seconds = counterSec;
    }
    if (counterSec === 59) {
        seconds = counterSec;
        countMin();
    }
    secondsSpan.innerHTML = seconds;
}

function countMin() {
    counterMin--;
    if (counterMin === -1) {
        counterMin = 59;
    }
    if (counterMin < 10) {

        minutes = '0' + counterMin;
        if (!counterMin) {
            counterMin = 60;
        }

    } else if (counterMin < 60) {
        minutes = counterMin;
    }
    if (counterMin === 59) {
        minutes = counterMin;
        countHours();
    }
    minutesSpan.innerHTML = minutes + ':';
}

function countHours() {
    counterHours--;
    if (counterHours < 10) {
        hours = '0' + counterHours;
    } else {
        hours = counterHours;
    }
    hoursSpan.innerHTML = hours + ':';
}




//
// ## 6 task
//
// Создайте отсчет в формате (часы:минуты:секунды)00:00:00 от текущего времени (через Date.now() или new Date()) до полуночи.


//Use timers.html to check the task

var div = document.createElement('div');
var timerName = document.createElement('p');
var hoursSpan = document.createElement('span');
var minutesSpan = document.createElement('span');
var secondsSpan = document.createElement('span');

var currentDate = new Date();
var midnightDate = new Date(currentDate.getFullYear(),currentDate.getMonth(),currentDate.getDate() + 1);
var milisecTillMidnight = midnightDate - currentDate;
var timeTillMidnight = new Date(milisecTillMidnight);
var hoursLeft = timeTillMidnight.getUTCHours();
var minutesLeft = timeTillMidnight.getMinutes();
var secondsLeft = timeTillMidnight.getSeconds();

var showHours;
var showMinutes;
var showSeconds;

formatHours();
formatMinutes();
formatSeconds();

div.style.display = 'inline-block';
div.style.padding = '10px';
div.style.margin = '10px';
div.style.backgroundColor = 'black';
div.style.color = 'yellow';

timerName.innerHTML = 'Time till midnight:';


div.appendChild(hoursSpan);
div.appendChild(minutesSpan);
div.appendChild(secondsSpan);

hoursSpan.innerHTML = showHours;
minutesSpan.innerHTML = showMinutes;
secondsSpan.innerHTML = showSeconds;

document.body.appendChild(timerName);
document.body.appendChild(div);

var interval = setInterval(updateTime, 500);

function formatHours() {
    if (hoursLeft < 10) {
        showHours = '0' + hoursLeft + ':';
    } else {
        showHours = hoursLeft + ':';
    }
}

function formatMinutes() {
    if (minutesLeft < 10) {
        showMinutes = '0' + minutesLeft + ':';
    } else {
        showMinutes = minutesLeft + ':';
    }
}

function formatSeconds() {
    if (secondsLeft < 10) {
        showSeconds = '0' + secondsLeft;
    } else {
        showSeconds = secondsLeft;
    }
}

function updateTime() {
     currentDate = new Date();
     midnightDate = new Date(currentDate.getFullYear(),currentDate.getMonth(),currentDate.getDate() + 1);
     milisecTillMidnight = midnightDate - currentDate;
     timeTillMidnight = new Date(milisecTillMidnight);

     if (milisecTillMidnight < 100) {
         clearInterval(interval);
         setTimeout(function() {
             alert('Its midnight now!');
         },50);
         return;
     }
    if (secondsLeft !== timeTillMidnight.getSeconds()) {
        secondsLeft = timeTillMidnight.getSeconds();
        formatSeconds();
        secondsSpan.innerHTML = showSeconds;
    }

    if (minutesLeft !== timeTillMidnight.getMinutes()) {
        minutesLeft = timeTillMidnight.getMinutes();
        formatMinutes();
        minutesSpan.innerHTML = showMinutes;
    }

    if (hoursLeft !== timeTillMidnight.getUTCHours()) {
        hoursLeft = timeTillMidnight.getUTCHours();
        formatHours();
        hoursSpan.innerHTML = showHours;
    }
}



//
// ## 7 task
//
// Создайте галерею с картинками - 4 фотографии в подряд которые будут меняться как в слайдере каждые 4 секунды
// (соотвественно html css должен быть такой чтобы было вижно как они меняются)
//



// Use gallery.html to check the task



var images = document.getElementsByTagName('IMG');
var imageIndex = images.length - 1;

setInterval(changeimage, 4000);

function changeimage () {

    if (imageIndex === 0) {
        for (var i = images.length - 1; i > 0; i--) {
            images[i].style.opacity = '1';
        }
        imageIndex = images.length - 1;
        return;
    }
    images[imageIndex].style.opacity = '0';
    imageIndex--;
}


// ## 8 task
//
// Create function testNum() that will take 1 param: phone number string and define whether it have more than 8 symbols,
// contain only numbers (no slashes and spaces, if have replace them to empty string).
//
// After that create an html page with input field and button, where user will write his/her phone number,
// after user press enter button on the right your function testNum() will check the phone number he enters
// and return to user ok (create span under the input field (color of text must be green)) - if pattern match,
// or error (the same create span with "error" text under (color of text must be red));
//
// After 4 seconds delete the span and the input field should be empty again an the user can try again later.
//



// Use phoneNumber.html to check the task


var input = document.getElementsByTagName('INPUT')[0];
var button = document.getElementsByTagName('BUTTON')[0];
var span = document.createElement('span');

button.addEventListener('click', buttonAction)

function buttonAction () {
    var inputNumber = input.value;
    if (testNum(inputNumber)) {
        goodNumber();
    } else {
        badNumber();
    }
}

function showSpan() {
    span.style.display = 'block';
    span.style.fontWeight = 'bold';
    span.style.fontSize = '200%';
    button.parentElement.insertBefore(span, button);
    setTimeout(removeSpan, 4000);
}

function goodNumber () {
    span.style.color = 'green';
    span.innerHTML = 'Ok';
    showSpan();
}

function badNumber () {
    span.style.color = 'red';
    span.innerHTML = 'Error!';
    showSpan();
}

function removeSpan() {
    span.parentElement.removeChild(span);
    input.value = '';
}

function testNum(phoneNumber) {
    var arr = phoneNumber.split('');
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === ' ' || arr[i] === '/') {
            arr[i] = '';
        }
    }
    var formattedNumber = arr.join('');
    return formattedNumber.length >= 8;
}



