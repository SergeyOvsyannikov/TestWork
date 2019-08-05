if($('#rb1').prop('checked')){
    $('#content-tab1').toggleClass('content-tab-visible');
}
else if($('#rb2').prop('checked')){
    $('#content-tab2').toggleClass('content-tab-visible');
}
else if($('#rb3').prop('checked')){
    $('#content-tab3').toggleClass('content-tab-visible');
}
$('.header__menu-btn').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('header__menu-btn-active');
    $('.header__menu').toggleClass('header__menu-responsive');
});
$('#rb1').on('click', function(){
    $('#content-tab3').removeClass('content-tab-visible');
    $('#content-tab2').removeClass('content-tab-visible');
    $('#content-tab1').toggleClass('content-tab-visible')

});
$('#rb2').on('click', function(){
    $('#content-tab1').removeClass('content-tab-visible');
    $('#content-tab2').toggleClass('content-tab-visible');
    $('#content-tab3').removeClass('content-tab-visible')
});
$('#rb3').on('click', function(){
    $('#content-tab3').toggleClass('content-tab-visible');
    $('#content-tab2').removeClass('content-tab-visible');
    $('#content-tab1').removeClass('content-tab-visible')
});

$('.need-project__button').on('click', function(){
    $('.popup').addClass('popup-visible');
    $('.popup__data').html('Name: ' +
        $("input[placeholder='Your Name']").val() +
        '<br> Email: ' +
        $("input[placeholder='Your Email']").val() +
        '<br> Title: ' +
        $("input[placeholder='Your Title']").val() +
        '<br>Comment:'+
        $("textarea[placeholder='Your Comment']").val())
});
$('.popup__close-btn').on('click', function(){
    $('.popup').removeClass('popup-visible');
});