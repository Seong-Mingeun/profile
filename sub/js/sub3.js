//sub3.js

$(function () {

    $('nav .gnb li').mouseenter(function () {

        $('.sub').slideDown();

    });

    $('.sub_wrap').parents().mouseleave(function () {
        $('.sub').stop().slideUp();

    }); //서브메뉴

    //탭 메뉴
    $('.res_title ul > li > a').click(function (e) {
        e.preventDefault();

        $(this).parent().addClass('active').siblings().removeClass('active');
    });

    $('.res_title ul>li:nth-child(1) a').click(function () {

        $('#adventure, #character, #tomorrow, #samchulli').hide();

        $('#world').show();

    });

    $('.res_title ul>li:nth-child(2) a').click(function () {

        $('#world,  #character, #tomorrow, #samchulli').hide();

        $('#adventure').show();
    });

    $('.res_title ul>li:nth-child(3) a').click(function () {

        $('#world, #adventure, #tomorrow, #samchulli').hide();

        $('#character').show();
    });

    $('.res_title ul>li:nth-child(4) a').click(function () {

        $('#world, #adventure, #character, #samchulli').hide();

        $('#tomorrow').show();
    });

    $('.res_title ul>li:nth-child(5) a').click(function () {

        $('#world, #character, #adventure, #tomorrow').hide();

        $('#samchulli').show();
    });


    $('.restaurant a').click(function (e) {
        e.preventDefault();
    });

    //클릭 이미지 변경
    $('.thumbs a').click(function () {

        var changeImg = $(this).attr('href');
        console.log('변경된 이미지: ' + changeImg);

        $(this).parents('.restaurant_box').find('.largeimg').attr('src', changeImg);


    });


}); //jQuery
