//NOTES:
//Functions: we use them for:
   //Executes action(s)
   //Allows us to re-use code 
   //Makes code cleaner

function WhatsUp(){
	console.log("Whats Up Dawg?");
}

WhatsUp();

function cuddleThreePuppies(){
	console.log(3);
}

cuddleThreePuppies();

function divider(){
	console.log("------------------");
}

divider();

//Scope with variables (like a rifle scope)

function add(){
	var x = 14;
	var y = 3;
	console.log(x + y);
}

function subtract(){
	var x = 23;
	var y =6;
	console.log(x - y);
}

add();
subtract();

divider();

//Parameters and arguments are basically the same thing)

function numberEntered(x){

//x = parameter
//x and 7 share the same value

	console.log("Number entered:", x);
}

numberEntered(3);

//3 is the argument
//Can have as many parameters as you want

function addTwoNums(x, y){

//x and y are parameters

	console.log(x + y);
}

addTwoNums(15, 100);

//15 and 100 are arguments

divider();

//NOTES:
//When JS hits the treturn keyword, it will stop executing the function, and return it's argument

function mood(){
	return "I feel like a smiley face emoji!";
}

console.log(mood());

//Mood becomes the argument for console.log()

function multiply(x, y){
	return x * y;
}

console.log(multiply(93, 39));

//CHALLENGE:
//On your own:
//Write a function that takes two arguments, a first name and a last name, and combines them to
//return <firstname> <lastname> and then print the return value to the console;
//Personally changed to name of OC

function name(firstname, lastname){ 
	return firstname + "" + lastname;
}

console.log(name("Kaya", " Tsuki"));


//divider();
//divider();
//divider();
//divider();

//Loops

for(var i = 5; i <7; i){
	divider();
}