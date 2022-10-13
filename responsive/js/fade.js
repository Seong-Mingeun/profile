//fade.js

var autocall; //인터벌용 함수

$(function(){

    autocall = setInterval(fadeImg, 3000);
    
    });  //function
    

    function fadeImg() {
        
        var fimg = $('.fadeShow img').first(); //첫 번째 이미지
        var nimg = fimg.next(); //두 번째 이미지
        
        //두 번째 이미지 display none으로 설정, fadeIn 준비
        //z-index값을 1로 만드는 class추가
        nimg.hide().addClass('active').fadeIn(800, function(){
            //첫 번째 이미지는 잘라서 맨 뒤로 이동시키고, z-index가 담긴 class제거
            $('.fadeShow').append(fimg);
            fimg.removeClass('active');
        });
        
    } //fadeImg
    
