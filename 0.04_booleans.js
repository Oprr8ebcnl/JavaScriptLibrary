//Booleans

var tired = false;
var awake = true;
var hungry = true;
var sad = false;
var happyToWorkWithYall = true;
var corny = true;

console.log(corny);

//comparisons
//   ==   	Equality
//   ===   	Strict Equality
//   !=   	Inequality
//   !== 	String Equality
//   >   
//   <
//   <=
//   >=   	Greater than or equal to

console.log (2>1);
console.log(3<2);

var test = 2>=3;
console.log(test);

console.log("Two is greater than one?" + (2 > 1));

console.log("---------");

//When check for equality, you always want to use === over the == in JaveScript
2 == "2";     //true
2 === "2";    //false
2 === 2       //true
1+1 === 2     //true

//Inequality
"Joey" !== "Tif"     //true
10 !== 10            //false

//overview, difference between =, ==, ===
var one = 1;
var stringOne = "1";
console.log ("Two equals?", one == stringOne);
console.log ("Two equals?", one === stringOne); //3 is very safe and compares type & value

//Logical Operators
// Operators       Meaning       True Expressions
// &&              and           4 > 0 && -2 < 0
// ||              or            4 > 0 || -2 > 0
// !               not           !(5 < 0)

console.log("&& operator:", 2===2 && 1===1);
console.log("|| operator", 2===2 || 2===1);
console.log("!= operator", 2 != 1);