//sub13.js

$(function () {


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
       

    });

    //slide Down


    $('.program_box .program_title h3').click(function () {


        $(this).next().stop().slideToggle(400, "linear");


        $(this).find('span').toggleClass('rotate');



    });





}); //jQuery
