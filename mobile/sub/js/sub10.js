//sub11.js


$(function () {


    //countUp

    var count0 = 0;
    var count1 = 0;
    var count2 = 0;

    timeCounter();
    setTimeout(timeCounter1, 400);
    //timeCounter1();

    function timeCounter() {
        //(10/10) * 100
        id0 = setInterval(count0Fn, 100);

        function count0Fn() {
            count0++;
            if (count0 > 10) {
                clearInterval(id0);
            } else {
                $('.clock0').text(count0);
            }
        } //countFn

    } //timeCounter

    function timeCounter1() {
        //(10/21)* 100

        id1 = setInterval(count1Fn, 47.61904761904762);

        function count1Fn() {
            count1++;
            if (count1 > 21) {
                clearInterval(id1);
            } else {
                $('.clock1').text(count1);
            }
        }

        //(10/22) * 100
        id2 = setInterval(count2Fn, 45.45454545454545);

        function count2Fn() {
            count2++;

            if (count2 > 22) {
                clearInterval(id2);
            } else {
                $('.clock2').text(count2);
            }
        }

    } // timeCounter1


});
