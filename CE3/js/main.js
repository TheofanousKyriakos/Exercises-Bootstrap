function login(){
    $(document).ready(function(){
        $('.login-form').css("display","block");
    })
}


$('.login-button').on('click',function(){
     $('.login-form').toggle();
});
