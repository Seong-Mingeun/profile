$(function () {


    /*//////////calendar plug-in /////////////*/

    function selectDate(date) {
        $('.calendar-wrapper').updateCalendarOptions({
            date: date
        });
    }
    var defaultConfig = {
        weekDayLength: 1,
        date: new Date(),
        onClickDate: selectDate,
        showYearDropdown: true,
    };
    $('.calendar-wrapper').calendar(defaultConfig);
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-36251023-1']);
    _gaq.push(['_setDomainName', 'jqueryscript.net']);
    _gaq.push(['_trackPageview']);
    (function () {
        var ga = document.createElement('script');
        ga.type = 'text/javascript';
        ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(ga, s);
    })();
    try {
        fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
            method: 'HEAD',
            mode: 'no-cors'
        })).then(function (response) {
            return true;
        }).catch(function (e) {
            var carbonScript = document.createElement("script");
            carbonScript.src = "//cdn.carbonads.com/carbon.js?serve=CK7DKKQU&placement=wwwjqueryscriptnet";
            carbonScript.id = "_carbonads_js";
            document.getElementById("carbon-block").appendChild(carbonScript);
        });
    } catch (error) {
        console.log(error);
    }
    $('.calendar-container').calendar({
        date: new Date() // today
    });
    $('.calendar-container').calendar({
        date: new Date(),
        disable: function (date) {
            return date < new Date();
        }
    });
    $('.calendar-wrapper').calendar({
        // text for prev/next buttons
        prevButton: "◀",
        nextButton: "▶", // custom separator between the month and the year in the month view.
        monthYearSeparator: " ", // false = 4 months in a row
        showThreeMonthsInARow: true, // whether to change either month or year
        enableMonthChange: true, // whether to disable year view
        enableYearView: false, // shows a Today button on the bottom of the calendar
        showTodayButton: true,
        todayButtonContent: "오늘", // highlights all other dates with the same week-day
        highlightSelectedWeekday: false, // highlights the selected week that contains the selected date
        highlightSelectedWeek: true, // whether to enable/disable the year selector
        showYearDropdown: false, // min/max dates
        // Date Object or Date String
        min: null,
        max: null
    });




    /*//////////인원선택 /////////////*/

    // 1.동일한 클래스x or 인덱스 활용
    // 2.변수 범위 정하기 변수 숫자 초기화


    $('.minus').click(function (e) {
        e.preventDefault();

        var idx = $('.minus').index(this);
        console.log('idx: ' + idx);

        var count = $('.begin').eq(idx).text();
        console.log('minus: ' + count);

        count--;
        if (count < 0) count = 0;

        $('.begin').eq(idx).text(count);
    });


    $('.plus').click(function (e) {
        e.preventDefault();

        var idx = $('.plus').index(this);
        console.log('idx: ' + idx);

        var count = $('.begin').eq(idx).text();
        console.log('plus: ' + count);

        count++;
        if (count > 10) {
            count = 10;
            alert('예매 가능한 인원 수가 초과하였습니다.');
        }


        // 박스별 카운트 구분
        var total = [parseInt($('.begin').eq(0).text()),
                     parseInt($('.begin').eq(1).text()),
                     parseInt($('.begin').eq(2).text())];
        var sum = 0;

        for (var i = 0; i < total.length; i++) {
            sum += total[i];
        }

        if (sum >= 10) {
            alert('예매 가능한 인원 수가 초과 하였습니다.');
            return false;
        }

        console.log('sum: ' + sum);

        $('.begin').eq(idx).text(count);

    });

    
    //예매 버튼 클릭 시 상단 위로
    var scTop = $('.reserve').offset().top;
    console.log(scTop);


    $('#booking-btn').click(function (e) {
        e.preventDefault();

        alert('예매가 완료되었습니다.');
            
        


        $('html, body').stop().animate({
            scrollTop: scTop
        }, 400, 'easeOutQuad', function(){
              location.reload();
        });
        
  /*      $('html, body').css({
            position: "relative",
            top: scTop
        });*/

    }); ///click - #pay-btn



}); ///jQuery
