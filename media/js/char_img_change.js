$(function () {

    $('.char_categoryBox .char_category:nth-child(1)').click(function () {
        $('#riley').show().siblings().hide();

    $(this).children('.char_cast').addClass('on').parent().siblings().children('.char_cast').removeClass('on');
    });

    $('.char_categoryBox .char_category:nth-child(2)').click(function () {
        $('#joy').show().siblings().hide();

     $(this).children('.char_cast').addClass('on').parent().siblings().children('.char_cast').removeClass('on');
    });

    $('.char_categoryBox .char_category:nth-child(3)').click(function () {
        $('#sad').show().siblings().hide();
        
    $(this).children('.char_cast').addClass('on').parent().siblings().children('.char_cast').removeClass('on');
    });

    $('.char_categoryBox .char_category:nth-child(4)').click(function () {
        $('#anger').show().siblings().hide();
        
    $(this).children('.char_cast').addClass('on').parent().siblings().children('.char_cast').removeClass('on');
    });

    $('.char_categoryBox .char_category:nth-child(5)').click(function () {
        $('#disgust').show().siblings().hide();
        
    $(this).children('.char_cast').addClass('on').parent().siblings().children('.char_cast').removeClass('on');
    });

    $('.char_categoryBox .char_category:nth-child(6)').click(function () {
        $('#fear').show().siblings().hide();
        
    $(this).children('.char_cast').addClass('on').parent().siblings().children('.char_cast').removeClass('on');
    });

});
