
// declare variables where ht = height in meters, wg is weight in kilos
var ht;
var wg;


function bmi(height, weight){
	var myBmi = weight / (height*height);
    
    console.log('Your BMI is ' + myBmi + '. ');
    console.log('You are : ' );
    if (myBmi<18.5){
    	console.log('Underweight');
    } else if (18.5<myBmi<24.9){
    	console.log('Normal Weight');
    } else if (25<myBmi<29.9) { 
    	console.log('Overweight');
    } else if (myBmi>30){
    	console.log('Obese');
    } else console.log('something went wrong...');
    
    
}

//run sample function with default numbers (2 meters tall, 50kg)

bmi(2, 50)

