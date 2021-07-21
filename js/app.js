'use strict';
let userName = prompt("Hi, what's your name?");
alert("Welcome to my page " + userName + "!");
alert(userName + " I'm going to ask you a series of questions!");
alert("You can only answer yes or no!");

let addQuestion = prompt("Does 1 + 1 = 2 ?");
let answer = ("yes");

if ( addQuestion === answer ) 
{
    alert("Good job that's correct 😊");
}
else ( addQuestion === 'no');
{
    alert("Try again");
}

let knowLang = prompt("Do you know HTML & CSS?");
let knowAnswer = "yes";
if ( knowLang === knowAnswer)
{
    alert("Great job, keep learning!");
}
else ( knowLang === 'no')
{
    alert("Wrong answer, you should study!");
}

let likeQuestion = prompt("Do you like to code?");
let likeAnswer = "yes";
if (likeQuestion === likeAnswer) 
{
    alert("You'll be a pro in no time!");
}
else( likeQuestion === 'no') 
{
    alert("Maybe one day you will like coding!");
}

let visQuestion = prompt("Do you like Visual Studio Code?");
let visAnswer = "yes";
if ( visQuestion === visAnswer); 
{
    alert("You have exquisite taste!");
}
elseif( visQuestion === "no"); 
{
    alert("You have poor taste in IDE's");
    prompt("Feel free to explore the page " + userName );
}

