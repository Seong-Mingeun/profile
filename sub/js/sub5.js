//sub5.js

$(function () {

    $('nav .gnb li').mouseenter(function () {

        $('.sub').slideDown();

    });

    $('.sub_wrap').parents().mouseleave(function () {
        $('.sub').stop().slideUp();

    }); //서브메뉴
    
    //연간이용권 탭메뉴
    $('.member_tabmenu > li>a').click(function (e) {

        e.preventDefault();

        $(this).parents().addClass('active').siblings().removeClass('active');



        /*var i = $(this).index();
        
        $('.member_list').eq(i).addClass('on').siblings().removeClass('on');*/

    });

    $('.member_tabmenu>li:nth-child(1) a').click(function (e) {
        e.preventDefault();

        $('#dolmoa, #damoa').hide();

        $('#seoulland').show();

    });

    $('.member_tabmenu>li:nth-child(2) a').click(function (e) {
        e.preventDefault();

        $('#seoulland,  #damoa').hide();

        $('#dolmoa').show();
    });

    $('.member_tabmenu>li:nth-child(3) a').click(function (e) {
        e.preventDefault();

        $('#seoulland, #dolmoa').hide();

        $('#damoa').show();
    });
    

}); //jQuery
