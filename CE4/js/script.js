$(document).ready(function(){
    $('.hide-button').click(function(){
        $('.first-image').hide()
    });
    
    $('.show-button').click(function(){
        $('.first-image').show()
    });
    
    $('.hide-button').hover(function(){
        $(this).css({"background-color":"red"
        });
    },
    function() {
        $(this).css({
            "background-color" : "green"
        })
    });
})