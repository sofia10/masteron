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
$('.red-button').click(function(){
    $('.filters').removeClass('navigation-filter');
    $('.burger-bg').fadeOut();
    $( "body" ).css( "overflow-y", "auto" );
});
$('.clear-filter').click(function(){
    $('.filters').removeClass('navigation-filter');
    $('.burger-bg').fadeOut();
    $( "body" ).css( "overflow-y", "auto" );
});

$('.filters-btn').click(function (){
    $( "body" ).css( "overflow-y", "hidden" );
    // $( ".site__content" ).css( "position", "fixed" );
});
$('.fa-times , .burger-bg').click(function (){
    $( "body" ).css( "overflow-y", "auto" );
    // $( ".site__content" ).css( "position", "unset" );
});




var swiper = new Swiper('.banners-slider', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });



// rating


$.fn.stars = function() {
    return this.each(function() {
        var val = parseFloat($(this).html());
        var size = Math.max(0, (Math.min(5, val))) * 15.8;
        var $span = $('<span> </span>').width(size);
        $(this).empty().append($span);
    });
}

$(function() {
    $('.rating-results-content span.rating-stars').stars();
});

$('.rating-results-content').click(function(ev){
    var index = ev.pageX;
    var offset = $(this).offset().left;
    var clickX = index - offset;
    var single = $(this).width() / 5;

    var result = Math.ceil(clickX / single);
    $(this).find('.rating-stars span').css('width', single*result);
    console.log(result);
});
