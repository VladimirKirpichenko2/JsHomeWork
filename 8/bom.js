// ## 1 задание
//
// Запросите у пользователя на сколько пикселей он бы хотел прокрутить данное окно по X и Y! После получения данных от пользователя прокрутите окно на заданные значения!


var pixelsToScroll = +prompt('Enter amount of pixels:');
window.scrollBy(0, pixelsToScroll);


//
// ## 2 задание
//
// Создайте документ в котором будет 4 ifame элемента. Выведите все iframe документа в консоль через методы доступа у window! (через цыкл можно например)

for (var i = 0; i < window.frames.length; i++) {
    console.log(window.frames[i]);
}


// ## 3 задание
//
// Создайте iframe в документе и еще пару элементов в body, в переменной сохраните ссылку на iframe, и через iframe удалите все элементы которые есть в DOM body кроме iframe
//

var iframe = frames[0];
var domBody = iframe.window.parent.document.body;
var domBodyElements = domBody.getElementsByTagName('*');
var iframeInDom = document.getElementsByTagName('iframe')[0];
for (var i = 0; i < domBodyElements.length; i++) {
    if (domBodyElements[i] !== iframeInDom && domBodyElements[i] !== 'script' ) {
        console.log(domBodyElements[i]);
        domBodyElements[i].parentNode.removeChild(domBodyElements[i]);
        i--;
    }
}


// ## 4 задание
//
// На события загрузки контента в iframe создайте новый div элемент через JS и добавьте его в конец документа, в нем должен быть текст: "Iframe загрузился!"

var iframe = document.getElementsByTagName('iframe')[0];
iframe.onload = function () {
    console.log("YEAHHH");
    var newDiv = document.createElement('div');
    newDiv.innerHTML = "Iframe загрузился!";
    document.body.appendChild(newDiv);
}


//
// ## 5 задание
//
// Создайте новый документ (через window.open) который будет шириной в 400, высота 500, без строки url адреса, с видимым статусом,
// окно должно иметь возможность растягиватся по ширине и высоте и в нем должны присутствовать полосы прокурутки!


window.open("https://google.com", "googleeeeeeee!!!",
    "width=400," +
    "height=500," +
    "location=no," +
    "status=yes," +
    "resizable=yes," +
    "scrollbars=yes"
);


// ## 6 задание
//
// Откройте новое окно (через window.open) в котором откройте google поиск и через 5 секунд закройте вкладку
// и выдайте сообщение пользователю что у вас было 5 секунд но вы не успели ничего найти и окно закрылось!)
//

var wind = window.open("https://google.com", "googleeeeeeee!!!", "width=1000,height=500");
var time = setTimeout(function () {
    wind.window.close();
    alert('У Вас было 5 секунд, но вы не успели ничего найти и окно закрылось!')
}, 5000);


// ## 7 задание
//
// В документе создайе блок в котором вы будете заполнять информацию о браузере и платформе пользователя.
// Выведите пользователю информацию о его браузере и о платформе на которой он работает.

var infoDiv = document.createElement('div');
var browser = document.createElement('p');
var platform = document.createElement('p');

browser.innerHTML = 'Browser: ' + navigator.userAgent;
platform.innerHTML = 'Platform: ' + navigator.platform;

document.body.appendChild(browser);
document.body.appendChild(platform);

//
// ## 8 задание
//
// Создайте в документе 5 блоков div в которых будет записано названия браузеров (Chrome, Safari, FireFox, Opera, IE)
// И в зависимости от того каким браузером пользуется клиент вы должны показывать только тот блок который соответствует
// браузер пользователя. Все остальные блоки должны быть скрыты!

var chrome = document.createElement('div');
var safari = document.createElement('div');
var firefox = document.createElement('div');
var opera = document.createElement('div');
var ie = document.createElement('div');


chrome.innerHTML = 'Chrome';
safari.innerHTML = 'Safari';
firefox.innerHTML = 'FireFox';
opera.innerHTML = 'Opera';
ie.innerHTML = 'IE';

var agent = navigator.userAgent;

if ((agent.search(/MSIE/) > -1) || agent.search(/Trident/) > -1) {
    document.body.appendChild(ie);
} else if (agent.search(/Firefox/) > -1) {
    document.body.appendChild(firefox);
} else if ((agent.search(/Opera/) > -1) || (agent.search(/OPR/) > -1)) {
    document.body.appendChild(opera);
} else if (agent.search(/Chrome/) > -1) {
    document.body.appendChild(chrome);
} else if (agent.search(/Safari/) > -1) {
    document.body.appendChild(safari);
}


//
// ## 9 задание
//
// Проверьте подключены ли у пользователя Coockie? Если да то выведите: "Вы используете coockie, вы молодец",
// а если нет выведите: "Для посещения страницы сайта подключите coockie"

if (navigator.cookieEnabled) {
    alert("Вы используете coockie, вы молодец")
} else {
    alert("Для посещения страницы сайта подключите coockie")
}


//
// ## 10 задание
//
// Проверьте версию браузера пользователя, если версия последняя ничего не делайте если версия не последняя
// выведите окно с ссылкой на скачивание новой версии браузера!

var agent = navigator.userAgent;

var browserName,
    version,
    linkToUpdate,
    latestVersion;

function getBrowser() {
    if (agent.search(/MSIE/) > -1) {
        linkToUpdate = 'https://www.microsoft.com/uk-ua/download/details.aspx?id=41628';
        latestVersion = '11';
        return 'IE';
    } else if (agent.search(/Trident/) > -1) {
        latestVersion = '11';
        linkToUpdate = 'https://www.microsoft.com/uk-ua/download/details.aspx?id=41628';
        return 'IE 11';
    } else if (agent.search(/Firefox/) > -1) {
        latestVersion = '56.0';
        linkToUpdate = 'https://www.mozilla.org/uk/firefox/new/';
        return 'FireFox';
    } else if ((agent.search(/Opera/) > -1) ) {
        latestVersion = '49.0.2725.34';
        linkToUpdate = 'http://www.opera.com/uk';
        return 'Opera';
    } else if (agent.search(/OPR/) > -1) {
        latestVersion = '49.0.2725.34';
        linkToUpdate = 'http://www.opera.com/uk';
        return 'operaWebkit'
    } else if (agent.search(/Chrome/) > -1) {
        latestVersion = '61.0.3163.100';
        linkToUpdate = 'https://www.google.ru/chrome/browser/desktop/index.html';
        return 'Chrome';
    } else if (agent.search(/Safari/) > -1) {
        latestVersion = '11.0.1';
        linkToUpdate = 'https://www.apple.com/ru/safari/';
        return 'Safari';
    }
}

browserName = getBrowser();

switch (browserName) {
    case 'IE':
        version = (agent.split("MSIE ")[1]).split(";")[0];
        break;
    case 'IE 11':
        browserName = 'IE';
        version = (agent.split("; rv:")[1]).split(")")[0];
        break;
    case 'FireFox':
        version = agent.split("Firefox/")[1];
        break;
    case 'Opera':
        version = agent.split("Version/")[1];
        break;
    case 'operaWebkit':
        browserName = 'Opera';
        version = agent.split("OPR/")[1];
        break;
    case 'Chrome':
        version = (agent.split("Chrome/")[1]).split(" ")[0];
        break;
    case 'Safari':
        version = (agent.split("Version/")[1]).split(" ")[0];
        break;
}

if (version < latestVersion) {
    window.open(linkToUpdate);
}




// ## 11 задание
//
// Проверьте высоту и ширину экрана пользователя! Если она меньше чем 1366х800 то подставьте в body класс "little-screen", в другом случае добавьте класс "big-screen"!

//var width = document.documentElement.clientWidth;
//var height = document.documentElement.clientHeight;

var width = window.screen.availWidth;
var height = window.screen.availHeight;

if (width < 1366 || height < 800) {
    document.body.className = 'little-screen';
} else {
    document.body.className = 'big-screen';
}

//
// ## 12 задание
//
// Создайте отдлельный проект в котором будет 4 страницы и меню со ссылками на эти 4 страницы!
// Создайте 2 кнопки которые будут делать переходы по истории! Будт 2 кнопки: 1 - "Назад", 2 - "Вперед"!
// При клике на кнопку вперед вы будете направлять пользователя по истории на 1 вперед, при клике назад будете направлять пользователя назад!



// Использовать страницы Page1, Page2, Page3, Page4,

var button1 = document.querySelectorAll('button')[0];
var button2 = document.querySelectorAll('button')[1];

button1.addEventListener('click', whenGoBack);
button2.addEventListener('click', whenGoForward);


function whenGoBack () {
    window.history.back();
}

function whenGoForward () {
    window.history.forward();
}

//
// ## 13 задание
//
// Выведите в документе информацию пользователю: "Page hostname is " + hostname ( вы тут должны вывести номер порта )

var hostname = location.host;
alert('Page hostname is ' + hostname);
