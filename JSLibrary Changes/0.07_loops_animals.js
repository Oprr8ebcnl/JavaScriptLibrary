//CLASS NOTES:
//For loops
//For loops are similiar to while loops in tha they let us repeat statements
//However they are more specialized
//--------------------------------------------------
//for(counter;condition;increment){
//  Code to be run
//}
//--------------------------------------------------
// for(var i=1;i<50;i+=5){
// 	console.log(i);
//}
//--------------------------------------------------
// for(var i=0;i<=100;i+=5){
// 	console.log(i);
// }
//--------------------------------------------------
//Start at 3, count by 7's, don't go over 40
//--------------------------------------------------
// for(var i=3;i<40;i+=7){
// 	console.log(i)
// }
//--------------------------------------------------
//Break statement <-- Covered in switch earlier
//Breaks are used to prematurely exit a loop
//--------------------------------------------------

for(var i=0;i<11;i++){
	console.log("Training my dog to sit and roll over a certain amount of times:",i);
	if(i===10){
		console.log("Good boy! Training is successful!");
		break;
	}
}