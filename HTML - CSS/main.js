$(document).ready(function() {


    $("#btn1").click(function() {

        $.getJSON("actors.json", function(result) {

            var keimeno = " ";

            $.each(result, function(key, value) {

                keimeno += "<tr>";
                keimeno += "<td>" + value.id + "</td>";
                keimeno += "<td>" + value.fname + "</td>";
                keimeno += "<td>" + value.lname + "</td>";
                keimeno += "<td>" + value.age + "</td>";

            });

            $("#actors_table").append(keimeno);

            $("#btn1").attr("disabled", true)

        });


    });

});