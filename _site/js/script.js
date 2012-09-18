$(function() {
  $(window).scroll(function(){
    if($(window).scrollTop() != 0) $('.navbar').stop().animate({'opacity':'0.4'},200);
    else $('.navbar').stop().animate({'opacity':'1'},200);
  });
  $('.navbar').hover(
    function () {
      if($(window).scrollTop() != 0) $('.navbar').stop().animate({'opacity':'1'},600);
    },
    function () {
      if($(window).scrollTop() != 0) $('.navbar').stop().animate({'opacity':'0.4'},600);
    }
  );
});