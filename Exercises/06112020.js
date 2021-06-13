/* Class exercises : 
    do while loops
    while loops
    ternary if statement
*/


// *** Ternaries ***
// var x=8;
// k=(x==5)?"It is five":"It is not five";
// console.log(k);


// var x = 1280;
// var y = 1280;
// function decide(width, height){
//     let msg;
    //     if (width==height){
//             msg="It is a square";
//     } else {
//         msg=(width>height)?"It is landscape":"It is portrait";
//     }
//     return msg;
// }
// result = decide(x,y);
// console.log(result);


/*
***This does not run***
***returns : SyntaxError: Unexpected token '?' 


let a = null;
let b = undefined;
let c = 'something';

x = (a??b??c);
console.log(x);
*/


// const arr = [1,2,3,4,5,6,7]
// while (arr.length>0) {
//     const elem = arr.shift();
//     console.log(elem);
// }

// function exerciseDo(numberOfTimes){
//     let i = 0;
//     do{
//         i++
//         console.log(i)
//     } while (i<numberOfTimes)
// }
// exerciseDo(7)

// e = []
// e[20] = 'ad';
// console.log(e);
// console.log(e.length);
// console.log(typeof e[4]);

// Fetch month name from the Date() object.
// function exerciseDate (){
//     date = new Date();
//     month = date.getMonth();
//     let currentMonth;
//     switch(month){
//         case 0:
//             currentMonth = "January";
//             break;
//         case 1:
//             currentMonth = "February";
//             break;
//         case 2:
//             currentMonth = "March";
//             break;
//         case 3:
//             currentMonth = "April";
//             break;
//         case 4:
//             currentMonth = "May";
//             break;
//         case 5:
//             currentMonth = "June";
//             break;
//         case 6:
//             currentMonth = "July";
//             break;
//         case 7:
//             currentMonth = "August";
//             break;
//         case 8:
//             currentMonth = "September";
//             break;
//         case 9:
//             currentMonth = "October";
//             break;
//         case 10:
//             currentMonth = "November";
//             break;
//         case 11:
//             currentMonth = "December";
//             break;             break;
//         default:
//             console.log('Something went wrong');
//             break;    

//     }
//     console.log(currentMonth);
// }
// exerciseDate()


// function exerciseDate2() {
//     let months=['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
//     date = new Date();
//     currentMonth = date.getMonth();
//     monthName = months[currentMonth];
//     console.log(monthName);

// }
// exerciseDate2()

// let isZero;
// let n=5;
// isZero=(n!==0)?false:true;

// console.log(isZero);

// let counter = 0;
// let i=0;

// do{
//     counter = counter+2
//     i++
//     console.log(counter)
// } while (i<5);
