//Object

var emptyObject={};

var johnQualls={
	//Properties
	name: "John Qualls",
	age: 49,
	vocation: "President of Eleven Fifty Academy",
	isRetired: false,
	//Methods
	greeting: function(){
		console.log("Hello, I am" + this.name + "." + "I am" + this.vocation);
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
johnQualls.greeting();
johnQualls.ageOf();
console.log("###############################");


console.log(johnQualls);
console.log(johnQualls.name);
console.log(johnQualls.age);
console.log(johnQualls.middleName);   //undefined
console.log("-------------------");

var animal={
	type: "bear",
	habitat: "woods",
	weight: 500,
	commonInIndiana: false

};

console.log(animal.weight);
console.log(animal.commonInIndiana);
animal.weight=600;
console.log(animal.weight);
console.log(animal.weight+50);
animal.type="cat"
console.log(animal.type);
console.log("-------------------");

console.log(animal.favoriteFood);
animal.favoriteFood="carrots";
console.log(animal.favoriteFood);
animal.color="blue"
animal.freakOfNature=true;
console.log(animal.color);
console.log(animal.freakOfNature)

delete animal.freakOfNature;
console.log(animal.freakOfNature); //undefined
console.log("-------------------");

//properties can be more than just string, booleans, and numbers
//they can include arrays and other objects

animal.moviesAboutMe=["Lion King", "Happy Feet", "Marley & Me"];
console.log(animal.moviesAboutMe);
//print out only the 2nd movie
console.log(animal.moviesAboutMe[1]);
console.log("-------------------");

console.log(Object.keys(animal));

var bestFriend={
	name: "Jessica Shelby", 
	age: 19,
	hobby: "drawing",
	school: "IPFW"

};

console.log(bestFriend.name);
console.log(bestFriend.hobby);
console.log(bestFriend.school);
console.log("-------------------");

var movie={
	name: "Treasure Planet",
	genre: "adventure",
	mainCharacter: "James/Jim Hawkins",
	location: "fictional space"

};

console.log(movie.name);
console.log(movie.genre);
console.log("-------------------");

//Inheritance

//Longish hand way, but Joey's favorite
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
myCar.constructor("Dodge", "Ram", 1999);
console.log(myCar.model);
console.log("-------------------");


//Short hand way of inheritance
var book={
	title:"",
	yearPublished:0,
	numPages:0,
	constructor:function(title, yearPublished, numPages){
		this.title=title;
		this.yearPublished=yearPublished;
		this.numPages=numPages;
		return this;
	}
};

var myFavBook = new book.constructor("Defiance", 2020, 107);
console.log(myFavBook.title);

//Short hand version
//Javascript is chaos
//Techincally... fuctions are also obejects
//sooooooooooooooooooooooooooooooooooooooooooooooooo
//we can do something like this

function computer(screenSize, hardDriveSize, hasNumPad){
	//We never technically defined these properties
	//Or the object really
	//But it's OK because we are using Javascript and JS loves us and lets us do stupid stuff like this
	this.screenSize=screenSize;
	this.hardDriveSize=hardDriveSize;
	this.hasNumPad=hasNumPad;
}

var myPC=new computer(17, "1TB", true);
console.log(myPC.screenSize);

//Objects are references
//var var
//********************************object************
//                               car^
//                       myOtherCar^

var pcOne=new computer(12,"500GB", false);
var pcTwo=new computer(14, "2TB", true);
var pcThree

console.log(pcOne.hardDriveSize);
console.log(pcTwo.screenSize);
console.log(pcThree.screenSize);

pcTwo.screenSize=15;

console.log(pcTwo.screenSize);
console.log(pcThree.screenSize);

//Objects are not copied!!! They are referenced