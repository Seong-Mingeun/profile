//popup.js

$(function(){
    //팝업 시 뒷배경 스크롤 고정
    function disable() {
        scrollPosition = window.pageYOffset;
        $('body').addClass('scrollOff').on('scroll touchmove mousewheel', function(e){
            e.preventDefault();
        })
    }
    //팝업 창 끄고 다시 스크롤 생성
    function enable() {
        window.scrollTo(0, scrollPosition);
        $('body').removeClass('scrollOff').off('scroll touchmove mousewhell');
    }
    
    $('.season .swiper-wrapper .swiper-slide').click(function(){
        
        if($(this).hasClass('slide_01')){
            $('.popup01').css('display','block');
        }else if($(this).hasClass('slide_02')){
            $('.popup02').css('display','block');
        }else if($(this).hasClass('slide_03')){
            $('.popup03').css('display','block');
        }else if($(this).hasClass('slide_04')){
            $('.popup04').css('display','block');
        }else if($(this).hasClass('slide_05')){
            $('.popup05').css('display','block');
        }else if($(this).hasClass('slide_06')){
            $('.popup06').css('display','block');
        }else if($(this).hasClass('slide_07')){
            $('.popup07').css('display','block');
        }
        disable();
    });
    
    $('.close_btn').click(function(){
        $('.popup').css('display', 'none');
        enable();
    });
    
});