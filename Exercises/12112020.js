/* 
12/11/2020
Error handling


*/
/*
    function arrayFromRange (min,max){
        let myArray=[];
        console.log('starting');
        for (i=min;i<max;i++){
            toPush = i+1;
            myArray.push(toPush);
        }
        return myArray
    }

    x = arrayFromRange(5,15);
    console.log(x);

*/
/*
// second method of solving
function anotherAttempt (min, max){
    let myArray=[];
    let i=min;
    console.log('starting');
    
    while (i<max){
        i++
        pushValue = i+1;
        myArray.push(pushValue);

    }
    return myArray;
}
let f;


f = anotherAttempt(5,10);
console.log(f);
*/

/*
try{
    thisIsNotAFunction('heh');
}
catch(err){
    console.log('A wild exception appears' + err)
}
*/

/*
function theBrandNewTryCatch(){
    let message = '';
    let x = prompt('hello?')

    try {
        if (x=='') throw ' empty';
        if (isNaN(x)) throw 'not a number';
        if (x>100) throw ' a big number'
        if (x<50) throw 'is a small number';

    }
    catch(err){
        console.log('your input ' + err);
    }
}

theBrandNewTryCatch();
*/


//using regexp to count instances of x in a string

//this is our string to search
let stringToPass='hello mr bob. nice to meet you';


function countVowels(inputString){
    //match will return an array of instances from the search string
    let vowelNum = inputString.match(/[aeiou]/gi).length
    return vowelNum;
}

x = countVowels(stringToPass);
console.log(`${x} vowels in the string : ${stringToPass}`);


