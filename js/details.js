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


});


$('#videoModal').on('hide.bs.modal', function(e) {
    var $if = $(e.delegateTarget).find('iframe');
    var src = $if.attr("src");
    $if.attr("src", '/empty.html');
    $if.attr("src", src);
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
