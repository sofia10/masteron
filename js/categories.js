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
