//"If Else" statements
var catSleeping = true;
var catAwake = true;
var catRunning = true;
var catWalksBetweenLegsWhileWalking = true;
var catAge = 13;

if(catSleeping === true){
	console.log("Steering clear");
}else{
	console.log("Giving attention");
}

//If/else (is like a "what if" statement)
//Describe if the cat is running or not

if(catRunning === true){
	console.log("Someone help me catch my cat!");
}else{
	console.log("My cat needs more exercise these days");
}

//Combining different variable types
if(catWalksBetweenLegsWhileWalking && catAge === 3){
	console.log("My cat still has a bunch of energy!");
}else{
	console.log("My cat is too young to be lying around 24/7!");
}