//Strings are a group of characters
//String - must go in quotes
//Button is Ctrl B

console.log("I'm intercontinental when I eat French Toast");

var tweet = "Kanye is broke. No joke!";
console.log(tweet);
var username = 'tiftrusty';
console.log(username);

var password = "2345password9";
console.log(password);

var birthCity = "Indianapolis";
var birthState = "Indiana";
console.log (birthCity + birthState);
var commespace = ",";
console.log(birthCity + commespace + birthState);
console.log(birthCity + "," + birthState + 4);

//Mixing Strings & Integers
var ageInAugust = 40;
var highschool = "Carmel HS";
var graduatedHS = 1994;
console.log(highschool + commespace + graduatedHS);
console.log("My age in August:", ageInAugust);
console.log("My age in August:", ageInAugust);
console.log('My "age" in August:', ageInAugust);
console.log("My \"age\" in August:", ageInAugust);

//I graduated from Eagle Tech Academy in 2016.
var highschooling = "EagleTechAcademy";
var graduatedhsyear = 2016;
console.log("I graduated from" + highschooling + "in" + graduatedhsyear);

//String Methods (functions)
console.log(highSchool.length);
console.log(highSchool.toUpperCase());
console.log(highSchool.toLowerCase());
console.log(highSchool.split(""));
//slice off everything before specified index
//indicies of strings start at 0
console.log(highSchool.slice(3));