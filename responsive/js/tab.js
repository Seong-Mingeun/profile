//tab.js

$(function () {

    $('.tabmenu li img').first().attr('src', 'img/col_coffee_icon.png');

    $('.tabmenu li a').click(function (e) {
        e.preventDefault();

        $(this).parent().addClass('tab').siblings().removeClass('tab');


        var i = $(this).parent().index();
        console.log('출력 인덱스:' + i);

        $('.sigmenu_list').eq(i).addClass('mshow').siblings().removeClass('mshow');

        //이미지 색깔 변경

        switch (i) {
            case 0:
                $('.tabmenu li img').first().attr('src', 'img/col_coffee_icon.png');
                $('.tabmenu li:nth-child(2) img').attr('src', 'img/cake_icon.png');
                $('.tabmenu li:nth-child(3) img').attr('src', 'img/sandwich_icon.png');
                break;
            case 1:
                $('.tabmenu li:nth-child(2) img').attr('src', 'img/col_cake_icon.png');
                $('.tabmenu li img').first().attr('src', 'img/coffe_icon.png');
                $('.tabmenu li:nth-child(3) img').attr('src', 'img/sandwich_icon.png');
                break;
            case 2:
                $('.tabmenu li:nth-child(3) img').attr('src', 'img/col_sandwich_icon.png');
                $('.tabmenu li img').first().attr('src', 'img/coffe_icon.png');
                $('.tabmenu li:nth-child(2) img').attr('src', 'img/cake_icon.png');
                break;

        }





    });

});
