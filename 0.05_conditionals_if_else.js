//If/Else statements
//Else statements give JS an alternative statement to execute

var elevatorUp = true;
var elevatorDown = true;
var elevatorBroken = true;
var elevatorStuckWhileWeAreOnIt = true;
var elevatorNumber = 13;

if(elevatorUp === true){
	console.log("Going up");
}else{
	console.log("Going down");
}

//With an if/else statement
//Describe if the elevator is broken or not

if(elevatorBroken === true){
	console.log("We should take the stairs");
}else{
	console.log("Which floor do we go to?");
}

//Combining variable types for conditionals
if(elevatorStuckWhileWeAreOnIt && elevatorNumber === 13){
	console.log("Today is not our lucky day");
}else{
	console.log("We could have been in big trouble!");
}