//sub15.js

$(function () {
  $("nav .gnb li").mouseenter(function () {
    $(".sub").slideDown();
  });

  $(".sub_wrap")
    .parents()
    .mouseleave(function () {
      $(".sub").stop().slideUp();
    }); //서브메뉴

  $(".searchBox a.searchBtn").click(function (e) {
    e.preventDefault();
  });

  $(".tabmenu > li > a").click(function (e) {
    e.preventDefault();

    $(this).parent().addClass("active").siblings().removeClass("active");
  });

  $(".tabmenu>li:nth-child(1)").click(function () {
    $("#play, #ticket, #park, #annual").hide();

    $("#seoulland").show();
  });


  $(".tabmenu>li:nth-child(2) a").click(function () {
    $("#seoulland,  #ticket, #park, #annual").hide();

    $("#play").show();
  });

  $(".tabmenu>li:nth-child(3) a").click(function () {
    $("#seoulland, #play, #park, #annual").hide();

    $("#ticket").show();
  });

  $(".tabmenu>li:nth-child(4) a").click(function () {
    $("#seoulland, #play, #ticket, #annual").hide();

    $("#park").show();
  });

  $(".tabmenu>li:nth-child(5) a").click(function () {
    $("#seoulland, #play, #ticket, #park").hide();

    $("#annual").show();
  }); //탭메뉴

  $(".faqCon>.faqBox>a").click(function (e) {
    e.preventDefault();

    $(this).siblings(".answer").stop().slideToggle(800, "easeOutQuint");

    $(this).toggleClass("rotate");
  });
}); //jQuery
