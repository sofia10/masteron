$('.filters-btn').click(function(){
    $('.filters').addClass('navigation-filter');
    $('.burger-bg').fadeIn();
});
$('.fa-times').click(function (){
    $('.filters').removeClass('navigation-filter');
    $('.burger-bg').fadeOut();
});
$('.burger-bg').click(function (){
    $('.filters').removeClass('navigation-filter');
    $('.burger-bg').fadeOut();
});