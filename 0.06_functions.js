//Functions: what do we use them for?
   //Executes action(s)
   //Allows us to re-use code 
   //Makes code cleaner

function hello(){
	console.log("hello world");
}

hello();

function printOneNumber(){
	console.log(1);
}

printOneNumber();

function divider(){
	console.log("------------------");
}

divider();

//Scope with variables
//Think of it like a rifle scope

function add(){
	var x = 2;
	var y = 7;
	console.log(x + y);
}

function subtract(){
	var x = 4;
	var y =1;
	console.log(x - y);
}

add();
subtract();

divider();

//Parameters/Arguments(Basically the same thing)
   //Parameters are the names in the function definition
   //Arguments are what is passed to the function

function numberEntered(x){//x is a parameter
	//x and 7 share the same value
	console.log("Number entered:", x);
}

numberEntered(7);//7 is the arguments

//Can have as many parameters as you want

function addTwoNums(x, y){//x and y are parameters
	console.log(x + y);
}

addTwoNums(4, 7);//4 and 7 are arguments

divider();

//Return keyword
//When JS hits the treturn keyword, it will stop executing the function, and return it's argument

function mood(){
	return "I'm feeling great!";
}

console.log(mood());//Mood becomes the argument for console.log()

function multiply(x, y){
	return x * y;
}

console.log(multiply(3, 8));

//On your own:
//Write a function that takes two arguments, a first name and a last name, and combines them to
//return <firstname> <lastname> and then print the return value to the console;

function name(firstname, lastname){ 
	return firstname + "" + lastname;
}

console.log(name("Natalie", "Collins"));


//divider();
//divider();
//divider();
//divider();

//Loops(small preview)

for(var i = 0; i <5; i + +){
	divider();
}