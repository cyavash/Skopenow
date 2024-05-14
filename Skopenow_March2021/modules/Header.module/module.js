$(document).ready(function() {
  $('.mobile_trigger').click(function() {
    $('.new_header').toggleClass('active');
  });

  if($(window).width() < 992) {
    $('.new_header .navigation ul li .fa').click(function() {
      $(this).parent().toggleClass('active');
      // Toggle the sub_group display when .fa arrow is clicked
      $(this).siblings('.sub_group').slideToggle();
    });

    // Adjusting the event for the text as well, to toggle the submenu
    $('.new_header .navigation ul li > a').click(function(e) {
      e.preventDefault(); // Prevent the default anchor behavior
      $(this).parent().toggleClass('active');
      $(this).siblings('.sub_group').slideToggle();
    });
  }

  $(window).scroll(function() {
    if($(window).scrollTop() > 100) {
      $('.new_header').css('border-color', '#eee');
    }
    else {
      $('.new_header').css('border-color', '#fff');
    }
  });
});
