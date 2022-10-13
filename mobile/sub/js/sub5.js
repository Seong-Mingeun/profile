//sub6.js

$(function () {

    //loadmore 
    $('.all_event ul li').slice(0, 4).show();

    $('#loadMore').on('click', function (e) {

        e.preventDefault();

        $('.all_event ul li:hidden').slice(0, 4).slideDown();

        if ($('.all_event ul li:hidden').length === 0) {

            $('#loadMore').fadeOut();
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);

    });



});
