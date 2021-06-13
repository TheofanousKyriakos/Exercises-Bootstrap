$(document).ready(function(){

    $.ajax({
        type: "GET",
        url: "dogs_1.json",
        success: function(dogs){

            $.each(dogs, function(key,dog) {

                $("#dogs").append("<li> Name: " + dog.name + " </li>" +
                "<li> Breed: " + dog.breed + " </li>" +
                "<li> Color: " + dog.color + " </li>" +
                "<li> Age: " + dog.age + " </li>" + "<br>"
                
                );

            });

        },

        error: function(){
            alert("json file not loading")
        }

    });


    $("#add_dog").on("click", function(){

        var skylos = {
            name: $("#name").val(),
            breed: $("#breed").val(),
            color: $("#color").val(),
            age: $("#age").val()
        };

        localStorage.setItem('mydog', JSON.stringify(skylos));

        var x = JSON.parse(localStorage.getItem('mydog'));


        $("#dogs").append("<li> Name: " + x.name + " </li>" +
                    "<li> Breed: " + x.breed + " </li>" +
                    "<li> Color: " + x.color + " </li>" +
                    "<li> Age: " + x.age + " </li>" + "<br>"
        );

    });

    let y = JSON.parse(localStorage.getItem('mydog'));

    if (y !== null) {

        $("#dogs").append("<li> Name: " + y.name + " </li>" +
                    "<li> Breed: " + y.breed + " </li>" +
                    "<li> Color: " + y.color + " </li>" +
                    "<li> Age: " + y.age + " </li>" + "<br>"
        );

    }

});