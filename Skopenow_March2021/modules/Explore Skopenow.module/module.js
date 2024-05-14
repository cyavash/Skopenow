$('.explore_prouduct_btn').click(function() {
  $('body').toggleClass('explore-open');
});

$(".explore_prouduct_btn, .explore-skopenow-wrap ").click(function(a) {
  a.stopPropagation()
});
$('body').click(function() {
  $('body').removeClass('explore-open');

});