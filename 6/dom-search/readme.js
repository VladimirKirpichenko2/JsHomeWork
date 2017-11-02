// Please read this first, to work with CSS in JS
// https://www.w3schools.com/jsref/dom_obj_style.asp
//
// Task
//
// 1. Please find all inputs using 4 DOM methods, e.g. getElementsByTagName and etc.

console.log(document.getElementsByTagName('input'));
console.log(document.querySelectorAll('input'));
console.log(document.getElementsByClassName("form-control"));






// 2. Clone the last block with label and input (using cloneNode JS DOM method: https://developer.mozilla.org/ru/docs/Web/API/Node/cloneNode) and
// add the this block (.input-group) to the end of form before button, but first change label text to Age

var labels = document.getElementsByTagName('label');

var lastDiv = labels[labels.length -1].parentElement;

var cloned = lastDiv.cloneNode();

cloned.innerHTML = lastDiv.innerHTML;

cloned.getElementsByTagName('label')[0].innerText = 'Age';

var button = document.querySelector('button');

button.parentElement.insertBefore(cloned, button);



// 3. Add class 'input-lg' to all inputs on the page, including new created

var inputs = document.getElementsByTagName('input');

for (var i = 0; i < inputs.length; i++) {
    inputs[i].className += " " + "input-lg";
}


// 4. Add to each input unique id, e.g. 'age' for age field and etc., and to the label that is upper add 'for' attribute with the same value as id

var inputs = document.getElementsByTagName('input');

for (var i = 0; i < inputs.length; i++) {
    var newID = inputs[i].previousElementSibling.innerText;
    inputs[i].setAttribute('id', newID);
    inputs[i].previousElementSibling.setAttribute('for', newID);
}




// 5. Add placeholders for each input, e.g. for 'age' field, 'Please enter your age'

var labels = document.getElementsByTagName('label');

for (var i = 0; i < labels.length; i++) {
    labels[i].innerText = 'Please enter your ' + labels[i].innerText.toLowerCase()
}


// 6. Please add this last block before submit button using JS
//
//       <div class="input-group col-xs-12 marg">
//         <label for="">Gender</label>
//         <select class="form-control">
//            <option value="male">Male</option>
//            <option value="female">Female</option>
//         </select>
//       </div>

var newBlock = "<div class=\"input-group col-xs-12 marg\">\n" +
    "             <label for=\"\">Gender</label>\n" +
    "             <select class=\"form-control\">\n" +
    "               <option value=\"male\">Male</option>\n" +
    "               <option value=\"female\">Female</option>\n" +
    "             </select>\n" +
    "           </div>"

var newElement = document.createElement('div')

newElement.innerHTML = newBlock;

var button = document.querySelector('button');

button.parentElement.insertBefore(newElement, button);

