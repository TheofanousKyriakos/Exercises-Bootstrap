/* 11/11/2020
-----------------------------
Introducing Functions() in Js
-----------------------------
* function building
* nested functions
* .call() .apply()
* callbacks


function subtotal(price, quantity){
    return price*quantity;
}

var result = subtotal(10,2);
console.log(result);

*/
/*
Adding new attributes to objects through functions

function testFunction(someObject){
    someObject.attribute = 'brown';
    someObject.newAttribute = 'liquid';
}

//create a new object

var myNewObject = {
    attribute:'black',
    size:'small',
    age:20
};


console.log(myNewObject.age) // <----- display the age property of the myNewObject object.

testFunction(myNewObject); // <------ call our newly created function

console.log(myNewObject)

var square = function(number){return number*number};
var x = square(4); // x gets the value 16
*/
/*
// This is a named function example. 
const sub = function subtotal(price, quantity){
    return price*quantity
}

const result = sub(10,2);
console.log(result);

//This is an anonymous function expression example

var calculateSubtotal = function(price2,quantity2){
    return price2*quantity2
};

var result2=calculateSubtotal(10,2);

console.log(result2)
*/

/*
// ***Going solo and testing

function testFunc(){
    return 'helo worl?'
}

function breakFunc(someFunction) {
    x = someFunction;
    return x
}


y = breakFunc(testFunc());
console.log(y);  // success!!!

// ***ending solo.
*/

/*
//nested functions. Applications and examples

function nestExample(showSomething){
    let message = 'help us function Gods';
    let number = 1024;
    let myList = ['apple', 4, {'onions':5}];

    function thisIsLocal(someVariable){
        return typeof(someVariable);
    }

    result = ("your variable is " + thisIsLocal(showSomething) + ". This was completely pointless.");
    console.log('from inside the nestExample function : ' + result);
    return result;
    
}

let randomVar = {3:'coco'};
x = nestExample(randomVar);
//console.log(x);

let testThis = nestExample(randomVar).thisIsLocal;
console.log(testThis);
*/

/*
function map(f,a){
    var result = [];
    var i;
    for (i=0;i != a.length; i++){
        result[i] = f(a[i]); //<----- This is the f() function declared below 
    }
        return result; 
    
}

var f = function(x) {  //  <----- Function written below but used above. Black magic fuckery
    return x * x * x;
}

var numbers = [0,1,2,5,10];
var cube = map(f,numbers);
console.log(cube);
*/

/*
function addSquares(a,b){
    function square(x){
        return x * x;
    }
    return square(a) + square(b);
}

a = addSquares(2,3);
b = addSquares(3,4);
c = addSquares(4,5);

console.log(a,b,c);
*/

// Introducing .call() and .apply() methods. 
// the .call() method can pass variables to this.variable inside functions.
// 

/*
var person ={
    fullName:function(){
        return this.firstName + " "+ this.lastName;
    }
}

var person1 ={
    firstName:'Jon',
    lastName:'Doe'
}

y = person.fullName(person1)
console.log(y);
x = person.fullName.call(person1);
console.log(x);
*/
/*
const anObject = {
    myProperty:'Kavafi',
    myMethod : function(before,after) {
        console.log(before + this.myProperty + after);
    }
};

anObject.myMethod('huha', 'hahu');

const anotherObject = {
    myProperty:'Ques Esto?'
};


xe = anObject.myMethod.call(anotherObject,'no','mister');

console.log(xe);
*/

/*

// Explaining callbacks. care to add () when calling it.


function thisIsJs(string, callback){
    console.log(`hello world string ${string} and this is the tail`);
    callback(4,5);
}

function thisIsCallback(){
    console.log('This is from inside callback function');
}

function secondCallback(var1, var2){
    console.log(var1+var2)
}


thisIsJs(`*Literal string*`, thisIsCallback);
thisIsJs(`*Literal string`, secondCallback);
*/
// another callback example
/*
var calculateTotal = function (price, quantity, tax){
    var subtotal = price*quantity;
    return subtotal + tax(subtotal);
};

var calcTax = function(subtotal){
    var taxRate = 0.05;
    var tax = subtotal * taxRate;
    return tax;
};

var calc = calculateTotal(50,2,calcTax);
console.log(calc);
*/

/*
function sayHi(){
    console.log('hello THIS');

}

sayHi();
*/

// default use of .this property
/*
function sayHey(){
    console.log(this.ax);
}

ax = "I must understand yes I must." // <---- in VSC this will return undefined when declared with var/let/const (global or local).
sayHey();
*/

/*
// Implicit use of .this
function showAge() {
    console.log(this.age);
}

const person = {
    age:45,
    showPersonAge : showAge // <---------- this will get this.age from the local person object "age" variable.
};

let age = 20;
person.showPersonAge();
*/


// Explicit use of this. (call, bind etc)
/*
function explicitMe() {
    console.log(this.A);
};

var obj = {
    A:"Ramrod is in control now Aprilia"
};

//explicitMe.call(obj);   //<----------- using the .call() method to pass an object parameter and this. gets the value from the value passed.

const bindThis = explicitMe.bind(obj);  // <---------- this binds the function to the object passed.
console.log(bindThis())

*/

/*
// Case function constructor

function ComicHero(age) { 
    this.age = age;
}

var mickey = new ComicHero(92);
var hulk = new ComicHero(58);

// we never came back to this part. No output preview. :(

*/
// scope examples

var one = 1;

function outer(){
    var two = 2;

    function inner() {
        var three = 3;
        console.log(one,two,three);
    }
}



