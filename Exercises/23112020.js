$(document).ready(function(){
    $('#memo').html(' Also added with jquery <p> And this is paragraph </p>');
    $('.remo').append('<div class="pepper">...</div>');
    $('.pepper').html('<p>Maybe yes maybe no. But definitely not maybe. </p>');
    $('.pepper').css("color","green");
    let peppa = $('.pepper');
    peppa.css('background-color', 'black');
    $('#a').click(function(event){
        alert('Fetched by clicking: ' +' '+ $('#memo').text());
        event.preventDefault();
    });
    $(document.body).append('<div class="roro"></div>');
    $('#a').css("border","solid","black","2px");
    $('#a').css({"width":"100px",
                "text-align":"center"})


    let array = $('div');
    console.log(array);
});
