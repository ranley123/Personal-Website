
$(function(){
  var isHiden = true;	
  var isHiden = true;	/*控制切换菜单*/
  $('.close').click(function(){
      if(isHiden){
    $('#popView').animate({left:'+=100%'});//菜单块向右移动
  }else{
    $('#popView').animate({left:'-=100%'}); //菜单块向左移动
  }
  isHiden = !isHiden;
});
$('#resume').click(function(){
  if(isHiden){
    $('#popView').animate({left:'+=100%'});//菜单块向右移动
  }else{
    $('#popView').animate({left:'-=100%'}); //菜单块向左移动
  }
  isHiden = !isHiden;
});

});

$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
      $('#return-to-top').fadeIn(200);    // Fade in the arrow
  } else {
      $('#return-to-top').fadeOut(200);   // Else fade out the arrow
  }
});
$('#return-to-top').click(function() {      // When arrow is clicked
  $('body,html').animate({
      scrollTop : 0                       // Scroll to top of body
  }, 500);
});
