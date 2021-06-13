/*
18/11/2020
---------------------------
Event handling continued
--------------------------- 

approaches:
    (1): inline Hook
    (2): Event property approach
    (3): event listener with function
    (4): event listener with anonymous function

removing event listeners :
    removeEventListener() (will not work with anonymous functions)
*/

//Switch button example. Toggle?

function changeText(){
    let myButton = document.querySelector('#button');
    let myValue = myButton.value;
    if(myValue=='On'){
        myButton.value='Off'
    } else { myButton.value='On'}
};


function changeColor(){
    
    document.getElementById('header').style.color='blue';

};
function changeAgain(){
    document.getElementById('header').style.color='red';
};

/*

// my Way
function imageSwap(){
    let image = document.getElementById('image-swap');
    console.log(image)
    let link = image.getAttribute('src');
    image.setAttribute('src',"https://picsum.photos/200/300");
}
*/

//Vasilis's way (adding event listeners to object)

/*
const img=document.querySelector('#image-swap');
let originalSrcImage=img.getAttribute('src');
img.addEventListener('mouseenter', function(){
    this.setAttribute('src','https://picsum.photos/200/300')
});
img.addEventListener('mouseleave',function(){
    this.setAttribute('src',originalSrcImage)
});
*/
function validateEmail(){ 
    const dataInput = document.myMailForm.email.value;
    const atPosition = dataInput.indexOf("@");
    const dotPosition = dataInput.lastIndexOf(".");
    if (atPosition<2 || dotPosition < atPosition + 2 || dotPosition + 2 >= dataInput.length){
        alert ("please enter a valid email address");
    return false;
    };
}

/* 
-------------------------------------------------------------
JSON : JavaScript Object Notation
syntax for storing and exchanging data
JSON is text written with JS object notation

json keys *MUST* be strings. values can be anything (num, arr, obj)

ex:
myObj = {"name":"Nik", "age":31, "city":"new york"}
var myJson = JSON.stringify(myObj)

json string to javascript var :

JSON.parse(json_string)


json does not allow single quotes (')
json does not allow comma at the end {"h",2,}  <----- comma bad
json does not allow unquoted property keys {h:2}

