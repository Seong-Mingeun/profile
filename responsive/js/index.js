//index.js

$(function () {

    var winWidth = $(window).width();
    console.log('화면 너비' + winWidth);

    if (winWidth <= 720) {
        $('.fadeShow img:nth-child(1)').attr('src', 'img/main_mo_bg01.png');
        $('.fadeShow img:nth-child(2)').attr('src', 'img/main_mo_bg02.png');
        $('.fadeShow img:nth-child(3)').attr('src', 'img/main_mo_bg03.png');
    } else {
        $('.fadeShow img:nth-child(1)').attr('src', 'img/main_bg01.png');
        $('.fadeShow img:nth-child(2)').attr('src', 'img/main_bg02.png');
        $('.fadeShow img:nth-child(3)').attr('src', 'img/main_bg03.png');
    }
    
    $(window).resize(function () {
            winWidth = $(window).width();
           if (winWidth <= 720) {
        $('.fadeShow img:nth-child(1)').attr('src', 'img/main_mo_bg01.png');
        $('.fadeShow img:nth-child(2)').attr('src', 'img/main_mo_bg02.png');
        $('.fadeShow img:nth-child(3)').attr('src', 'img/main_mo_bg03.png');
    } else {
        $('.fadeShow img:nth-child(1)').attr('src', 'img/main_bg01.png');
        $('.fadeShow img:nth-child(2)').attr('src', 'img/main_bg02.png');
        $('.fadeShow img:nth-child(3)').attr('src', 'img/main_bg03.png');
    }

    });
/*탭 클릭 시 해당 영역으로 이동함수*/
tabScroll();

function tabScroll() {
    $('nav li a').click(function (e) {
        e.preventDefault();

        $('html, body').stop().animate({
            scrollTop: $(this.hash).offset().top - 100
        }, 600);
    });
}

/*스크롤 시 nav 색깔 변경*/
$(window).scroll(function () {

    var navH = $('nav').height();
    var winTop = $(window).scrollTop();

    console.log('nav높잇값:' + navH);
    console.log('window scroll값:' + winTop);

    if (navH < winTop) {
        $('header').addClass('on');
        $('header .logo img').attr('src', 'img/logo_ch.png');
        $('nav li a').css('color', '#fff');
    } else {
        $('header').removeClass('on');
        $('header .logo img').attr('src', 'img/logo.png');
        $('nav li a').css('color', '#231d1d');
    }

});

/*유튜브 정지*/
$('section').click(function () {
    $('.video iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + "pauseVideo" + '","args":""}', "*");
});

/*menu 스와이프*/

var menuSwiper = new Swiper('.season .swiper-container', {
    slidesPerView: 'auto',
    loop: true,
    speed: 1000,
    observe: true,
    observeParents: true,
    pagination: {
        el: '.season .swiper-pagination',
        type: 'fraction',
    },
});

$('.season .swiper-button-prev').click(function () {
    menuSwiper.slidePrev(300);
}); $('.season .swiper-button-next').click(function () {
    menuSwiper.slideNext(300);
});


/*event 스와이프*/
var eventSwiper = new Swiper('.event .swiper-container', {
    slidesPerView: 'auto',
    loop: true,
    speed: 1000,
    observe: true,
    observeParents: true,
    pagination: {
        el: '.event .swiper-pagination',
        type: 'fraction',
    },
});

$('.event .swiper-button-prev').click(function () {
    eventSwiper.slidePrev(300);
}); $('.event .swiper-button-next').click(function () {
    eventSwiper.slideNext(300);
});



});
