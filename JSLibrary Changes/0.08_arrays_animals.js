//Arrays are a collection of items (a random variety of things in this case)

var shibaInuColors = ["Orange", "Black", "Cream"];
var numberOfEachColorOwned = [6, 10, 800];
var myFavoriteThings = ["Spaghetti", 3, 5, 7, "VOCALOID"];//Mixed type array (DO NOT NORMALLY ATTEMPT)

console.log(shibaInuColors);

var countries=["USA", "Japan", "South Korea"];
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

var colors=["Orange", "Black", "Cream"]

for(var i=0;i<colors.length;i++){
	console.log("The index is",i);
	console.log(colors[i]);
}

var animals=["Shiba Inu", "German Shepherd", "Australian Shepherd"]

for(var i=0;i<animals.length;i++){
	console.log("The index is",i);
	console.log(animals[i]);
}
