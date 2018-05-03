$(document).ready(function () {
    //slick-slider
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow:3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
    });
    //swiper-slider
    var swiper = new Swiper('.sw-det', {
        slidesPerView: 4,
        spaceBetween: 5,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1199: {
                slidesPerView: 4,
                spaceBetween: 25,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            530: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            359: {
                slidesPerView: 1,
                spaceBetween: 10,
            }
        }
    });

    $('.workers-title').click(function (){
       $('.workers-title').toggleClass('arrow');
    });


    var swiper = new Swiper('.banners-slider', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
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


});