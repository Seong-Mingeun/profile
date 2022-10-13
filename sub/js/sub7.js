//sub7.js

$(function(){
	
    $('nav .gnb li').mouseenter(function () {

        $('.sub').slideDown();

    });
	
    $('.sub_wrap').parents().mouseleave(function () {
        $('.sub').stop().slideUp();

    }); //서브메뉴
    
    
	/*slide*/
    var width = $('.card_slider').attr('data-width');
    var height = $('.card_slider').attr('data-height');
    
/*    var count = $('.card_slider .card_box').length;
    console.log('card box 갯수:' +count);*/
    
    //css값 적용하기
    $('.card_slider').css({
        width: width,
        height: height
    }).find('.card_boxwrap').css({
        width: 6 * width,
        height: height
    }).find('.card_box').css({
        width: width /4 - 30,
        height: height
    });
    
   var currentPage = 0;
    var changePage = function(){
        $('#shinhan .card_boxwrap').animate({
            left: -(currentPage*width)/4
        });
    }
    
       var currentPage1 = 0;
    var changePage1 = function(){
        $('#bc .card_boxwrap').animate({
            left: -(currentPage1*width)/4
        });
    }
    
    var currentPage2 = 0;
    var changePage2 = function(){
        $('#samsung .card_boxwrap').animate({
            left: -(currentPage2*width)/4
        });
    }
    
    var currentPage3 = 0;
    var changePage3 = function(){
        $('#nh .card_boxwrap').animate({
            left: -(currentPage3*width)/4
        });
    }
    
    $('#shinhan #left_btn').click(function(){
        if(currentPage>0){
            currentPage = currentPage-1;
            changePage();
        }
    });
    
    $('#shinhan #right_btn').click(function(){
        if(currentPage < 2){
            currentPage = currentPage+1;
            changePage();
        }
    });
    
    $('#bc #left_btn').click(function(){
        if(currentPage1>0){
            currentPage1 = currentPage1-1;
            changePage1();
        }
    });
    
    $('#bc #right_btn').click(function(){
        if(currentPage1 < 2){
            currentPage1 = currentPage1+1;
            changePage1();
        }
    });
    
    $('#samsung #left_btn').click(function(){
        if(currentPage2>0){
            currentPage2 = currentPage2-1;
            changePage2();
        }
    });
    
    $('#samsung #right_btn').click(function(){
        if(currentPage2 < 2){
            currentPage2 = currentPage2+1;
            changePage2();
        }
    });
    
    $('#nh #left_btn').click(function(){
        if(currentPage3>0){
            currentPage3 = currentPage3-1;
            changePage3();
        }
    });
    
    $('#nh #right_btn').click(function(){
        if(currentPage3 < 2){
            currentPage3 = currentPage3+1;
            changePage3();
        }
    });
    
	
		   $('.card_info h2').click(function(){
                $(this).next().stop().slideToggle(600,"linear",function(){
				});

            });
	
	
}); //jQuery