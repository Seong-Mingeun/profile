//top.js

//TOP 버튼
var topPos = $(window).height() * 0.8;

$(function () {
    $(window).scroll(function () {

        var scTop = $(this).scrollTop();
        console.log('현재 위치:' + scTop);


        if (scTop < 100) {
            $('#tbtn').hide().css({
                top: topPos + 'px'
            });
        } else {
            $('#tbtn').show().css({
                top: topPos + 'px',
                position: 'fixed'
            });
        }

    }); //window.scroll
    
});
