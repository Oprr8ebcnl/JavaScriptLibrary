//Enter emotions below
var starving = false;
var wideAwake = true;
var excited = true;
var deadTired = false;
var missingMyPuppies = true;
var careless = true;

console.log(careless);

//NOTES:
//Comparisons
//   ==   	Equality
//   ===   	Strict Equality
//   !=   	Inequality
//   !== 	String Equality
//   >   
//   <
//   <=
//   >=   	Greater than or equal to

console.log (7>3);
console.log(8<4);

var test = 4>=8;
console.log(test);

console.log("Seven is greater than three?" + (7 > 3));

console.log("---------");

//When check for equality, you always want to use === over the == in JaveScript
60 == "60";     //is true
70 === "70";    //is false
30 === 30       //is true
10+10 === 20     //is true

//Inequality
"Natalie" !== "Kaya"     //is true
100 !== 100            //is false

//0verviewing the difference between =, ==, ===
var seventy = 70;
var stringThree = "3";
var three = "3";
console.log ("Two equals?", three == stringThree);
console.log ("Two equals?", three === stringThree); //Compares type & value

//NOTES:
//Logical Operators
// Operators       Meaning       True Expressions
// &&              and           4 > 0 && -2 < 0
// ||              or            4 > 0 || -2 > 0
// !               not           !(5 < 0)

console.log("&& operator:", 9===9 && 0===0);
console.log("|| operator", 9===9 || 9===0);
console.log("!= operator", 9 != 0);