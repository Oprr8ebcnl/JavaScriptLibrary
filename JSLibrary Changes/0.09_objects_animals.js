//Object

var emptyObject={};

var kayaTsuki={
	//Properties
	name: " Kaya Tsuki",
	age: 16,
	occupation: " an assassin",
	isRetired: false,
	//Methods
	greeting: function(){
		console.log("Hello, I am" + this.name + "." + "I am" + this.occupation);
	},
	ageOf: function(){
		console.log("Hello, I am" + this.name + "." + "I am" + this.age);
	},
	extendedGreeting: function(){
		this.greeting();
		this.ageOf();
	}
};
console.log("###############################");
kayaTsuki.greeting();
kayaTsuki.ageOf();
console.log("###############################");


console.log(kayaTsuki);
console.log(kayaTsuki.name);
console.log(kayaTsuki.age);
console.log(kayaTsuki.middleName);   //undefined
console.log("-------------------");

var animal={
	type: "wolf",
	habitat: "forest",
	weight: 150,
	likedInIndiana: false

};

console.log(animal.weight);
console.log(animal.likedInIndiana);
animal.weight=750;
console.log(animal.weight);
console.log(animal.weight+50);
animal.type="wolf"
console.log(animal.type);
console.log("-------------------");

console.log(animal.favoriteFood);
animal.favoriteFood="meat"
console.log(animal.favoriteFood);
animal.color="brown"
animal.bigDeerOfNature=true
console.log(animal.color);
console.log(animal.bigDeerOfNature);

delete animal.bigDeerOfNature;
console.log(animal.bigDeerOfNature); //undefined
console.log("-------------------");

//properties can be more than just string, booleans, and numbers
//they can include arrays and other objects

animal.moviesILike=["Sinbad", "Trasure Planet", "Assassins Creed"];
console.log(animal.moviesILike);
//print out only the 2nd movie
console.log(animal.moviesILike);
console.log("-------------------");

console.log(Object.keys(animal));

var bestFriend={
	name: "Jessica Shelby", 
	age: 19,
	hobby: "drawing",
	school: "IPFW"

};

console.log(bestFriend.name);
console.log(bestFriend.age);
console.log(bestFriend.hobby);
console.log(bestFriend.school);
console.log("-------------------");

var movie={
	name: "Treasure Planet",
	genre: "adventure",
	mainCharacter: "James/Jim Hawkins", //not mentioned because console.log (below) doesn't represent it
	location: "fictional space"//not mentioned because console.log (below) doesn't represent it

};

console.log(movie.name);
console.log(movie.genre);
console.log("-------------------");

//Inheritance 
//"Other" way (JOEY'S FAVORITE WAY EVEN THOUGH IT'S LONG)
var car={
	make:"",
	model:"",
	year:0,
	constructor: function(make, model, year){
		this.make=make;
		this.model=model;
		this.year=year;
	}
};

var myCar=Object.create(car);
myCar.constructor("Chevy", "Trail Blazer", 2002);
console.log(myCar.model);
console.log("-------------------");


//Short hand way of inheritance
var book={
	title:"",
	yearPublished:0,
	numPages:0,
	authorName: "",
	constructor:function(title, yearPublished, numPages, authorName){
		this.title=title;
		this.yearPublished=yearPublished;
		this.numPages=numPages;
		this.authorName=authorName;
		return this;
	}
};

var myFavBook = new book.constructor("Defiance", 2020, 107, "Natalie Collins");
console.log(myFavBook.title);
console.log(myFavBook.numPages);
console.log(myFavBook.authorName);

console.log("-------------------");
var dog={
	name:"Emma",
	age:1,
	breed:"German Shepherd",
	constructor:function(name, age, breed){
		this.name=name;
		this.age=age;
		this.breed=breed;
		return this;
	}
};

var dog = new dog.constructor("Emma", 1, "German Shepherd");
console.log(dog.name);
console.log(dog.age);
console.log(dog.breed);

console.log("-------------------");
var dog={
	name:"Cassidi",
	age:1,
	breed:"German Shepherd",
	constructor:function(name, age, breed){
		this.name=name;
		this.age=age;
		this.breed=breed;
		return this;
	}
};

var dog = new dog.constructor("Cassidi", 1, "German Shepherd");
console.log(dog.name);
console.log(dog.age);
console.log(dog.breed);

//CLASS NOTES:
//Short hand version
//Javascript is chaos
//Techincally... fuctions are also obejects
//sooooooooooooooooooooooooooooooooooooooooooooooooo
//we can do something like this

