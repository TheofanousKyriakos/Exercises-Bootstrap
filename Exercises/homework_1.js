/* Uncomment blocks to run */


/* Exercise 1
console.log(2+3);
console.log("Hello" + "World");
console.log("Hello" + 1);
console.log("Hello" * 5);
console.log("Hello" / 2);
console.log(10/0);
*/

/* Exercise 2
//Write a function that takes as argument two strings, concatenates them and returns the result.

var str1 = 'abc';
var str2 = 'def';

function exercise2(string1, string2){
    let result = string1.concat(string2);
    console.log(result);
}

exercise2(str1, str2)
*/

/* Exercise 3
//Write a function that takes two numbers and returns the maximum of the two. Use only conditionals.
function exercise3(num1, num2) {
    
    if (num1==num2){
        console.log('numbers are equal');
    } else {res=(num1>num2)?num1:num2
        console.log("Largest number is " + res + '.');}

}

exercise3(120,5000);
*/

/* Exercise 4
//Write a script to check whether a string starts with 'Java' and false otherwise.
//This script will search if any given string starts with any given string and log the result to the console. 

function exercise4(inputString, searchString) { 
    searchLen = searchString.length;
    inputLen = inputString.length;
    
    x = inputString.slice(0,searchLen)
    result=(x===searchString)?'Search term exists':'Search term does not exist'
    console.log(result);
}

str1 = 'Testing the searching capabilities of the function';
str2 = 'Banana';
str3 = 'Testing';
exercise4(str1, str2);
*/