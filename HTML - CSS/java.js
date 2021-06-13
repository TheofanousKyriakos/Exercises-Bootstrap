var btn1 = document.getElementById("btn1");
var counter = 1;

btn1.addEventListener("click", function() {

    var myRequest = new XMLHttpRequest();


    myRequest.open("GET", "dogs_" + counter + ".json", true);
    myRequest.onload = function() {

        var mydata = JSON.parse(myRequest.responseText);

        var keimeno = " ";

        for (var i = 0; i < mydata.length; i++) {
            keimeno += "<p>O/H " + mydata[i].name + " einai " + mydata[i].color + " " + mydata[i].ratsa + "</p>";
        }
        document.getElementById("dogs").insertAdjacentHTML('beforeend', keimeno);

        // for (i=0; i < mydata.length; i++){
        //     document.getElementById("dogs").innerHTML += `<p> name: ${mydata[i].name} </p>
        //     <p> race: ${mydata[i].race} </p>
        //     <p> color: ${mydata[i].color} </p>
        //     <p> age: ${mydata[i].age} </p>`
        // }


        // var myData = myRequest.responseText;
        // console.log(myData[0]);
        // let data = JSON.parse(myData);
        
        // data.forEach(x => {
        //     var item = document.getElementById("dogs");
        //     item.innerHTML = `
        // <p>Dog's name: ${JSON.stringify(x.name)}</p>
        // <p>Dog's name: ${JSON.stringify(x.breed)}</p>
        // <p>Dog's name: ${JSON.stringify(x.color)}</p>
        // <p>Dog's name: ${JSON.stringify(x.age)}</p>
        // `
        // })

    }

    myRequest.send();
    counter ++;

    if(counter > 2){
        btn1.disabled = true;
        document.getElementById("msg").innerHTML = "Oxi alla dedomena";
    }
    
    // if(counter <= 2) {
    // myRequest.send();
    // counter++;
    // } else {
    // alert('stopped')
    // }
});










// var counter = 1;
// document.getElementById("btn1").addEventListener("click",function(){
//     var myRequest = new XMLHttpRequest();
//     myRequest.open("GET", `dogs${counter++}.json`, true)
//     myRequest.onload = function() {
//         console.log(myRequest.status)
//         if (myRequest.status !== 404){
//         var mydata = JSON.parse(myRequest.responseText);
//         for (i=0; i < mydata.length; i++){
//             document.getElementById("dogs").innerHTML += `<p> name: ${mydata[i].name} </p>            <p> race: ${mydata[i].race} </p>            <p> color: ${mydata[i].color} </p>            <p> age: ${mydata[i].age} </p>`        }
//     }else{
//         counter = 1        document.getElementById("dogs").innerHTML += `<p> No more files start form the begging</p>`    }
//     }
//     myRequest.send()
// })