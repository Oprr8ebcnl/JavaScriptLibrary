//If statements: Are used to tell JS  which statements to execute based on condition

var isOn = true;
var inHot = true;

//Shorthand way for checking for true
if(isOn){
	console.log("The light is on");
}

//Longhand way for checking true
if(isOn === true){
	console.log("The light is still on");
}

//Conditional Operators
//AND --> && (both must be true or both must be false)
//OR ---> || (one or the other or both)
//NOT --> !

isOn = true;
isHot = true;

if(isOn && isHot){
	console.log("The light is on and it is is hot");
}

if(isOn || isHot){
	console.log("I'm not sure what to say");
}

if(!isOn){
	console.log("The light is not on");
}