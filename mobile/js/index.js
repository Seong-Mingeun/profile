//index.js

$(function () {

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


    //슬라이더

    //1) 오른쪽으로 이동하는 함수 만들기
    var page = 0;

    //슬라이딩 함수 만들기
    function move() {
        page++;

        if (page === 6) {
            $('.slider_box .slider').css({
                left: 0
            });
            page = 1;
        } //if문

        $('.slider_box .slider').animate({
            left: 100 * -page + '%'
        }, 300);


        //블릿 변경 함수 실행
        $('.btnGroup li').css({
            backgroundColor: '#fff'
        });

        $('#btn' + page).css({
            backgroundColor: '#e16254'
        });

        if (page === 5) {
            $('#btn0').css('background-color', '#e16254')
        }

    }

    //자동 슬라이드 함수
    var slide = setInterval(function () {
        move();
    }, 3000)

    //3) 멈춤 버튼 클릭 시 재생 버튼으로 변경
    var click = 0;

    $('.btnBox a img').click(function (e) {
        e.preventDefault();

        if (click === 0) {
            $(this).attr({
                src: "img/icon_play.png",
                alt: "슬라이더 재생"
            });
            clearInterval(slide);
            click++;

        } else {
            $(this).attr({
                src: "img/media_pause_icon.png",
                alt: "슬라이더 멈춤"
            });
            slide = setInterval(function () {
                move();
            }, 3000);
            click--;
        };

    });


    //4) 블릿 버튼 클릭 시, 빨간색으로 변경되고 해당 이미지 표시
    $('.btnGroup li').click(function () {
        clearTimeout(slide);
        gbtn = $(this).attr('id');
        gbtn = Number(gbtn.substr(3, 1));
        page = gbtn;
        //console.log(gbtn);

        $('.btnGroup li').css({
            backgroundColor: '#fff'
        });

        $(this).css({
            backgroundColor: '#e16254'
        });

        $('.slider_box .slider').animate({
            left: 100 * -gbtn + "%"
        });
        slide = setInterval(function () {
            move();
        }, 3000);
    });

    //운영시간
    //현재 요일 불러오기
    var date = new Date();
    console.log('오늘 요일:' + date.getDay());

    //평일 / 주말 시간 구분하기
    if (date.getDay() < 6) {
        $('.info_title span').text('10:00 - 21:00').css('margin-left', '8px');
    } else {
        $('.info_title span').text('10:00 - 22:00').css('margin-left', '8px');
    };

    //탭메뉴
    $('.tabmenu > li > a').click(function (e) {
        e.preventDefault();

        $(this).parent().addClass('on').siblings().removeClass('on');

    });
    $('.tabmenu>li:nth-child(1) a').click(function (e) {
        e.preventDefault();

        $('#family-course, #couple-course').hide();

        $('#child-course').show();

    });

    $('.tabmenu>li:nth-child(2) a').click(function (e) {
        e.preventDefault();

        $('#child-course, #couple-course').hide();

        $('#family-course').show();
    });

    $('.tabmenu>li:nth-child(3) a').click(function (e) {
        e.preventDefault();

        $('#child-course, #family-course').hide();

        $('#couple-course').show();
    });

    //TOP 버튼
    var topPos = $(window).height() * 0.8;

    //이벤트
    /*    var aTop = $('.attraction').offset().top;
        console.log('어트랙션 위치:' + aTop);
        var pTop = $('.promotion').offset().top;
        console.log('혜택 위치:' + pTop);
        var fTop = $('.festival').offset().top;
        console.log('공연정보 위치:' + fTop);
        var nTop = $('.notice').offset().top;
        console.log('공지위치:' + nTop);*/

    $(window).scroll(function () {

        var scTop = $(this).scrollTop();
        console.log('현재 위치:' + scTop);

        //어트랙션 jQuery
        /*        if (scTop > aTop - 620) {
                    $('.bgcover, .attraction_wrap').animate({
                        opacity: 1
                    }, 600);
                }*/

        //혜택 - 시간차 애니메이션
        /*  if (scTop > pTop - 680) {
              $('.promotion').animate({
                  opacity: 1
              }, 600);
              $('.promotion_box .promotion_con:nth-child(1) a').animate({
                  top: 0
              }, 2000, 'easeOutElastic');
              $('.promotion_box .promotion_con:nth-child(2) a').animate({
                  top: 0
              }, 2600, 'easeOutElastic');
              $('.promotion_box .promotion_con:nth-child(3) a').animate({
                  top: 0
              }, 3200, 'easeOutElastic');
              $('.promotion_box .promotion_con:nth-child(4) a').animate({
                  top: 0
              }, 3800, 'easeOutElastic');

              $('.promoBtn').fadeIn(800);
          }*/

        //공연정보
        /*        if (scTop > fTop - 522) {
                    $('.festival h2').animate({
                        opacity: 1,
                        marginTop: 0
                    }, 600);
                    $('.festival p, .festival_wrap').animate({
                        opacity: 1
                    }, 600);
                }*/

        //뉴스 공지
        /*        if (scTop > nTop - 742) {
                    $('.notice').animate({
                        marginTop: '60px',
                        opacity: 1
                    }, 600);
                }*/


        //Top 버튼
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

        $('#tbtn').click(function () {

            $('html, body').stop().animate({
                scrollTop: 0
            }, 800, 'easeOutQuad');
        });

    }); //window.scroll

    //드래그바



    //인스타
    var acall;

    acall = setInterval(flowImg, 30)

    //마우스 오버시 멈춤, 아웃시 다시 실행
    $('.flowImg li').hover(function () {
        clearInterval(acall);
    }, function () {
        acall = setInterval(flowImg, 30);
    });


    var fnum = 0; //이동픽셀수
    function flowImg() {

        fnum++;

        var fw = $('.flowImg li').first().width();

        if (fnum > fw) {
            $('.flowImg').append($('.flowImg li').first()).css({
                left: 0
            });

            fnum = 0;
        } else {
            $('.flowImg').css({
                left: -fnum + 'px'
            });
        }
    }

}); //jQuery
