//Arrays are a collection of items
//And we define them using []s

var rainbowColors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];
var raceWinners = [33, 72, 64];
var myFavoriteThings = ["Broccoli", 2, "Taylor Swift"];//Mixed type array
//Don't actually ever do that
//Just because you can
//Doesn't mean you should

console.log(rainbowColors);

//Arrays have indexes

var countries=["USA", "Russia", "Germany"];
//Indexes:       0        1          2

console.log(countries[1]);

console.log("-----------------------------");


//Iterating over arrays
//Tricky at first but gets pretty easy

var movies=["Die Hard", "Dumb and Dumber", "Lord of the Rings", "The Departed", "Fight Club", "Harry Potter"];

for(var i=0;i<movies.length;i++){
	console.log("The index is",i);
	console.log(movies[i]);
}

var colors=["Blue", "Green", "Black", "Purple", "White"]

for(var i=0;i<colors.length;i++){
	console.log("The index is",i);
	console.log(colors[i]);
}

var animals=["Dog", "Cat", "Horse", "Turtle", "Elephant"]

for(var i=0;i<animals.length;i++){
	console.log("The index is",i);
	console.log(animals[i]);
}

