//sub1.js

$(function () {
    
    //탭 메뉴
    $('.attr_tab > li > a').click(function (e) {
        e.preventDefault();

        $(this).parent().addClass('active').siblings().removeClass('active');

    });
    
    $('.attr_tab>li:nth-child(1) a').click(function () {

            $('#adventure, #character, #tomorrow, #samchulli').hide();

            $('#world').show();

        });

        $('.attr_tab>li:nth-child(2) a').click(function () {

            $('#world,  #character, #tomorrow, #samchulli').hide();

            $('#adventure').show();
        });

        $('.attr_tab>li:nth-child(3) a').click(function () {
   
            $('#world, #adventure, #tomorrow, #samchulli').hide();

            $('#character').show();
        });

        $('.attr_tab>li:nth-child(4) a').click(function () {
 
            $('#world, #adventure, #character, #samchulli').hide();

            $('#tomorrow').show();
        });

        $('.attr_tab>li:nth-child(5) a').click(function () {
   
            $('#world, #character, #adventure, #tomorrow').hide();

            $('#samchulli').show();
        });



    //loadmore

    $('#character .attr_wrap .attr_box').slice(0, 4).show();

    $('#character #loadMore').on('click', function (e) {

        e.preventDefault();

        $('#character .attr_wrap .attr_box:hidden').slice(0, 2).slideDown();

        if ($('#character .attr_wrap .attr_box:hidden').length === 0) {

            $('#character #loadMore').fadeOut();
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);

    });

    $('#tomorrow .attr_wrap .attr_box').slice(0, 4).show();

    $('#tomorrow #loadMore').on('click', function (e) {

        e.preventDefault();

        $('#tomorrow .attr_wrap .attr_box:hidden').slice(0, 2).slideDown();

        if ($('#tomorrow .attr_wrap .attr_box:hidden').length === 0) {

            $('#tomorrow #loadMore').fadeOut();
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);

    });


}); //jQuery
