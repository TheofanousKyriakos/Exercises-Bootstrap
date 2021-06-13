// function exercise(){
//     x = document.getElementsByTagName('li');
//     x[1].style.color='red';
//     x[3].innerHTML = 'ffff';
// }


// function exercise2(){
//     //create an html tabble dynamically
//     let body = document.getElementsByTagName('body')[0];
//     let tbl = document.createElement('table');
//     let tblBody = document.createElement('tbody');
//     for (let i=0;i<2;i++){
//         let row = document.createElement("tr");
//         for(let j = 0; j<2;j++){
//             let cell = document.createElement('td');
//             let cellText = document.createTextNode('cell in row'+i+', column' +j);
//             cell.appendChild(cellText);
//             row.appendChild(cell);

//         }
//         tblBody.appendChild(row);

//     }
//     tbl.appendChild(tblBody);
//     body.appendChild(tbl);
//     tbl.setAttribute(border, "2")

// }

function myFunc(){
    let fruit = ['bananas', 'apples'];
    let vegetables = ['tomatoes','peppers','onions'];
    let meat = ['pork', 'chicken'];
    let listItems = document.getElementsByTagName('li');
    
    for (let i=0; i<listItems.length; i++){
        let value = listItems[i].innerHTML;
        
        for(let x=0; x<fruit.length;x++){
            if (value==fruit[x]){listItems[i].style.color='red'}
        }
        for(let y=0; y<vegetables.length;y++){
            if (value==vegetables[y]){listItems[i].style.color='blue'}
        }
        for(let z=0; z<meat.length;z++){
            if (value==meat[z]){listItems[i].style.color='yellow'}
        }
    }
}

function clickReturn(){
    let listItems = document.getElementById('li');
    let listValue = listItems.innerHTML;

    console.log(listValue);
}
