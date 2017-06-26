//Instead of using numbers, we are using words that MUST go into quotes
console.log("Crocodiles are cool, but alligators scare me!");

//Insert "info" below
var tweet = "Dogs are the cure for every illness and disease!";
console.log(tweet);
var username = 'oprr8ebcnl';
console.log(username);

var password = "oprr8ebcnk";
console.log(password);

var birthCity = "Roanoke";
var birthState = "Indiana";
console.log (birthCity + birthState);
var commespace = ",";
console.log(birthCity + commespace + birthState);
console.log(birthCity + "," + birthState + 7);

//Now using strings and integers together
var ageInApril = 20;
var highschool = "EagleTechAcademy HS";
var graduatedHS = 2016;
console.log(highschool + commespace + graduatedHS);
console.log("My age in April:", ageInApril);
console.log("My age in April:", ageInApril);
console.log('My "age" in April:', ageInApril);
console.log("My \"age\" in April:", ageInApril);

//I graduated from Eagle Tech Academy in 2016.
var highschooling = "EagleTechAcademy";
var graduatedhsyear = 2016;
console.log("I graduated from" + highschooling + "in" + graduatedhsyear);

var highSchool = "ETA";
console.log(highSchool.length);
console.log(highSchool.toUpperCase());
console.log(highSchool.toLowerCase());
console.log(highSchool.split(""));

//Undicies of strings always start at 0
console.log(highSchool.slice(7));