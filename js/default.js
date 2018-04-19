$(document).ready(function () {

    /*$(".selector").mCustomScrollbar({
        axis: "y"
    });
    $(".selector").selectmenu({
        classes: {
            "ui-selectmenu-menu": "added-class"
        }
    });*/

    // dropdown js menu

    var length = $('.dropdown-item_list').length;
    for(var i = 0; i < length; i++){
        var myLength = $('.dropdown-item_list').eq(i).find('.dropdown-item_link');
        if(myLength.length == 1){
            myLength.closest('.dropdown-item_menu').css('width', '265px');
        }
        else if(myLength.length <= 4){
            myLength.closest('.dropdown-item_menu').css('width', '265px');
            $('.dropdown-item_list').eq(i).find('.dropdown-item_link').css('float', 'none');
        }
    }

    // $('.search-btn').click(function (){
    //     $('.search-nav').addClass('active');
    //     $('.burger-nav').removeClass('active');
    //     $('.burger-bg').fadeIn();
    // });


    $('.fa-times').click(function (){
        $('.search-nav').removeClass('active');
        $('.burger-bg').fadeOut();
    });
    $('.burger-btn').click(function (){
        $('.burger-nav').addClass('active');
        $('.search-nav').removeClass('active');
        $('.burger-bg').fadeIn();
    });
    $('.close-btn').click(function (){
        $('.burger-nav').removeClass('active');
        $('.user-nav').removeClass('active');
        $('.burger-bg').fadeOut();
    });
    $('.burger-bg').click(function (){
        $('.burger-nav').removeClass('active');
        $('.search-nav').removeClass('active');
        $('.user-nav').removeClass('active');
        $('.burger-bg').fadeOut();
    });
    $('.user-btn').click(function(){
        $('.user-nav').addClass('active');
        $('.search-nav').removeClass('active');
        $('.burger-bg').fadeIn();
    });

    //burger-menu
    $('.workers-title-1').click(function (){
        $(this).next().slideToggle('slow');
    });
    $('.second-dropdown').click(function (){
        $('.second-dropmenu').slideToggle();
    });
    $('.burger-btn').click(function (){
        $( "body" ).css( "overflow-y", "hidden" );
    });
    $('.fa-times , .burger-bg').click(function (){
        $( "body" ).css( "overflow-y", "auto" );
    });

    // inner-menu
    $('.workers-menu-link').click(function(){
        $('.inner-menu', this).addClass('active');
    });
    $('.back-menu').click(function(){
        $(this).closest('.inner-menu').removeClass('active');
        return false;
    });
});