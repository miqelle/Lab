'use strict';
let userName = prompt("Hi, what's your name?");
alert("Welcome to my page " + userName + "!");
alert(userName + " I'm going to ask you a series of questions!");
alert("You can only answer yes or no!");

let addQuestion = prompt("Does 1 + 1 = 2 ?");
let answer = ("yes");

if ( addQuestion === 'y' || addQuestion === 'yes' ) 
{
    alert("Good job that's correct 😊");
}
else
{
    alert("Try again");
}

let knowLang = prompt("Do you know HTML & CSS?");
let knowAnswer = "yes";
if ( knowLang === 'y' || knowLang ==='yes')
{
    alert("Great job, keep learning!");
}
else
{
    alert("Wrong answer, you should study!");
}

let likeQuestion = prompt("Do you like to code?");
let likeAnswer = "yes";
if (likeQuestion === 'y' || likeQuestion === 'yes') 
{
    alert("You'll be a pro in no time!");
}
else
{
    alert("Maybe one day you will like coding!");
}

let visQuestion = prompt("Do you like Visual Studio Code?");
let visAnswer = "yes";
if ( visQuestion === 'y' ||  visQuestion === 'yes')
{
    alert("You have exquisite taste!");
}
else
{
    alert("Visual Studio Code is a good choice!");
}
alert("Feel free to explore the page " + userName + " 😊" + "!");

let num = 4;
alert("You're about to guess how many hours I worked on this assignment!");
let guess= prompt("Guess a number between 1 and 5");
if (guess > num)
{
    alert("That's too high!");
} 
else (guess < num)
{
    alert("That's too low");
    prompt("Guess a number between 1 and 5");
}


