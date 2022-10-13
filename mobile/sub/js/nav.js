//nav.js

$(function(){
    //서브 메뉴
    $('.menu_toggle').click(function () {
        $('nav').animate({
            left: 0
        }, 600);
    });

    //닫기 버튼 클릭 시 사라지게 하기
    $('.utility h2 .clbt').click(function () {
        $('nav').animate({
            left: '100%'
        }, 600);
        
        $('.submenu').slideUp();
        $('.gnb img').removeClass('rotate');
    });


    //대메뉴 클릭 시 소메뉴 나타나게 하기
    $('.gnb>li>a').click(function () {
        $(this).next().stop().slideToggle(400)
            .parent().siblings().find('.submenu').slideUp(400);

        //동시에 아래버튼 아이콘 회전
        $('>img', this).toggleClass('rotate')
            .parents('li').siblings().find('img').removeClass('rotate');

    });
    
    
});