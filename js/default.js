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
    //
    // var length = $('.dropdown-item_list').length;
    // for(var i = 0; i < length; i++){
    //     var myLength = $('.dropdown-item_list').eq(i).find('.dropdown-item_link');
    //     if(myLength.length <= 13){
    //         myLength.closest('.dropdown-item_menu').css('width', '285px');
    //     }
    //     else if(myLength.length <= 20){
    //         myLength.closest('.dropdown-item_menu').css('width', '560px');
    //         $('.dropdown-item_list').eq(i).find('.dropdown-item_link').css('float', 'left');
    //     }
    //     else{
    //         var width = $(window).width();
    //         var listWidth = 830;
    //         if(width <= 1200){
    //             listWidth = 590;
    //         }
    //         myLength.closest('.dropdown-item_menu').css('width', listWidth+'px');
    //         $('.dropdown-item_list').eq(i).find('.dropdown-item_link').css('float', 'left');
    //     }
    // }
    //





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
        $( ".site__content" ).css( "position", "fixed" );
    });
    $('.fa-times , .burger-bg').click(function (){
        $( "body" ).css( "overflow-y", "auto" );
        $( ".site__content" ).css( "position", "unset" );
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