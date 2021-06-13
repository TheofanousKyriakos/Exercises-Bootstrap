/* Objects */

/* 
var myObject = new Object(),
    str = 'myString',
    rand = Math.random(),
    obj = new Object();

myObject.type = 'Dot syntax';
myObject['date created'] = '10 11 2020';
myObject[str] = 'String Value';
myObject[rand] = 'random number';
myObject[obj] = 'Object new';

console.log(myObject)


let objName = {
    name1:"Object",
    identity:"First"
}

// OR //

var objName2 = new Object();
objName2.name1 = "Object 2";
objName2.identity = "Second";

console.log(objName, objName2)


var tvObject = new Object()
tvObject = {
    size : 50,
    manufacturer : "Sony",
    modelName : 'tvModelXY22',
    isSmart : true,
    isAvailable : true,
    supportedApps : ['Netflix', 'Youtube', 'Spotify', 'Android']
}

console.log(tvObject)



var myCar ={

    make : 1992,
    model : 'carModel',
    color : 'red',
    engine : {size:3, cylinders:4}
}

console.log("object car: " + myCar);
console.log("object inside object: " + myCar.engine);



/* using the constructor for objects */

/*
function Poet(firstName, lastName, numberOfBooks){
    this.firstName = firstName;
    this.lastName = lastName;
    this.numberOfBooks = numberOfBooks;
}

const x = new Poet('Kiki', 'Dimoula', 50)
console.log(x);


function Car(model, make, brand, engine, color){
    this.brand = brand;
    this.model = model;
    this.make = make;
    this.engine = engine;
    this.color = color;
}

const myHonda = new Car('accura', '2019', 'honda', {size:3, cylinders:4}, color='red');
console.log(myHonda);

*/

//Classes in Js//
/*
class GreekPoet {
    constructor (firstName, lastName, dob, dod){
        this.firstName=firstName;
        this.lastName=lastName;
        this.dob = dob;
        this.dod = dod;

        this.smallBio = function(){
            return `Poet ${this.firstName} ${this.lastName} was born in ${this.dob} and died in ${this.dod}`;
        }
    }
}

const poet = new GreekPoet('kiki', 'dimoula', 1901, 1996)
console.log(poet.smallBio());
*/

/*
//Class constructor example

class Car {
    constructor(brand,model,color, engine, mileage){
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.engine = engine;
        this.mileage = mileage;

        this.dueService = function() {
            let serviceMiles = 10000;
            if (mileage > serviceMiles) {
                return `Car ${this.brand} model ${this.model} of color ${this.color} needs service.`
            } else {
                return `Car ${this.brand} model ${this.model} of color ${this.color} does not need service.`
            }
            
        }
    }
}

const myCar = new Car('Honda', 'Accura', 'red', {size:3, cylinder:4}, 5000);
//console.log(myCar.dueService());

console.log(Object.getOwnPropertyNames(myCar));
console.log(Object.keys(myCar));
*/

// A class constructor for the BankAccount obj. containing two functions for withdrawl / deposit including rudimentary error checking

class BankAccount {
    constructor(firstName, lastName, iban, balance, isFlagged) { 
        this.firstName = firstName;
        this.lastName = lastName;
        this.iban = iban;
        this.balance = balance;
        this.isFlagged = isFlagged

        this.deposit = function(amountDeposit){
            if (!isFlagged){
                this.balance = balance + amountDeposit;
                return `Deposited ${amountDeposit} to ${iban}, owner : ${firstName} ${lastName}. Total now is ${this.balance}.`
            } else { 
                return `Something went wrong with the deposit for ${firstName} ${lastName}.`
            }
        }
        this.withdraw = function(amountWithdraw){
            if ((!isFlagged) && (balance>amountWithdraw)){
                this.balance = balance - amountWithdraw;
                return `Withdrew ${amountWithdraw} from ${iban}, owner : ${firstName} ${lastName}. Total now is ${this.balance}`
            } else {
                return `Something went wrong with the withdrawal for ${firstName} ${lastName}.`
            }
        }
    }
}

const customer = new BankAccount('Chris', 'Anagnostopoulos', '1231398912', 100, false);

//console.log(customer.withdraw(50));
//console.log(customer.withdraw(150));
//console.log(customer.deposit(150));
console.log(typeof(customer));






