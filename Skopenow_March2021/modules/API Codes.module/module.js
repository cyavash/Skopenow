$(document).ready(function(){

  var btn = $('.api_codes .tab-title'),
      info = $('.api_codes .tab-content');

  btn.click(function(e) {
    e.preventDefault();
    var index = $(this).index();
    info.hide();
    info.eq(index).show();
    $('.api_codes .tab-title').removeClass('active');
    $(this).addClass('active');
  });

});


window.onload = function() {
  hljs.highlightAll();
  var aCodes = document.getElementsByTagName('pre');
  for (var i=0; i < aCodes.length; i++) {
    hljs.highlightBlock(aCodes[i]);
  }

}