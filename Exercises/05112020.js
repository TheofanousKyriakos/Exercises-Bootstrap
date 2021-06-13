
function fruitType(fruit){
    let price;
    let fruitName = fruit.toLowerCase();
    let msg;
    
    switch (fruitName){ 
        case 'bananas':
            price=0.99;
            break;
        case 'oranges':
            price=0.79;
            break;
        case 'apples':
            price  = 0.89;
            break;
        case 'cherries':
            price = 2.99;
            break;
        case 'grapes':
            price = 3.99;
            break;
        default:
            msg='Please enter valid fruit'
            break;
    }
    if (price>0){
        msg='The price of '+fruitName+' is $'+price+'.';
    } else {
        
    }
    return msg;
}
    
showPrice = fruitType('BaNaNaS')
console.log(showPrice)