//sub13.js

$(function () {

    $('nav .gnb li').mouseenter(function () {

        $('.sub').slideDown();

    });

    $('.sub_wrap').parents().mouseleave(function () {
        $('.sub').stop().slideUp();

    }); //서브메뉴

    //탭메뉴

    $('.tabmenu > li > a').click(function (e) {
        e.preventDefault();

        $(this).parent().addClass('active').siblings().removeClass('active');

    });

    $('.tabmenu >li:nth-child(1) a').click(function (e) {
        e.preventDefault();

        $('#host').hide();

        $('#student').show();

    });

    $('.tabmenu >li:nth-child(2) a').click(function (e) {
        e.preventDefault();

        $('#student').hide();

        $('#host').show();
        /*		 $('#host').css({
        			 marginTop: '120px',
        			 opacity: 1
        		 });*/

    });

    //slide Down

    var cnum = 0; //클릭 수
    /*$('.program_box .program_title h3').click(function () {

          if (cnum === 0) {

              $(this).find('span').css({
                  transform: 'rotate(-180deg)',
                  borderRadius: '100px',
                  backgroundColor: '#e16254',
                  transition: 'all .6s'
              });
              cnum++;
          } else {
              $(this).find('span').css({
                  transform: 'rotate(0deg)',
                  borderRadius: 0,
                  backgroundColor: 'transparent',
                  transition: 'all .6s'
              });
              cnum--;
          }
*/
    $('.program_box .program_title h3').click(function () {

        /*      $(this).find('span').css({
                  transform: 'rotate(-180deg)',
                  borderRadius: '100px',
                  backgroundColor: '#e16254',
                  transition: 'all .6s'
              });*/


        /*  if (cnum === 0) {

              $(this).find('span').animate({
                  transform: 'rotate(-180deg)',
                  borderRadius: '100px',
                  backgroundColor: '#e16254'
              }, 400, function () {
                  $('.program_box .program_title h3').click(function () {
                      $(this).find('span').css({
                          transform: 'rotate(0deg)',
                          borderRadius: 0,
                          backgroundColor: 'transparent'
                      });
                  });

              });
              cnum++;
          } else {
              $(this).find('span').animate({
                  transform: 'rotate(-180deg)',
                  borderRadius: '100px',
                  backgroundColor: '#e16254'
              }, 400, function () {
                  $('.program_box .program_title h3').click(function () {
                      $(this).find('span').css({
                          transform: 'rotate(0deg)',
                          borderRadius: 0,
                          backgroundColor: 'transparent'
                      });
                  });

              });
              cnum--;
          }*/


        /*$(this).find('span').css({
            transform: 'rotate(-180deg)',
            transition: 'all .6s',
            borderRadius: '100px',
            backgroundColor: 'red'
        });*/

        $(this).next().stop().slideToggle(400, "linear", function () {});


        $(this).find('span').toggleClass('rotate');



    });





}); //jQuery
