//sub2.js

$(function () {
    
   $('nav .gnb li').mouseenter(function () {

        $('.sub').slideDown();

    });
	
    $('.sub_wrap').parents().mouseleave(function () {
        $('.sub').stop().slideUp();

    }); //서브메뉴
	
//위키드 원더랜드 탭 메뉴
    $('.tabmenu > li > a').click(function (e) {
        e.preventDefault();

        $(this).parent().addClass('on').siblings().removeClass('on');

    });
    $('.tabmenu>li:nth-child(1) a').click(function (e) {
        e.preventDefault();

        $('#event2').hide();

        $('#event1').show();

    });
    
        $('.tabmenu>li:nth-child(2) a').click(function (e) {
        e.preventDefault();

        $('#event1').hide();

        $('#event2').show();

    }); //탭메뉴

});
