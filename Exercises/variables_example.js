//"use strict";

 // Display a message to the console (F12)
 //If you don't initialize the variable when you declare it, 
 //it will have the undefined value until you assign a value to it.
 
// //INITIALIZATION 
//var a;
// console.log( typeof a ); // undefined
// let b;
// console.log( typeof b ); // undefined
// const c;
// console.log( typeof c ); // SyntaxError

// OLD WAY TO DECLARE VARS
//var day = "Monday";
//var day = "Sunday";
//console.log(day);

// // VARIABLES (ES6)
// let name = "Kontantinos";
// let surname = "Kavafis";
// let job;
// job = "Poet";
// job = 70;

// const PI = 3.14159;
// //PI = 42; // Error: Assignment to constant variable


// let month = "February";
// //let month = "August";
// //month = "April";
// //console.log(month); 


// SCOPE:
// let counter = 3;
// while ( counter > 0 ){
//     var whileSecret = "while secret";
//     let realWhileSecret = "real while secret";
//     console.log( counter );
//     counter--;
// }

// console.log( whileSecret );
// // console.log( realWhileSecret ); // Cannot be accessed

// // let and const create private variables in all { code blocks }

// function crazy(){

//     loco = "WTF";

// }
// crazy();
// //console.log( loco ); // Only available without 'use strict';


// LET VS CONST
// let player = 'TZ-12';
// const game = "Assasin's Creed";


// player = 'Luca Morelli' // OK
// game = "Baldur's Gate" // TypeError: Assignment to constant variable.

// const greekPoet = {
//     name: "Konstantinos Kavafis";
//   }
  
//   greekPoet.name = 'Odysseas Elytis'; // OK
//   greekPoet.age = 70;
// //  person = {} // Assignment to constant variable.
// console.log(greekPoet.age);


// //HOISTING
// function test() {
//    console.log(a);
//    console.log(foo());
   
//    var a = 1;
//    function foo() {
//       return 2;
//    }
// }

// test(); //undefined 2

// //equal
// function test() {
//    var a;
//    function foo() {
//       return 2;
//    }

//    console.log(a);
//    console.log(foo());
   
//    a = 1;
// }

// test();

// const maybeNull = null;
// if(maybeNull) console.log("Not null"); else console.log("Could be null"); // Could be null

// function sayHello(who) {
//   if (!who) {
//     return null;  }
//   return console.log(`Hello, ${who}!`);
// }

// sayHello('Tony');
// sayHello();

//
// var outer = function() {
//   var a = "A Local variable"
//   var inner = function() {
//     alert(a)
//   }
//   window.fnc = inner()
// }
// outer();

// const value1 = '5';
// const value2 = 9;
// let sum = value1 + value2;

// console.log(typeof sum);
// console.log(sum);


// function englishToGreek(english) {
// 	let greek;
// 	switch (english) {
// 		case 'hello':
// 			greek = 'γεια';
// 		case 'goodbye':
// 			greek = 'αντιο';
// 		}
// 	return greek;
// }

// console.log(englishToGreek('hello'));