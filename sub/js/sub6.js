//sub6.js

$(function () {

    $('nav .gnb li').mouseenter(function () {

        $('.sub').slideDown();

    });

    $('.sub_wrap').parents().mouseleave(function () {
        $('.sub').stop().slideUp();

    }); //서브메뉴


    //슬라이더
    $('.best_slider ul').css('width', $('.best_slider ul li').width() * $('.best_slider ul li').size());

    $('.best_slider ul li:last').prependTo('.best_slider ul');

    var chW = $('.best_slider ul li').width();
    console.log('margin-left: -' + chW);
    $('.best_slider ul').css('margin-left', -chW);


    //nextBtn(다음)
    $('.nextBtn').click(function (e) {
        e.preventDefault();

        $('.best_slider ul').animate({
            marginLeft: '-=' + $('.best_slider ul li').width() //-1600
        }, 'slow', function () {
            $('.best_slider ul li:first').appendTo('.best_slider ul');
            $('.best_slider ul').css('margin-left', -chW);
        })

    }); //nextBtn click()


    //prevBtn (이전)
    $('.prevBtn').click(function (e) {
        e.preventDefault();

        $('.best_slider ul').animate({
            marginLeft: '+=' + chW
        }, 'slow', function () {
            $('.best_slider ul li:last').prependTo('.best_slider ul');
            $('.best_slider ul').css('margin-left', -chW);
        });
    }); //prevBtn click()


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
