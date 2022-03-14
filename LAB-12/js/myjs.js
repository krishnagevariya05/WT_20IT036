//array
console.log("Array concept..................\n");
var x=new Array(12,13,14);
document.getElementById("array").innerHTML=x;

var y=[];
y[0]="Hii";
y[1]=12;
y.push(13);
y.push(14);
y.pop("Hii");
document.getElementById("array1").innerHTML=`${y.length}`;

//String
console.log("String concept..................\n");
var string = "this";
var name="Tom";
var temp=`${name} is student.`;
console.log(string);
console.log(temp);
var len = temp.length;
console.log(`Length of temp is: ${len}`);
console.log(`Hello world!!!\nHii`);

var y = new String("Krishna");
console.log(y);

document.getElementById("string").innerHTML="<h3>Lorem ipsum dolor sit.</h3>";
var str="This is Javascript language";
console.log(str);
var position=str.indexOf('is');   //to show first occurance of sub-string
console.log(position);

var position1=str.lastIndexOf('is');   //to show last occurance of sub-string
console.log(position1);

// var substr=str.slice(1,5);  //Substring from a string
// var substr=str.substring(1,5);
var substr1=str.substr(1,5);  
console.log(substr1);

var replace = str.replace('Javascript','HTML');
console.log(str);
console.log(replace);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

var newString = str.concat("New lan.");
console.log(newString);

var strwhitespace ="        this    contains      whitespace     ";
console.log(strwhitespace);
console.log(strwhitespace.trim());

var char = str.charAt(2);
console.log(char);
console.log(str[3]);


//Date
console.log("Date concept..................\n");
let today = new Date();
console.log(today);
let date = new Date('5-11-2001 11:55:10');
console.log(date);
date=new Date("November 5 2001");
console.log(date);
date=new Date("11/05/2001");
console.log(date);

let a=date.getDay();
console.log(a);
let b=date.getDate();
// let b=date.getMinutes();
// let b=date.getSeconds();
// let b=date.getTime();
// let b=date.getMilliseconds();
// let b=date.getMonth();
console.log(b);
date.setDate(7);
date.setMonth(12);
date.setFullYear(2002);
date.setMinutes(20);
date.setHours(6);
date.setSeconds(30);
console.log(date);

//Math
console.log("Math concept..................\n");
//object
let m=Math;
console.log(m);

console.log("The value of Math.E is ", Math.E);
console.log("The value of Math.PI is ", Math.PI);
console.log("The value of Math.LN2 is ", Math.LN2);
console.log("The value of Math.SQRT1_2 is ", Math.SQRT1_2);
console.log("The value of Math.LOG2E is ", Math.LOG2E);

//Function
let p = 34.64534;
let q = 89;
console.log("The value of p and q is ",p,q);
console.log("The value of p and q rounded is ",Math.round(p),Math.round(q));

console.log("2 raised to the power 2 is ", Math.pow(2,2));
console.log("Square root of 36 is ",Math.sqrt(36));

//ceil and floor
console.log("3.5 rounded up is ",Math.ceil(3.5));
console.log("3.5 rounded down is ",Math.floor(3.5));

//abs function
console.log("absoluate value of 4.44 is",Math.abs(4.44));
console.log("absoluate value of -4.44 is",Math.abs(-4.44));

//Trignometric function
console.log("The value of sin(pi) is ",Math.sin(Math.PI/2));
console.log("The value of cos(pi) is ",Math.cos(Math.PI/2));
console.log("The value of tan(pi) is ",Math.tan(Math.PI/2));

//min and max
console.log("Minimum value of 4,5,6 is ", Math.min(4,5,6));
console.log("Maximum value of 4,5,6 is ", Math.max(4,5,6));

//random number
console.log("Random Number: ",Math.random());

//Object
console.log("Object concept..................\n");
let obj={
    name: "krishna",
    city: "Surat"

}
console.log(obj);
// function obj(givenName)
// {
//     this.name=givenName;
// }
// let obj1 = new obj("krishna");
// console.log(obj1);
