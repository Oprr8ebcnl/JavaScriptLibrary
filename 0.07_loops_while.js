//Loops are used to do things multiple times easily
//The while loop tell JS to repeat statements until a condition is false

//Example:
var score=0;

while(score<10){
	score++;//this is shorthand for saying (score = score+1)
	console.log("Score is:",score);
}

//Another example:
var age=0;
while(age<100){
	age+=10;//shorthand for (age = age+10)
	console.log("Our age is:",age);
}
if(age === 100){
	console.log("I'm a century old! Literally!");
}

//Challenge
//Write a while loop that prints 10-100 by 10s
//At 50, print "Halfway there"

//Define counter

var counter=0;
while(counter < 100){
	counter+=10;
	console.log(counter);
	if(counter === 50){
	console.log("Halfway there");
	}
}
	//increment counter
	//Print counter
	//Check if 50
	   //If so, print message
//}