
$('.link-drop').click(function () {
    $('.politics-menu__block').toggleClass('full-menu');
});

$(".politics-menu__link:not(:first)").click(function () {

    $(".politics-menu__block").removeClass("full-menu");

})