//top.js

//TOP 버튼
var topPos = $(window).height() * 0.8;

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

//탑 버튼
$('#tbtn').click(function () {

    $('html, body').stop().animate({
        scrollTop: 0
    }, 800, 'easeOutQuad');
});


