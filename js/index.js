$(document).ready(function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 6,
        spaceBetween: 30,
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
            1200: {
                slidesPerView: 5,
                spaceBetween: 10,
            },
            991: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            375: {
                slidesPerView: 2,
                spaceBetween: 10,
            }
        }
    });
    // $('.dropdown-item').mouseover(function(){
    //     $('.dropdown-item_menu').addClass('active');
    // });

});

//

function rowLimiter(selector, lineLimit) {
    $(selector).each(function(){
        var height = $(this).height();
        var line_height = $(this).css('line-height');
        line_height = parseFloat(line_height);
        var rows = height / line_height;
        rows = Math.round(rows);
        var length = $(this).text().length;
        var newLength = Math.floor(length / rows * lineLimit - 5);
        if(rows > lineLimit)
            $(this).text($(this).text().substr(0,newLength)+'...');
    })
}

rowLimiter('.line-limit', 2);
