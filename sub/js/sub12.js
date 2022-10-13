//sub12.js 편의시설

$(function () {

    $('nav .gnb li').mouseenter(function () {

        $('.sub').slideDown();

    });

    $('.sub_wrap').parents().mouseleave(function () {
        $('.sub').stop().slideUp();

    }); //서브메뉴

    var cnum = 0; //클릭수

    $('.more_click').click(function () {

        var currH = $(this).parents('li').find('.imgbox').children('.fare').innerHeight();
        console.log(currH);

        var txtBox = $(this).parents('li').find('.imgbox').children('.fare');

        /* if (cnum === 0) {
             $(this).text('이용안내 닫기');
             $(this).parents('li').find('.imgbox').children('.fare').animate({
                 top: -currH
             }, 300);
             cnum++;
         } else {
             $(this).text('이용안내 보기');
             $(this).parents('li').find('.imgbox').children('.fare').animate({
                 top: 0
             }, 400);
             cnum--;
         }*/

        if (cnum === 0) {
            $(this).text('이용안내 닫기');
            txtBox.animate({
                top: -currH
            }, 300);
            cnum++;
        } else {
            $(this).text('이용안내 보기');
            txtBox.animate({
                top: 0
            }, 400);
            cnum--;
        }







    });


}); //jQuery
