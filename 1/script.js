
// Task 1:

var str = "Have a good day!";
console.log(str);

// Task 2:

var age = 25;
console.log(age);
age = undefined;

// Task 3:

var info = {};
info.name = "Vladimir";
info.age = 29;
console.log(info.name);
console.log(info.age);

var name = info.name;
console.log(name);

delete info.name;
console.log(name);
console.log(info.name);

// Task 4:

var customArray;
customArray = [12, 13, 14];
console.log(customArray);
customArray = [0];
console.log(customArray);

// Task 5:

var student = "Vladimir";
console.log(student);

student = "Kirpichenko Vladimir";
console.log(student);

// Task 6:

var complex = [];
complex[0] = "My name is:";
complex[1] = 7;
complex[2] = null;
complex[3] = info;
console.log(complex[2]);

// Task 7:

var complexObj = {};
complexObj.name = "Vladimir";
complexObj.age = 29;
complexObj.friends = ["Evgeniy", "Valeriy"];
complexObj['soc_links'] = {
    facebook: "https://www.facebook.com",
    googlePlus:  "https://plus.google.com"
};
console.log(`My name is ${complexObj.name}`);
console.log(`I am ${complexObj.age}`);
console.log(`I have a lot of friends, but the best one is: ${complexObj.friends[1]}`);
console.log(`You can find me on facebook: ${complexObj.soc_links.facebook} or on google groups: ${complexObj.soc_links.googlePlus}`);








