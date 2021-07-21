'use strict';
let userName = prompt("Hi, what's your name?");
console.log(userName);
alert("Welcome to my page " + userName + "!");
alert(userName + " I'm going to ask you a series of questions!");
alert("You can only answer yes or no!");
let addQuestion = prompt("Does 1 + 1 = 2 ?");
if ( addQuestion === 'yes') {
console.log("Good job, that's correct");
}
if ( addQuestion === 'no') {
    console.log("Try again")
}
alert("Basic Math is essential knowledge!");

let knowLang = prompt("Do you know HTML & CSS?");
if ( knowLang === 'yes') {
console.log("Great job, keep learning!");
}
if ( knowLang === 'no') {
    console.log("Wrong answer, you should study!");
}
alert("Those are great languages to know!");

let likeQuestion = prompt("Do you like to code?");
if (likeQuestion === 'yes') {
    console.log("You'll be a pro in no time!");
}
if ( likeQuestion === 'no') {
    console.log("Maybe one day you will like coding!");
}
alert("That's awesome, coding is super cool!");

let visQuestion = prompt("Do you like Visual Studio Code?");
if ( visQuestion === 'yes'); {
    console.log("You have exquisite taste!");
}
if ( visQuestion === 'no'); {
    console.log("You have poor taste in IDE's");
}
alert("Welcome " + userName + " let's explore the site!");


