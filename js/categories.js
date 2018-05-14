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
