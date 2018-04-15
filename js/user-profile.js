var qty = 0;

$(document).ready(function () {
    $('.main_checker').click(function () {
        if (qty == 0) {
            $('.checker').prop('checked', true);
            qty++;
            $('.btn-block').addClass('active');
            console.log('yes');
        }
        else {
            $('.checker').prop('checked', false);
            qty = 0;
            $('.btn-block').removeClass('active');
            console.log('noope');

        }
    });
    $('.respo-check').click(function () {
        if (qty == 0) {
            $('.check').prop('checked', true);
            qty++;
        }
        else {
            $('.check').prop('checked', false);
            qty = 0;
        }
    });
    $('.checker').change(function(){
        if ($('input.checker').is(':checked')) {
            $('.btn-block').addClass('active');
        }else{
            $('.btn-block').removeClass('active');
        }
    });
    //responsive

    $('.check').change(function(){
        if ($('input.check').is(':checked')) {
            $('.scroll-btn').addClass('drop-scroll');
            $('html, body').animate({
                scrollTop: $(".drop-scroll").offset().top
            }, 800);
        }else{
            $('.scroll-btn').removeClass('drop-scroll');
        }
    });
});
