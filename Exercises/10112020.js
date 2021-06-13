/*Class notes 10/11/2020
------------------------------
Introducing the Date() object.
------------------------------
*/


/*
let today = new Date(); //Current Date and time
console.log(today);

let newDate = new Date(2020, 1, 25, 11,14,0); //Tue Feb 25 2020 11:14:00 GMT+0200 (Eastern European Standard Time)
newDateMonth = newDate.getMonth();//returns num
console.log(newDate, newDateMonth);
*/

/*------------------------
Introducing the  RegExp();
--------------------------
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
*/

//regexp = new RegExp("patter", "flags");   <----- example not runnable
//regexp = /pattern/gmi; //with flags g,m and i <----- example not runnable

/*
let str = "This is a test string for regular expressions"

x = str.match(/is/gi); // 
console.log(x);

let myRegExp = /[2b|^2b]/;

let regExpObject = new RegExp('[2b|^2b]');   //<------ pass only first argument to the object
*/
/*
let str = "I love Javascript. We love Python too.";
let regexp = /LOVE/i;

x = ("Testing the str string and the value returned is : " + regexp.test(str)); //<----- test if the term exists inside the string. returns boolean.
y = "We will, we will".replace(/we/ig, "I");

console.log(x);
console.log(y);
*/

/*
// Passing variables to the RegExp object


myString = "Searching"
searchString = "A string to look for values containing words. searching, SEARCHING, SeArching..."

let myRegExp = new RegExp(myString, 'ig');

console.log(myRegExp.test(searchString)) // returns true
*/

/*-------------------
Introducing the Map() object.
---------------------*/
/*
const myNewMap = new Map()


myNewMap.set("mitsos", {telepono : 6955443334, tiPineis : "OtiVrw"});
myNewMap.set(5, {telepono : 6943435564, tiPineis : "Nero"});
myNewMap.set({willIt : "crash", 4 : true}, {telepono : 6955443334, tiPineis : "OtiVrw"});

//console.log(myNewMap);
//console.log(myNewMap.get(5));
console.log(myNewMap.size);

*/

/*----------------------------
Introducing the Set() object
-----------------------------*/

/* 
let y = [1,2,3,4,5,6,7,8,9];

x = new Set(y);

console.log(x);
console.log(x.has(5)); // returns bool

let set = new Set();

let john = {name:"John"}
let mary = {name:"mary"}
let Nick = {name:"Nick"}
let john = {name:"John"}

console.log(set);
*/

// Exercise 1 

/*
myDate1 = new Date("2020 10 23");
myDate2 = new Date("2019 4 11");

function timeDelta(date1, date2) { 
    let result;
    let years = Math.abs(date1.getYear() - date2.getYear()) 
    let months =  Math.abs(date1.getMonth() - date2.getMonth())
    let days =  Math.abs(date1.getDate() - date2.getDate())
    result = `Time delta is ${years} years, ${months} months, ${days} days`

    return result;

}

console.log(timeDelta(myDate1, myDate2));
*/

myArray = [1,2,1,3,1,5,7,3254,1,4356,1,10,453,145,52];

function exerciseToSet(someArray) {
    let i=0;
    let mySet = new Set()
    while (i<someArray.length){
        mySet.add(someArray[i]);
        i++
    }
    return mySet;
}

x = exerciseToSet(myArray);
console.log(x);
