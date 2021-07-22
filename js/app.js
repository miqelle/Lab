'use strict';
let userName = prompt("Hi, what's your name?");
alert("Welcome to my page " + userName + "!");
alert(userName + " I'm going to ask you a series of questions!");
alert("You can only answer yes or no!");

let nameQuestion = prompt("Is my first name Miqelle?");
let answer = ("yes");

if ( nameQuestion === 'y' || nameQuestion === 'yes' ) 
{
    alert("Good job that's correct 😊");
}
else
{
    alert("Try again");
}

let wrkQuestion = prompt("Have I worked in Customer Service?");
let knowAnswer = "yes";
if ( wrkQuestion === 'y' || wrkQuestion ==='yes')
{
    alert("Correct, I sure did!");
}
else
{
    alert("Try again!");
}

let likeQuestion = prompt("Do I like the color yellow?");
let likeAnswer = "yes";
if (likeQuestion === 'y' || likeQuestion === 'yes') 
{
    alert("Correct, I think yellow is 🔥 ");
}
else
{
    alert("Take a look around, the answer is right inf front of you!");
}

let visQuestion = prompt("Do I like Visual Studio Code?");
let visAnswer = "yes";
if ( visQuestion === 'y' ||  visQuestion === 'yes')
{
    alert("Bingo! That's right");
}
else
{
    alert("Guess again!");
}
alert("Feel free to explore the page " + userName + " 😊" + "!");

let num = 4;
alert("You're about to guess how many hours I worked on this assignment!");
let guess= prompt("Guess a number between 1 and 5");
if (guess > num)
{
    alert("That's too high!");
    prompt("Guess a number between 1 and 5");
} 
else (guess < num)
{
    alert("That's too low");
    prompt("Guess a number between 1 and 5");
}