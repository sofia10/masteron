$('#step1').click(function () {
    $('.login-form').addClass('hidden-form');
    $('.step2-form').removeClass('hidden-form');
});
$('#step3').click(function () {
    $('.login-form').addClass('hidden-form');
    $('.step4-form').removeClass('hidden-form');
});
$('.reg-link').click(function () {
   $('.reg-link').removeClass("active");
   $(this).addClass('active');
});
$('.reg-link2').click(function () {
    $('.login-form').addClass('hidden-form');
    $('.step3-form').removeClass('hidden-form');
});
$('.reg-link1').click(function () {
    $('.login-form').addClass('hidden-form');
    $('.step1-form').removeClass('hidden-form');
});

