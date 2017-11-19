// You have a document index.html, please do following commands:
//
// ## 1 task
//
// 1) Add remove on li element on click on remove link.
// 2) On click on button please add a new element with right index text
// (eg: if there are 3 elements, the new one should be Element 4)


var ul = document.querySelector('ul');
var lis = ul.children;

for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener('click', removeLi);
}

var addNewButton = document.querySelectorAll('button')[0];
addNewButton.addEventListener('click', addNewFunc);

function removeLi(e) {
    var target = e.target;
    if (target.nodeName === 'A') {
        this.parentElement.removeChild(this);
        renameElements();
    }
}

function renameElements() {
    for (var j = 0; j < lis.length; j++) {
        lis[j].firstChild.textContent = "Element " + (j + 1);
    }
}

function addNewFunc () {
    var elementToAdd = lis[0].cloneNode(1);
    elementToAdd.addEventListener('click', removeLi);
    var currentNumberOfElements = ul.children.length;
    elementToAdd.firstChild.textContent = "Element " + (currentNumberOfElements + 1);
    ul.appendChild(elementToAdd);
    renameElements();
}



//
// ## 2 task
//
// 1) If persons click button add User please check the form inputs, they all are required and should be not empty,
// if something is empty give user info about it (add div after button with text please follow all the fields,
// and add red border to all the
// fields that are empty)
// After 3 seconds delete the info div from page

// 2) If user clicks the button and all fields is not empty, push the new User to UserArray variable,
// and in block Users print the result fields
// with new user description, then clear all fields
//
//


var nameField = document.querySelectorAll('input')[0];
var ageField = document.querySelectorAll('input')[1];
var addNewUserButton = document.querySelectorAll('button')[1];
var warningDiv = document.createElement('div');
var select = document.getElementById('select');

var usersTable = document.createElement('table');
var trHead = document.createElement('tr');

var userArray = [];
var tableHeadings = ['Name', 'Age', 'Gender' ];

var shiftUserArrayIndex = 0;


warningDiv.innerHTML = "Please follow all the fields!";
warningDiv.style.margin = '10px';
warningDiv.style.fontSize = '200%';
warningDiv.style.fontWeight = 'bold';

addNewUserButton.addEventListener('click', userValidation);

for (var m = 0; m < 3; m++) {
    var th = document.createElement('th');
    th.style.padding = '10px';
    th.innerHTML = tableHeadings[m];
    trHead.appendChild(th);
}

usersTable.appendChild(trHead);
usersTable.setAttribute('text-align', 'left');

function userValidation () {

    if (nameField.value && ageField.value) {
        userArray.push(nameField.value);
        userArray.push(ageField.value);
        userArray.push(select.value);
        var trUsers = document.createElement('tr');
        for (var n = 0; n < 3; n++) {
            var usersData = document.createElement('td');
            usersData.style.padding = '10px';
            usersData.innerHTML = userArray[n + shiftUserArrayIndex];
            trUsers.appendChild(usersData);
        }
        usersTable.appendChild(trUsers);
        this.parentElement.appendChild(usersTable);
        shiftUserArrayIndex += 3;

        nameField.value = '';
        ageField.value = '';

    } else {

        if (!nameField.value) {
            nameField.parentElement.style.backgroundColor = 'red';
            nameField.parentElement.style.padding = '5px';
        }
        if (!ageField.value){
            ageField.parentElement.style.backgroundColor = 'red';
            ageField.parentElement.style.padding = '5px';
        }

        this.parentElement.insertBefore(warningDiv, this.nextElementSibling);
        setTimeout(
            function () {
                addNewUserButton.parentElement.removeChild(warningDiv);
                nameField.parentElement.style.backgroundColor = '';
                nameField.parentElement.style.padding = '';
                ageField.parentElement.style.backgroundColor = '';
                ageField.parentElement.style.padding = '';
            }
            ,3000);
    }
}




