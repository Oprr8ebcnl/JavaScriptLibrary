//Switch statements
//Very similiar to if stataments

//How it works:
//The value is evaluated once
//It is then compared with cases
//If a matching case is found, then it executes the code

var marginOfSuperBowlWin = 17;
var result;

switch(marginOfSuperBowlWin){
	case 3:
		result = "That will be a good game";
		break;
	case 7:
		result = "I like it, pretty close game";
		break;
	case 17:
		result = "Sweet, we can just focus on the commercials";
		break;
	default:
		result = "I don't know. Let's see what happens";
}

console.log("Switch Result:", result);//same as console.log("Switch Result: " + result);