$('.nextstep-1').click(function () {
    $('.add-form1').addClass('hidden-form');
    $('.add-form2').removeClass('hidden-form');
});
$('.nextstep-2').click(function () {
    $('.add-form2').addClass('hidden-form');
    $('.add-form3').removeClass('hidden-form');
});
$('.nextstep-3').click(function () {
    $('.add-form3').addClass('hidden-form');
    $('.add-form4').removeClass('hidden-form');
});
$('.backto-form1').click(function () {
    $('.add-form2').addClass('hidden-form');
    $('.add-form1').removeClass('hidden-form');
});
$('.backto-form2').click(function () {
    $('.add-form3').addClass('hidden-form');
    $('.add-form2').removeClass('hidden-form');
});
$('.backto-form3').click(function () {
    $('.add-form4').addClass('hidden-form');
    $('.add-form3').removeClass('hidden-form');
});