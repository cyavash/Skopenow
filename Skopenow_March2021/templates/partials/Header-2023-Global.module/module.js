$('.menu-wrap').click(function() {
  $(this).toggleClass('active');
  $('.menu-wrapper').toggleClass('menu');
  $('.sap-header').toggleClass('menus');
  $('#overlay').toggleClass('open');
});


$('.menu-grp.mega-nav > a').after(' <div class="child-trigger"><i></i></div>');
$('.menu-wrap').click(function() {
  $(this).next('.menu-wrapper').slideToggle(250);
  $('body').toggleClass('mobile-open');
  $('.child-trigger').removeClass('child-open');
  $('.mega-wrapper').slideUp(250);
  return false;
});

$('.child-trigger').click(function() {
				$(this).parent().siblings('.mega-wrapper').find('.mega-wrapper').slideUp(250);
				$(this).next('.mega-wrapper').slideToggle(250);
				$(this).next('.mega-wrapper').children('.menu-item-has-children').find('.mega-wrapper').slideUp(250);
				
				return false;
			});