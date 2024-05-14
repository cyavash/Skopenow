$(document).ready(function(){

  var btn = $('.search_web .search_web_taps a'),
      info = $('.search_web .search_web_taps_con .tab-content');
  
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }
  
  btn.click(function(e) {
    e.preventDefault();
    var index = $(this).index();
    info.fadeOut(300);
    info.eq(index).fadeIn(300);
    $('.search_web .search_web_taps a').removeClass('active');
    $(this).addClass('active');
  });
})